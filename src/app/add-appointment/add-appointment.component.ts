import { AppointmentService } from './../Service/appointment.service';
import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { Time } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';

@Component({
  selector: 'app-addAppointment',
  templateUrl: './add-appointment.component.html',
  styleUrls: ['./add-appointment.component.css']
})
export class AddAppointmentComponent implements OnInit {
  today: String = new Date().toJSON().slice(0,10);
  date: Date;
  time: Time;
  desc: String;
  keyword: String;
  showForm: boolean = false;
  message: String = null;
  showMessage:boolean=true;

  constructor(private http: Http, private _appointService: AppointmentService) { }

  ngOnInit() {

  }

  toggleView(): void {
    this.showForm = !this.showForm;
    this.desc = '';
    this.time = null;
    this.date = null;
  }

  onSubmit() {
    const appoint = {
      date: this.date,
      time: this.time,
      desc: this.desc
    }

    if (appoint.date == undefined || appoint.date == null
      || appoint.desc == undefined || appoint.desc == ""
      || appoint.time == undefined || appoint.time == null) {
      this.message="Please enter values in all fields."
    }
    else if (this._appointService.validateRegister(appoint)) {
      this.http.post(' https://still-oasis-20303.herokuapp.com/api/appointment', appoint)
        .subscribe((res) => {
          this.message = "Data is Addeded Successfully !"
        });

    }



  }
}
