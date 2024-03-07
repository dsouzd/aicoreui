import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UicomponentsModule } from 'src/components/uicomponents.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UicomponentsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
