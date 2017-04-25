import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Calendar} from '@ionic-native/calendar';
/**
 * Generated class for the CalendarPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-calendar-page',
  templateUrl: 'calendar-page.html',
})
export class CalendarPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private calendar: Calendar) {

  }
  calender(){

  this.calendar.createCalendar('MyCalendar').then(
  (msg) => { console.log(msg); },
  (err) => { console.log(err); }
);

console.log("RW permissions: " + this.calendar.hasReadWritePermission());
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad CalendarPage');
  }
  

}
