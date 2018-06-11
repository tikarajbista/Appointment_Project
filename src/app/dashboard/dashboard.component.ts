import { AppointmentService } from 'src/app/Service/appointment.service';
import { Http } from '@angular/http';
import { Component, OnInit } from '@angular/core';
import { Time } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  place: String;
  appointments: any[] = null;


  constructor(private http: Http, private _services: AppointmentService) {
    this.appointments = null;
   }

  ngOnInit() {
  }


  onSearch(){
    this.appointments = null;
    const data = {
      key: this.place
    }
    this._services.validateSearch(data)
      this.http.post('http://localhost:3000/api/appointment/desc', data)
      .subscribe((resp) =>{
        this.appointments = resp.json();
       // console.log(this.appointments);
      });
    }
}
