import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {Http} from '@angular/http/src/http';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddAppointmentComponent } from './add-appointment/add-appointment.component';
import { AppointmentService } from 'src/app/Service/appointment.service';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    AddAppointmentComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule

  ],
  providers: [AppointmentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
