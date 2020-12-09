import { NgModule } from '@angular/core';
import { CommonModule, getLocaleDayPeriods } from '@angular/common';
import { TableLightComponent } from './components/table-light/table-light.component';
import { TotalPipe } from './pipes/total.pipe';
import { JoursPipe } from './pipes/jours.pipe';
import { ColorStateDirective } from './directives/color-state.directive';
import { ColorJoursDirective } from './directives/color-jours.directive';



@NgModule({
  declarations: [TableLightComponent, TotalPipe, JoursPipe, ColorStateDirective, ColorJoursDirective],
  imports: [
    CommonModule
  ],
  exports: [
    TableLightComponent,
    JoursPipe,
    TotalPipe,
    ColorStateDirective,
    ColorJoursDirective
  ]
})
export class SharedModule { }
