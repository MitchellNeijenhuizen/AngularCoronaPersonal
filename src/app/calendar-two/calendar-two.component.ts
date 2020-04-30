import { Component, OnInit } from '@angular/core';
import dayGridPlugin from '@fullcalendar/daygrid';

@Component({
  selector: 'app-calendar-two',
  templateUrl: './calendar-two.component.html',
  styleUrls: ['./calendar-two.component.css']
})
export class CalendarTwoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  calendarPlugins = [dayGridPlugin];

}
