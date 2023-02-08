import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent {
  contador: number = 0;
  add(){
    this.contador++
  }

  rest(){
    this.contador--
  }

  reset(){
    this.contador = 0
  }

}
