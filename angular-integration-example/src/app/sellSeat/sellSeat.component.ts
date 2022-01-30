import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Parse } from 'parse';
import { ServerService } from '../backend/server.service';

@Component({
  selector: 'app-register',
  templateUrl: './sellSeat.component.html',
  styleUrls: ['./sellSeat.component.scss']
})
export class SellSeatComponent implements OnInit {
  loginForm: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string;
  @ViewChild('NameField') NameField: ElementRef;
  @ViewChild('FlightNumField') FlightNumField: ElementRef;
  @ViewChild('SeatField') SeatField: ElementRef;
  @ViewChild('DestField') DestField: ElementRef;
  @ViewChild('OriginField') OriginField: ElementRef;
  @ViewChild('DateField') DateField: ElementRef;
  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private serverService: ServerService
  ) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
      email: ['', Validators.required]
    });

    // get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  // convenience getter for easy access to form fields
  get f() { return this.loginForm.controls; }

  clearButton() {
    this.loading = false;
  }
  /*
  async onSubmit() {
    this.loading = true;
    this.submitted = true;
    // stop here if form is invalid
    if (this.loginForm.invalid) {
      return;
    }
    console.log(this.loginForm[0]);
    let user = new Parse.User();
    user.set("username", this.f.username.value);
    user.set("password", this.f.password.value);
    user.set("email", this.f.email.value);

    try {
      await user.signUp();
      alert("User created!");
      this.router.navigate(['/']);
    } catch (error) {
      // Show the error message somewhere and let the user try again.
      alert("Error: " + error.code + " " + error.message);
    }
  }*/
  sellSeat(){
    var name = this.NameField.nativeElement.value;
    var flightNum = this.FlightNumField.nativeElement.value;
    var seat = this.SeatField.nativeElement.value;
    var date = this.DateField.nativeElement.value;
    var origin = this.OriginField.nativeElement.value;
    var dest = this.DestField.nativeElement.value;
    this.serverService.sellSeat(flightNum,seat,date,name,dest,origin).subscribe((response:any)=>{
      console.log("sold");
    });
  }
}
