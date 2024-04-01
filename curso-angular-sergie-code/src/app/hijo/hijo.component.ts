import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.css']
})
export class HijoComponent {
  //Este es el mensaje que recibe desde el padre
  // @Input() recibeHijo: string = '';

  @Output() mensajeDesdeHijo = new EventEmitter<string>();
  mensajeHijoAPadre = ''

  enviarMensaje(){
    this.mensajeDesdeHijo.emit(this.mensajeHijoAPadre)
  }

  @Output() incrementarEvent = new EventEmitter<void>();
  @Output() decrementarEvent = new EventEmitter<void>();

  incrementar(){
    this.incrementarEvent.emit();
  }
  decrementar(){
    this.decrementarEvent.emit();
  }

}
