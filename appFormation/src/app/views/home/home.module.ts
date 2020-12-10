import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { PageHomeComponent } from './pages/page-home/page-home.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TemplatesModule } from 'src/app/templates/templates.module';


@NgModule({
  declarations: [PageHomeComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    ReactiveFormsModule,
    TemplatesModule
  ]
})
export class HomeModule { }
