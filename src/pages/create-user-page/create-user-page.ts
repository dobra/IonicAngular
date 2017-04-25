import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CreateUser } from "../../models/user";
import { Camera, CameraOptions } from '@ionic-native/camera';
import { Http } from '@angular/http'


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

    baseUrl: String;
    coursesUrl : String;
    allUsersRetrievalUrl : String;
    galleryUrl : String;
    allReservationsUrl : String;
    addUserUrl : String;


  constructor(public navCtrl: NavController, public navParams: NavParams, private camera: Camera, private http: Http) {
    this.userCreate = {
      "FirstName": "",
      "LastName": "",
      "TelNumber": "",
      "Password": "",
      "AccountType": "0",
      "BirthDate": "",
      "Picture": "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTRVy67OF98hLfy6VWiIJ6nZewB3vXXNGezgtpDrfSWMDVXbbbE"
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

  CreateUser()
  {
        this.baseUrl = 'https://storiapi.azurewebsites.net';
        this.coursesUrl = 'getallcourses';
        this.allReservationsUrl = 'getallreservations';
        this.galleryUrl = 'getallimages';
        this.addUserUrl = 'adduser';

        console.log("User: "+ JSON.stringify(this.userCreate));

        if(this.password == this.confirmpassword)
        {
          this.userCreate.Password = this.password;
          console.log("User: "+ JSON.stringify(this.userCreate));
        }

        
        this.userCreate.FirstName = "'"+this.userCreate.FirstName+"'";
        this.userCreate.LastName = "'"+this.userCreate.LastName+"'";
        this.userCreate.TelNumber = "'"+this.userCreate.TelNumber+"'";
        this.userCreate.Password = "'"+this.userCreate.Password+"'";
        this.userCreate.AccountType = "'"+this.userCreate.AccountType+"'";
        this.userCreate.BirthDate = "'"+this.userCreate.BirthDate+"'";
        this.userCreate.Picture = "'"+this.userCreate.Picture+"'";


    this.http.post(this.baseUrl + '/' + this.addUserUrl, JSON.stringify(this.userCreate))
            .map(res =>  res.json())
            .subscribe(
                data => {console.log(data);},
                err => console.log(err),
                () => console.log('Fetching complete for Server Metrics')
            );
  }
}
