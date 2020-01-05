import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { appRoutingModule } from './app.routing';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';

import { DayOneComponent } from './day-one';

@NgModule({
  imports:      [ BrowserModule, FormsModule,appRoutingModule ],
  declarations: [ AppComponent, HelloComponent, DayOneComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
