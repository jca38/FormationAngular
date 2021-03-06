import { NgModule } from '@angular/core';
import { CommonModule, getLocaleDayPeriods } from '@angular/common';
import { TableLightComponent } from './components/table-light/table-light.component';
import { TableDarkComponent } from './components/table-dark/table-dark.component';
import { TotalPipe } from './pipes/total.pipe';
import { JoursPipe } from './pipes/jours.pipe';
import { ColorStateDirective } from './directives/color-state.directive';
import { ColorJoursDirective } from './directives/color-jours.directive';
import { BtnComponent } from './components/btn/btn.component';
import { RouterModule } from '@angular/router';
import { TableStrippedComponent } from './components/table-stripped/table-stripped.component';
import { ColorRoleDirective } from './directives/color-role.directive';


@NgModule({
  declarations: [TableLightComponent, TableDarkComponent, TotalPipe, JoursPipe, ColorStateDirective, ColorJoursDirective, BtnComponent, TableStrippedComponent, ColorRoleDirective],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    // Composants à exporter
    TableLightComponent,
    TableDarkComponent,
    TableStrippedComponent,
    BtnComponent,

    // Pipes à exporter
    JoursPipe,
    TotalPipe,

    // Directives à exporter
    ColorStateDirective,
    ColorJoursDirective,
    ColorRoleDirective
  ]
})
export class SharedModule { }
