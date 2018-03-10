import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})

export class EventComponent implements OnInit {

  @Input() event;

  constructor() { }  
  ngOnInit() {
  }
  
  colorBg: boolean = false;
  visibility: boolean = true;

  openForm() {
    this.visibility = !this.visibility;
  }

  changeColor() {
    this.colorBg = !this.colorBg;
  }
  
  
}
