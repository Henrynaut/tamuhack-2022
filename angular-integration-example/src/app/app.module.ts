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

Parse.initialize(environment.PARSE_APP_ID, environment.PARSE_JS_KEY);
Parse.serverURL = environment.serverURL;

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RegisterComponent,
    TestViewComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
