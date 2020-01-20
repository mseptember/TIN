import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainPageComponent } from './main-page/main-page.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ReservationsUserComponent } from './reservations-user/reservations-user.component';
import { ReservationsOwnerComponent } from './reservations-owner/reservations-owner.component';
import { DetailsReservationOwnerComponent } from './details-reservation-owner/details-reservation-owner.component';
import { DetailsReservationUserComponent } from './details-reservation-user/details-reservation-user.component';
import { DetailsComponent } from './details/details.component';
import { AddEntityComponent } from './add-entity/add-entity.component';
import { EditRecordComponent } from './edit-record/edit-record.component';
import { EditRecordUserComponent } from './edit-record-user/edit-record-user.component';
import { AllRecordsComponent } from './all-records/all-records.component';
import { EditRecordApartmentComponent } from './edit-record-apartment/edit-record-apartment.component';
import { DeleteRecordComponent } from './delete-record/delete-record.component';
import { ListTenComponent } from './list-ten/list-ten.component';
import { ListTweComponent } from './list-twe/list-twe.component';
import { ListThiComponent } from './list-thi/list-thi.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    LoginComponent,
    RegisterComponent,
    ReservationsUserComponent,
    ReservationsOwnerComponent,
    DetailsReservationOwnerComponent,
    DetailsReservationUserComponent,
    DetailsComponent,
    AddEntityComponent,
    EditRecordComponent,
    EditRecordUserComponent,
    AllRecordsComponent,
    EditRecordApartmentComponent,
    DeleteRecordComponent,
    ListTenComponent,
    ListTweComponent,
    ListThiComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
