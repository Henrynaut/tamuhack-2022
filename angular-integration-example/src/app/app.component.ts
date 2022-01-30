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
      console.warn(data);
    })

    // var str:string = JSON.stringify(obj);
    // str = JSON.stringify(obj, null, 4); // (Optional) beautiful indented output.
    // console.log(str); // Logs output to dev tools console.
    // alert(str); // Displays output using window.alert()
  }
}
