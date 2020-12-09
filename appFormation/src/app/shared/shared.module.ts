import { NgModule } from '@angular/core';
import { CommonModule, getLocaleDayPeriods } from '@angular/common';
import { TableLightComponent } from './components/table-light/table-light.component';
import { TotalPipe } from './pipes/total.pipe';
import { JoursPipe } from './pipes/jours.pipe';
import { ColorStateDirective } from './directives/color-state.directive';



@NgModule({
  declarations: [TableLightComponent, TotalPipe, JoursPipe, ColorStateDirective],
  imports: [
    CommonModule
  ],
  exports: [
    TableLightComponent,
    JoursPipe,
    TotalPipe,
    ColorStateDirective
  ]
})
export class SharedModule { }
