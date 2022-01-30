import { Injectable } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  constructor(private http:HttpClient){}
  gerData()
  {
    let url="https://niha-swap.herokuapp.com/flights?date=2022-01-29";
    return this.http.get(url);
  }
}
