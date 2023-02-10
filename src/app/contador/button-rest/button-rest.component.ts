import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button-rest',
  templateUrl: './button-rest.component.html',
  styleUrls: ['./button-rest.component.css']
})
export class ButtonRestComponent {
  @Input()
  contador: number = 0;

  @Output()
  onRest: EventEmitter<number> = new EventEmitter()

  rest(){
    this.contador--
    this.onRest.emit(this.contador)
  }

}
