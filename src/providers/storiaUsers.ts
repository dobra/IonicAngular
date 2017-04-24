import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';

import { User } from '../models/user';

import 'rxjs/add/operator/map';

/*
  Generated class for the GithubUsers provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class StoriaUsers {

  githubApiUrl = 'https://storiapi.azurewebsites.net';

  constructor(public http: Http) {
    console.log('Hello StoriaUsers Provider');
  }

  load(): Observable<User[]>{
        return this.http.get(`${this.githubApiUrl}/getallusers`)
      .map(res => <User[]>res.json());
  }

}
