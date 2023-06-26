import { Injectable } from '@angular/core';
import { Firestore, collection, addDoc } from '@angular/fire/firestore';
import { Formulario } from '../interfaces/formulario';

@Injectable({
  providedIn: 'root'
})
export class FormulariosService {

  constructor(private firestore: Firestore) {



  }

  addPrueba(formulario: Formulario) {
    const pruebaref = collection(this.firestore, 'formularios');
    return addDoc(pruebaref, formulario);
  }
}
