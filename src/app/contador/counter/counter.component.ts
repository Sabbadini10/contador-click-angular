import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent {
  contador: number = 0;
  handleAdd(value: number){
this.contador = value;
  }
  handleReset(value: number){
    this.contador = value;
  }

  handleRest(value: number){
    this.contador = value;
  }
}
