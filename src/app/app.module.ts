import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { InputsModule } from 'projects/inputs/src/public-api';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    InputsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
