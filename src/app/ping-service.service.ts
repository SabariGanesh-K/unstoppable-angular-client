import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { environment } from './environment/environment';

@Injectable({
  providedIn: 'root'
})
export class PingServiceService {

  constructor(private http: HttpClient) { }
  httpOptions = {
    headers: new HttpHeaders({
      // 'Content-Type': 'application/json'
    })
  };

  fetchPingResponse(): Observable<any> {
    let rooturl = `${environment.rootUrl}/ping`;

    return this.http.get(rooturl, this.httpOptions)
  }
}

// pipe(catchError(error => {
//   console.error("Error pinging server", error)
//   // return throwError(() => new Error('Ping unavailable'))
// }));
