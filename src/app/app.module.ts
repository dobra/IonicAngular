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
import { StoriaUsers } from "../providers/storiaUsers";
import { HttpModule } from '@angular/http';

@NgModule({
  declarations: [
    MyApp,
    UsersPage,
    CreateReservationPage,
    CreateUserPage,
    ViewReservationsPage
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
    ViewReservationsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,    
    StoriaUsers,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
    
  ]
})
export class AppModule {}
