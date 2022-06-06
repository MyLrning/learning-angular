import { NgModule } from "@angular/core";
import { ContadorComponent } from './contador/contador.component';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [
    ContadorComponent
  ],
  exports: [
    ContadorComponent
  ]
})
export class ContadorModule { }