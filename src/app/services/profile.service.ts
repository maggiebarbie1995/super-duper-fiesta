import { Injectable } from '@angular/core';
import {HttpClient} from  '@angular/common/http';
import {environment} from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ProfileService {

   private username:string
   private clientsecret='70e0f4114d929a7158ac061f71ab663c16a8da37';
   updateProfile:any;

  constructor(private http:HttpClient) {
    console.log("service is now ready!")
    this.username="maggiebarbie";
   }
   getProfileInfo(){
     return this.http.get(`https://api.github.com/users/${this.username}?access_token=${environment.apiKey}`)
   }
   getProfileRepos(){
     return this.http.get(`https://api.github.com/users/${this.username}/repos?access_token=${environment.apiKey}`)
   }
   

}
