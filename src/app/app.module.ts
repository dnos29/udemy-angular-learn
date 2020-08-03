import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BasicHighLigthDirective } from './basic-highligth/basic-highligth.directive';

@NgModule({
  declarations: [
    AppComponent,
    BasicHighLigthDirective,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
