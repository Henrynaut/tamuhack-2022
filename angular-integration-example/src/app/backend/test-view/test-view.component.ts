import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ServerService } from '../server.service';

@Component({
  selector: 'app-test-view',
  templateUrl: './test-view.component.html',
  styleUrls: ['./test-view.component.scss']
})
export class TestViewComponent implements OnInit {

  title = "Angular ElementRef and @ViewChild Example";
  @ViewChild("myElement") myElement: ElementRef;
  @ViewChild('myNameElem') myNameElem: ElementRef;

  constructor(private serverService: ServerService) { }

  ngOnInit(): void {
  }

  createNewList(){
    this.serverService.getList().subscribe((response: any)=>{
      
      console.log(response);
      console.log(response[0].owner);
      this.myElement.nativeElement.innerHTML = response[0].owner;

    })
  }
  putVal(){
    console.log(this.myNameElem.nativeElement.value);
    this.serverService.createList(this.myNameElem.nativeElement.value).subscribe((response:any)=>{
      console.log("kill me");
    });
  }
  testFunc(){
    this.serverService.addFlights().subscribe((response:any)=>{
      console.log("this will work");
    });
  }
  getF(){
    this.serverService.getFlights().subscribe((response:any)=>{
      console.log(response);
    });
  }
  getSeats(flightNum:string){
    this.serverService.getSeats(flightNum).subscribe((response:any)=>{
      console.log("seats: ",response[0].seats);
      return response[0].seats;
    });
  }
  addSeatTest(){
    var name = "Izzy";
    var flightNum = "1";
    var seat = "A2";
    var flightSeats = "";
    /*
     var myDataPromise = myService.getData();
      myDataPromise.then(function(result) {  

       // this is only run after getData() resolves
       $scope.data = result;
       console.log("data.name"+$scope.data.name);
    });
    */
    this.serverService.getSeats(flightNum).subscribe((response:any)=>{
      console.log("seats: ",response[0].seats);
    
      console.log("flightSeats",flightSeats);
      console.log("testestest");
      flightSeats = `${response[0].seats}`;
      console.log(typeof flightSeats);
      //var newVar = '{"A1": "","A2":"","B1":"","B2":""}'
      console.log("JSON",JSON.parse(flightSeats));
      var newVar = JSON.parse(flightSeats);
      newVar[seat] = name;
      console.log(newVar);
      var stringed = JSON.stringify(newVar);
      this.serverService.addSeat(stringed,flightNum).subscribe((response:any)=>{
        console.log("Success");
      });
    });
  }

  sellSeat(){
    var flightNum = "1";
    var seat = "A2";
    var date = "2022-01-30";

    this.serverService.sellSeat(flightNum,seat,date).subscribe((response:any)=>{
      console.log("sold");
    });
  }

  getAvailableSeats(){
    var date = "2022-01-30";

    this.serverService.getAvailableSeats(date).subscribe((response:any)=>{
      console.log("HELOOOOOOO");
      console.log(response);
    })
  }
  tempUpdateSeats(){
    this.serverService.addSeat('{"A1": "","A2":"","B1":"","B2":""}',"2").subscribe((response:any)=>{
      console.log("works")
    });
  }
  
  
}
