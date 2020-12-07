import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { UiModule } from './ui/ui.module';
import { IconModule } from './icon/icon.module';
import { CoreModule } from './core/core.module';
import { TextsModule } from './texts/texts.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FontAwesomeModule,
    UiModule,
    IconModule,
    CoreModule,
    TextsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
