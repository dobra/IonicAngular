import { Component, ViewChild } from '@angular/core';

import { Platform, MenuController, Nav } from 'ionic-angular';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { UsersPage } from '../pages/users/users';
import { CreateReservationPage } from '../pages/create-reservation-page/create-reservation-page';
import { CreateUserPage } from '../pages/create-user-page/create-user-page';
import { ViewReservationsPage } from '../pages/view-reservations-page/view-reservations-page';
import { CalendarPage } from '../pages/calendar-page/calendar-page';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  // make UsersPage the root (or first) page
  rootPage = UsersPage;
  pages: Array<{title: string, component: any}>;

  constructor(
    public platform: Platform,
    public menu: MenuController,
    public statusBar: StatusBar,
    public splashScreen: SplashScreen
  ) {
    this.initializeApp();

    // set our app's pages
    this.pages = [
      { title: 'View Users', component: UsersPage },
      { title: 'Create User', component: CreateUserPage },
      { title: 'View Reservations', component: ViewReservationsPage },   
      { title: 'Create Reservation', component: CreateReservationPage },  
      { title: 'View Calendar', component:  CalendarPage },  
    ];
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleLightContent();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // close the menu when clicking a link from the menu
    this.menu.close();
    // navigate to the new page if it is not the current page
    this.nav.setRoot(page.component);
  }
}
