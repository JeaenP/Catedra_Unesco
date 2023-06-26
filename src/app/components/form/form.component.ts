import { Component, ViewEncapsulation } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { FormulariosService } from 'src/app/services/formularios.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class FormComponent {

  allFieldsCompleted: boolean = false;
  

  formulario: FormGroup;

  constructor(
    private formulariosService : FormulariosService, private formBuilder: FormBuilder
  ) {
    this.formulario = this.formBuilder.group({
      Consentimiento: ['', Validators.required],
      Fecha: ['', Validators.required],
      Edad: ['', Validators.required],
      
      opcion: [''] ,


      P1: ['',Validators.required],
      P2: ['',Validators.required],
      P3: ['',Validators.required],
      P4: ['',Validators.required],
      P5: ['',Validators.required],
      P8: ['',Validators.required],

      P10: ['',Validators.required],
      P11: ['',Validators.required],
      P12: ['',Validators.required],
      P13: ['',Validators.required],




      P171: ['', Validators.required],
      P172: ['', Validators.required],
      P173: ['', Validators.required],
      P174: ['', Validators.required],
      P175: ['', Validators.required],
      P176: ['', Validators.required],
      P177: ['', Validators.required],
      P178: ['', Validators.required],
      P181: ['', Validators.required],
      P182: ['', Validators.required],
      P183: ['', Validators.required],
      P184: ['', Validators.required],
      P185: ['', Validators.required],
      P186: ['', Validators.required],
      P187: ['', Validators.required],
      P188: ['', Validators.required],
      P189: ['', Validators.required],

      P201: ['', Validators.required],
      P202: ['', Validators.required],
      P203: ['', Validators.required],
      P204: ['', Validators.required],
      P205: ['', Validators.required],
      P211: ['', Validators.required],
      P212: ['', Validators.required],
      P213: ['', Validators.required],
      P214: ['', Validators.required],
      P215: ['', Validators.required],
      P216: ['', Validators.required],
      P217: ['', Validators.required],
      P218: ['', Validators.required],
      P219: ['', Validators.required],
      P2110: ['', Validators.required],
      P221: ['', Validators.required],
      P222: ['', Validators.required],
      P223: ['', Validators.required],
      P224: ['', Validators.required],


      P24: ['',Validators.required],
      P25: ['',Validators.required],
      P26: ['',Validators.required],
      P27: ['',Validators.required],
      P28: ['',Validators.required],
      P29: ['',Validators.required],
      P30: ['',Validators.required],

      P33: ['',Validators.required],
      P34: ['',Validators.required],
      P35: ['',Validators.required],
      P371: ['',Validators.required],
      P372: ['',Validators.required],
      P373: ['',Validators.required],
      P374: ['',Validators.required],
      P375: ['',Validators.required],
      P376: ['',Validators.required],
      P377: ['',Validators.required],
      P378: ['',Validators.required],
      P379: ['',Validators.required],
      P3710: ['',Validators.required],
      P3711: ['',Validators.required],
      P3712: ['',Validators.required],

      
      P38: ['',Validators.required],
      P39: ['',Validators.required],
      P40: ['',Validators.required],
      P41: ['',Validators.required],
      P42: ['',Validators.required],
      P43: ['',Validators.required],




      P44: ['',Validators.required]

      

      
      
    })
    
    

  }
  
  ngOnInit(): void {
  }

  async onSubmit() {

    if (this.formulario.invalid) {
      this.allFieldsCompleted = true;
      return;
    }
  
    this.allFieldsCompleted = false;

    console.log(this.formulario.value)
    const response = await this.formulariosService.addPrueba(this.formulario.value);
    console.log(response);
  }
}
