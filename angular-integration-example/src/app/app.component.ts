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
<<<<<<< HEAD
      console.log(data.map((obj) => {
        return {
          "arrivalTime: " : obj.arrivalTime,
          "departureTime: " : obj.departureTime,
          "destination: " : obj.destination.city,
          "origin: " : obj.origin.city,
          "flight number: " : obj.flightNumber
        }
      }));
=======
      console.warn(data);
>>>>>>> 1b8e1c8bbb83fa7efa9f8f0e8452b89d179f7e48
    })

    // var str:string = JSON.stringify(obj);
    // str = JSON.stringify(obj, null, 4); // (Optional) beautiful indented output.
    // console.log(str); // Logs output to dev tools console.
    // alert(str); // Displays output using window.alert()
  }
}
