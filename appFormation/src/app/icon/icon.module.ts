import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconNavComponent } from './icon-nav/icon-nav.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { IconEditComponent } from './icon-edit/icon-edit.component';
import { IconDeleteComponent } from './icon-delete/icon-delete.component';
import { IconLogoutComponent } from './icon-logout/icon-logout.component';
import { IconFilterComponent } from './icon-filter/icon-filter.component';
import { IconAddComponent } from './icon-add/icon-add.component';



@NgModule({
  declarations: [IconNavComponent, IconEditComponent, IconDeleteComponent, IconLogoutComponent, IconFilterComponent, IconAddComponent],
  imports: [
    CommonModule,
    FontAwesomeModule
  ],
  exports:[
    IconNavComponent,
    IconEditComponent,
    IconDeleteComponent,
    IconLogoutComponent,
    IconFilterComponent,
    IconAddComponent
  ]
})
export class IconModule { }
