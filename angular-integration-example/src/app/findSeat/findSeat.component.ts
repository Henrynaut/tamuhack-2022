import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Parse } from 'parse';
import { ServerService } from '../backend/server.service';

@Component({
  selector: 'app-register',
  templateUrl: './findSeat.component.html',
  styleUrls: ['./findSeat.component.scss']
})
export class FindSeatComponent implements OnInit {
  loginForm: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string;
  @ViewChild('DateField') DateField: ElementRef;
  @ViewChild('DestField') DestField: ElementRef;
  @ViewChild('OriginField') OriginField: ElementRef;
  @ViewChild('result') result: ElementRef;
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
  }
  */
  findSeat(){
    var date = this.DateField.nativeElement.value;
    var dest = this.DestField.nativeElement.value;
    var origin = this.OriginField.nativeElement.value;

    this.serverService.getAvailableSeats(date,dest,origin).subscribe((response:any)=>{
      console.log("TEST");
      console.log(response);
      this.result.nativeElement.innerHTML = JSON.stringify(response);
    });
  }
}
