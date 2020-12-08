import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { UiModule } from './ui/ui.module';
import { IconModule } from './icon/icon.module';
import { CoreModule } from './core/core.module';
import { TextsModule } from './texts/texts.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    UiModule,
    IconModule,
    CoreModule,
    TextsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
