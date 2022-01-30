import { Component } from '@angular/core';
import{UsersService}from './users.service'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-integration';
  constructor(private user:UsersService){
    var obj = this.user.getData().subscribe(data=>{
      console.log(data.map((obj) => {
        return {
          "arrivalTime: " : obj.arrivalTime,
          "departureTime: " : obj.departureTime,
          "destination: " : obj.destination.city,
          "origin: " : obj.origin.city,
          "flight number: " : obj.flightNumber
        }
      }));
    })
  }
}
