import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { WebRequestService } from './web-request.service';


@Injectable({
  providedIn: 'root'
})
export class ServerService {

  constructor(private webReqService: WebRequestService) {
  }

  
  getList(){
    return this.webReqService.get("getAll");
  }

  createList(title:string){
    //return this.webReqService.get('getAll');
    console.log("in createList");

    return this.webReqService.post("events",{ name: title });
  }
  addFlights(){
    const flights = 
    {

      "flights":[
        {
          "flightNum": "3",
          "origin": "IAH",
          "dest": "LAX",
          "date": "2022-01-30",
          "seats": '{"A1":""},{"A2":""},{"B1":""},{"B2":""}'
        }

      ]

    };
    /*
    {
      {
        "flightNum": "1",
        "origin": "ORD",
        "dest": "IAH",
        "date": "2022-01-29",


      }
    }*/
    return this.webReqService.post("addFlights",{flights:flights});
  }
  getFlights(){
    return this.webReqService.get("getFlights");
  }
  addSeat(seats:string,flightNum:string){
    return this.webReqService.post("addSeat",{seats:seats,flightNum:flightNum});

  }
  getSeats(flightNum:string){
    return this.webReqService.post("getSeats",{flightNum:flightNum});
  }
  
  sellSeat(flightNum:string,seat:string, date:string){
    return this.webReqService.post("sellSeat",{flightNum:flightNum,seat:seat,date:date});
  }
  getAvailableSeats(date:string){
    return this.webReqService.post("availableSeats",{date:date});
  }
}