import {HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
<<<<<<< HEAD
import { HttpClient } from '@angular/common/http';
=======

>>>>>>> 1b8e1c8bbb83fa7efa9f8f0e8452b89d179f7e48

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  constructor(private http:HttpClient){}
  getData()
  {
    let url="https://niha-swap.herokuapp.com/flights?date=2022-01-29";
    return this.http.get(url);
  }
}
