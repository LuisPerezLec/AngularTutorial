import { Component, OnInit } from '@angular/core';
import { ServicioFamiliarService } from '../servicio-familiar.service'

@Component({
  selector: 'app-padre',
  templateUrl: './padre.component.html',
  styleUrls: ['./padre.component.css']
})
export class PadreComponent implements OnInit{
  //Opción 1 para inyectar dependencias:
  constructor(private _servicioFamiliar: ServicioFamiliarService){

  }
  //Opción 2 para inyectar dependencias (a partir de Angular 15):
  //private _servicioFamiliar2 = inject(ServicioFamiliarService);

  nombre?: string;
  fecha?: Date = new Date();
  dolar: number = 21;
  pi?: number = Math.PI;
  battery: number = 0.25; 

  ngOnInit(): void {
    this._servicioFamiliar.setHermanoGrande('Juan');
    this.nombre = this._servicioFamiliar.getHermanoGrande();
  }


  // mensajePadre = 'Mensaje del padre para el hijo';

  //Contador
  valorContador: number = 0;

  incrementar (){
    this.valorContador++;
  }

  decrementar (){
    this.valorContador--;
  }

  mensajeRecibido: string = '';

  recibirMensaje($event: string){
    this.mensajeRecibido = $event;
  }

  saludar(){
    this._servicioFamiliar.saludar(this._servicioFamiliar.getHermanoPequeno() || '');
  }

  preguntar(){
    console.log(this._servicioFamiliar.preguntarPorHijo());
  }
}
