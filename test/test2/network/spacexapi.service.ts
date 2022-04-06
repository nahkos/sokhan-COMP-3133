import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpacexapiService {

  constructor(private http: HttpClient) { }

  public getAllLaunches(): Observable<any> {
    return this.http.get(`https://api.spacexdata.com/v3/launches`)
  }
 
  // public getLaunchesByName(detail: string): Observable<any> {
  //   return this.http.get(`https://api.spacexdata.com/v3/launches&launch_year=${detail}`)
  // }

  public getLaunchesByYear(year: string): Observable<any> {
    return this.http.get(`https://api.spaceXdata.com/v3/launches?limit=100&launch_year=${year}`);
  }
}
