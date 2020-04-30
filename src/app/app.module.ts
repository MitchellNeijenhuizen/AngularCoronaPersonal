//Originele app.module.ts voor "regels" component gemaakt om op woensdag 22 april 
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RegelsComponent } from './regels/regels.component';
import { FullCalendarModule } from '@fullcalendar/angular'; // for FullCalendar!

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { CalendarComponent } from './calendar/calendar.component';

import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatMomentDateModule } from "@angular/material-moment-adapter";
import { CalendarTwoComponent } from './calendar-two/calendar-two.component';



@NgModule({
  declarations: [
    AppComponent,
    RegelsComponent,
    CalendarComponent,
    CalendarTwoComponent, 
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule, 
    MatSliderModule, 
    MatDatepickerModule,
    MatMomentDateModule,
    FullCalendarModule 

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


