import { Component, Input, EventEmitter,  Output } from '@angular/core';

@Component({
  selector: 'app-button-reset',
  templateUrl: './button-reset.component.html',
  styleUrls: ['./button-reset.component.css']
})
export class ButtonResetComponent {
  @Input()
  contador: number = 0;

  @Output() onReset: EventEmitter<number> = new EventEmitter()

  reset(){
  this.contador = 0;
    this.onReset.emit(this.contador)
  }
}
