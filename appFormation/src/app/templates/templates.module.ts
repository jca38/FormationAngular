import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TitreAComponent } from './titre-a/titre-a.component';
import { TitreBComponent } from './titre-b/titre-b.component';
import { TextsModule } from '../texts/texts.module';



@NgModule({
  declarations: [TitreAComponent, TitreBComponent],
  imports: [
    CommonModule,
    TextsModule
  ],
  exports: [
    TitreAComponent,
    TitreBComponent
  ]
})
export class TemplatesModule { }
