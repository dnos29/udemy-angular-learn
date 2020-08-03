import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BasicHighLigthDirective } from './basic-highligth/basic-highligth.directive';
import { BetterHightligthDirective } from './directives/better-hightligth.directive';
import { UnlessDirective } from './directives/unless.directive';
@NgModule({
  declarations: [
    AppComponent,
    BasicHighLigthDirective,
    BetterHightligthDirective,
    UnlessDirective,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
