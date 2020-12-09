import { NgModule } from '@angular/core';
import { CommonModule, getLocaleDayPeriods } from '@angular/common';
import { TableLightComponent } from './components/table-light/table-light.component';
import { TotalPipe } from './pipes/total.pipe';
import { JoursPipe } from './pipes/jours.pipe';
import { ColorStateDirective } from './directives/color-state.directive';
import { ColorJoursDirective } from './directives/color-jours.directive';
import { BtnComponent } from './components/btn/btn.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [TableLightComponent, TotalPipe, JoursPipe, ColorStateDirective, ColorJoursDirective, BtnComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    TableLightComponent,
    JoursPipe,
    TotalPipe,
    ColorStateDirective,
    ColorJoursDirective,
    BtnComponent
  ]
})
export class SharedModule { }
