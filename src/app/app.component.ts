import { Component, ViewChild} from '@angular/core';
import { NgModel, NgForm } from '@angular/forms';

export class dataEvent {
  constructor(
    public type: string,
    public title: string,
    public descriptionN: string,
    public date: string,
    public operation: string,
    public sum: number,
    public currency: string,
    public from: string,
    public descriptionF: string
  ) { }
}


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  @ViewChild('form') form: NgForm;
  visibility: boolean = true;

  operations = ["Приход", "Расход"];
  currencys: string[] = ["₽", "$", "€"]
  types: string[] = ["Новость", "Транзакция"];

  typesFilter: string[] = ["-", "Новость", "Транзакция"];
  datesFilter: string[] = ["-", "Новые", "Старые"];

  datasEvent: dataEvent[] = [];
  newsEvent = [];
  finsEvent = [];
  newDateEvent1 = [];
  newDateEvent2 = [];
  oldDateEvent1 = [];
  oldDateEvent2 = [];

  newDateEvent = this.datasEvent.sort((a, b) => {
    return +new Date(b.date) - +new Date(a.date);
  })

  oldDateEvent = this.newDateEvent.reverse();
  test() {
    this.newDateEvent1 = [];
    this.newDateEvent2 =[];
    this.oldDateEvent1 = [];
    this.oldDateEvent2 = [];
    this.newsEvent = [];
    this.finsEvent = [];
    for (let i = 0; i < this.datasEvent.length; i++) {

      if (this.datasEvent[i].type === this.types[0]) {
        this.newsEvent.push(this.datasEvent[i])
      }
      if (this.datasEvent[i].type === this.types[1]) {
        this.finsEvent.push(this.datasEvent[i])
      }
    }
    this.newDateEvent1 = this.newsEvent.sort((a, b) => {
      return +new Date(b.date) - +new Date(a.date);
    })
    this.newDateEvent2 = this.finsEvent.sort((a, b) => {
      return +new Date(b.date) - +new Date(a.date);
    })

    this.oldDateEvent1 = this.newDateEvent1.reverse();
    this.oldDateEvent2 = this.newDateEvent2.reverse();

  }
  addEvent(type: string, title: string, descriptionN: string, date: string, operation: string, sum: number, currency: string, from: string, descriptionF: string) {
    this.datasEvent.push(new dataEvent(type, title, descriptionN, date, operation, sum, currency, from, descriptionF));
    this.test();
  }



  openForm() {
    this.visibility = !this.visibility;
  }

  submitForm() {
    this.form.reset();
    console.log(this.datasEvent);

    for (let i = 0; i < this.datasEvent.length; i++) {
      console.log(this.newsEvent[i].date);
    }
  }
  // deleteEvent(event) {
  //   var i= this.datasEvent.indexOf(event);
  //   this.datasEvent.splice(i, 1);
  // }
  
}
