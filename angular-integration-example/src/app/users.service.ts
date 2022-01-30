import {HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';


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
