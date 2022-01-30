import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { ChooseFlightComponent } from './chooseFlight/chooseFlight.component';
import { SellSeatComponent } from './sellSeat/sellSeat.component';
import { FindSeatComponent } from './findSeat/findSeat.component';
import { TestViewComponent } from './backend/test-view/test-view.component';
const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'chooseFlight', component: ChooseFlightComponent },
  { path: 'sellSeat', component: SellSeatComponent },
  { path: 'findSeat', component: FindSeatComponent },
  { path: 'test-view', component: TestViewComponent }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
