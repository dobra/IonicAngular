import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { StoriaUsers } from '../../providers/storiaUsers'
import { User } from "../../models/user";

@Component({
  selector: 'page-users',
  templateUrl: 'users.html'
})
export class UsersPage {
  users: User[]

  constructor(public navCtrl: NavController, private storiaUsers: StoriaUsers) {}

  ionViewDidLoad() {
    this.storiaUsers.load().subscribe( users =>{
      this.users = users;
    })
    console.log('Hello Users Page');
  }
}