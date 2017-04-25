import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { UsersPage } from "../pages/users/users";
import { CreateReservationPage } from '../pages/create-reservation-page/create-reservation-page';
import { CreateUserPage } from '../pages/create-user-page/create-user-page';
import { ViewReservationsPage } from '../pages/view-reservations-page/view-reservations-page';
import { CalendarPage } from '../pages/calendar-page/calendar-page'
import { StoriaUsers } from "../providers/storiaUsers";
import { HttpModule } from '@angular/http';
import { Calendar } from '@ionic-native/calendar';

@NgModule({
  declarations: [
    MyApp,
    UsersPage,
    CreateReservationPage,
    CreateUserPage,
    ViewReservationsPage,
    CalendarPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    UsersPage,
    CreateReservationPage,
    CreateUserPage,
    ViewReservationsPage,
    CalendarPage
  ],
  providers: [
    StatusBar,
    SplashScreen,    
    StoriaUsers,
    Calendar,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
    
  ]
})
export class AppModule {}
