import { NgModule } from '@angular/core';
//import { IonicModule } from 'ionic-angular';
import { UsersPage } from './users';

@NgModule({
  declarations: [
    UsersPage,
  ],
  imports: [
   // IonicModule.forChild(Users),
  ],
  exports: [
    UsersPage
  ]
})
export class UsersModule {}
