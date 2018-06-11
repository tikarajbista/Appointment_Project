import { Injectable } from '@angular/core';
import {Http} from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {
  constructor(private http: Http) { }


  getAppointment() {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.get('http://localhost:3000/api/appointment')
      // .map(res => res.json());
  }

  // Appointment validations
   validateRegister(appoint) {
    if (appoint.date == undefined || appoint.time == undefined || appoint.desc == undefined) {
      return false;
    } else {
      return true;
    }
  }

    // Search validations
    validateSearch(data) {
      if (data.key == undefined || data.key == null) {
        return false;
      } else {
        return true;
      }
    }
}
