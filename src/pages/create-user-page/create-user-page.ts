import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CreateUser } from "../../models/user";
import { Camera, CameraOptions } from '@ionic-native/camera';


/**
 * Generated class for the CreateUserPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-create-user-page',
  templateUrl: 'create-user-page.html',
})
export class CreateUserPage {
  userCreate : CreateUser;
  password : string;
  confirmpassword : string;




  constructor(public navCtrl: NavController, public navParams: NavParams, private camera: Camera) {
    this.userCreate = {
"FirstName": "",
"LastName": "",
"TelNumber": "",
"Password": "",
"AccountType": "",
"BirthDate": new Date,
"Picture": ""
}
  
  
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CreateUserPage');
  }

    onKey(event: any) { // without type info
    //this.userCreate.FirstName = event.target.value;
    console.log("Pisu :"+this.userCreate.FirstName);
  }

  GetPicture()
  {
    let options = {
    destinationType   : this.camera.DestinationType.DATA_URL,
    sourceType        : this.camera.PictureSourceType.PHOTOLIBRARY
};

this.camera.getPicture(options).then((imageData) => {
 // imageData is either a base64 encoded string or a file URI
 // If it's base64:
 let base64Image = 'data:image/jpeg;base64,' + imageData;
}, (err) => {
 // Handle error
});
  }
}
