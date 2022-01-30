import { Component, OnInit } from '@angular/core';
import { ServerService } from '../server.service';

@Component({
  selector: 'app-test-view',
  templateUrl: './test-view.component.html',
  styleUrls: ['./test-view.component.scss']
})
export class TestViewComponent implements OnInit {

  constructor(private serverService: ServerService) { }

  ngOnInit(): void {
  }

  createNewList(){
    this.serverService.createList("testing").subscribe((response: any)=>{
      console.log(response);
    })
  }
}
