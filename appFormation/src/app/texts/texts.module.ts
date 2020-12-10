import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GlobalTextComponent } from './global-text/global-text.component';



@NgModule({
  declarations: [GlobalTextComponent],
  imports: [
    CommonModule
  ],
  exports:[
    GlobalTextComponent
  ]
})
export class TextsModule { }
