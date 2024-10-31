import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';
import { environment } from './environment/environment';

@Injectable({
  providedIn: 'root'
})
export class BookingAPIServiceService {
  
  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      // 'Content-Type': 'application/json'
    })
  };
  
  fetchAvailableSeats(n: any):Observable<any> {
    let rooturl = `${environment.rootUrl}/booking/${n}`;
    console.log("hehe",rooturl)
    return this.http.post(rooturl,  this.httpOptions)
    //   (error => {
    //     console.error('Error fetching available seats:', error);
    //     return error; // Re-throw the error for handling in submitDetails()
    //   }));
    // console.log(res);
    // return res;
  }
  fetchBookedSeats():Observable<any> {
    let rooturl = `${environment.rootUrl}/booked`;
    console.log("hehe",rooturl)
    return this.http.get(rooturl,  this.httpOptions)
    //   (error => {
    //     console.error('Error fetching available seats:', error);
    //     return error; // Re-throw the error for handling in submitDetails()
    //   }));
    // console.log(res);
    // return res;
  }
}