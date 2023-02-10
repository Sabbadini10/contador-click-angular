import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CounterComponent } from './counter/counter.component';
import { ButtonAddComponent } from './button-add/button-add.component';
import { ButtonRestComponent } from './button-rest/button-rest.component';
import { ButtonResetComponent } from './button-reset/button-reset.component';


@NgModule({
  declarations: [
    CounterComponent,
    ButtonAddComponent,
    ButtonRestComponent,
    ButtonResetComponent
  ],
  imports: [CommonModule],
  exports: [CounterComponent]
})
export class ContadorModule { }
