import { NgModule } from '@angular/core';
import { CommonModule, getLocaleDayPeriods } from '@angular/common';
import { TableLightComponent } from './components/table-light/table-light.component';
import { TotalPipe } from './pipes/total.pipe';
import { JoursPipe } from './pipes/jours.pipe';



@NgModule({
  declarations: [TableLightComponent, TotalPipe, JoursPipe],
  imports: [
    CommonModule
  ],
  exports: [
    TableLightComponent,
    JoursPipe,
    TotalPipe
  ]
})
export class SharedModule { }
