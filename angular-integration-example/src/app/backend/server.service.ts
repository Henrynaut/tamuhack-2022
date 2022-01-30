import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { WebRequestService } from './web-request.service';


@Injectable({
  providedIn: 'root'
})
export class ServerService {

  constructor(private webReqService: WebRequestService) {
  }

  createList(title:string){
    return this.webReqService.post('/list',[title])
  }

  
}