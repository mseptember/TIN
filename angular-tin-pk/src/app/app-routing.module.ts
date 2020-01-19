import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainPageComponent } from './main-page/main-page.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { ReservationsOwnerComponent } from './reservations-owner/reservations-owner.component';
import { ReservationsUserComponent } from './reservations-user/reservations-user.component';
import { DetailsComponent } from './details/details.component';
import { DetailsReservationOwnerComponent } from './details-reservation-owner/details-reservation-owner.component';
import { DetailsReservationUserComponent } from './details-reservation-user/details-reservation-user.component';
import { AddEntityComponent } from './add-entity/add-entity.component';
import { EditRecordComponent } from './edit-record/edit-record.component';
import { EditRecordUserComponent } from './edit-record-user/edit-record-user.component';
import { AllRecordsComponent } from './all-records/all-records.component';
import { EditRecordApartmentComponent } from './edit-record-apartment/edit-record-apartment.component';
import { DeleteRecordComponent } from './delete-record/delete-record.component';
import { ListTenComponent } from './list-ten/list-ten.component';
import { ListTweComponent } from './list-twe/list-twe.component';
import { ListThiComponent } from './list-thi/list-thi.component';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: MainPageComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'reservations/owner', component: ReservationsOwnerComponent },
  { path: 'reservations/user', component: ReservationsUserComponent },
  { path: 'details', component: DetailsComponent },
  { path: 'details-reservation-owner', component: DetailsReservationOwnerComponent },
  { path: 'details-reservation-user', component: DetailsReservationUserComponent },
  { path: 'addentity', component: AddEntityComponent },
  { path: 'editrecord', component: EditRecordComponent },
  { path: 'editrecord/user', component: EditRecordUserComponent },
  { path: 'allrecords', component: AllRecordsComponent },
  { path: 'editrecord/apartment', component: EditRecordApartmentComponent },
  { path: 'deleterecord', component: DeleteRecordComponent },
  { path: 'list-ten', component: ListTenComponent },
  { path: 'list-twe', component: ListTweComponent },
  { path: 'list-thi', component: ListThiComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
