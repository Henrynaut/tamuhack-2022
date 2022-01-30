import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { environment } from '../environments/environment';
import { Parse } from "parse";
import { RegisterComponent } from './register/register.component';
import { HttpClientModule } from '@angular/common/http';
import { TestViewComponent } from './backend/test-view/test-view.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FindSeatComponent } from './findSeat/findSeat.component';
import { MatFormFieldModule } from '@angular/material/form-field';
// import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule, MatMomentDateModule } from '@coachcare/datepicker';


Parse.initialize(environment.PARSE_APP_ID, environment.PARSE_JS_KEY);
Parse.serverURL = environment.serverURL;

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RegisterComponent,
    TestViewComponent,
    FindSeatComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatMomentDateModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
