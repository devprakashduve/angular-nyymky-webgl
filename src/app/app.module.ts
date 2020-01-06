import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { appRoutingModule } from './app.routing';

import { AppComponent } from './app.component';

import { HelloComponent } from './hello.component';

import { DayOneComponent } from './day-one';
import { BlogComponent } from './blog';

@NgModule({
  imports:      [ BrowserModule,appRoutingModule ],
  declarations: [ AppComponent, HelloComponent, DayOneComponent, BlogComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
