import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs';
import { Observable } from 'rxjs';

@Injectable()

export class ApiService {
  private baseURL: string = 'https://ionic2-course-45496.firebaseio.com';
  public currentTourney: any = {};

  constructor(private http: Http) { }

  getTournaments() {
    return new Promise((resolve, reject) => {
      this.http.get(`${this.baseURL}/tournaments.json`).subscribe(res => {
        resolve(res.json());
      }, err => {
        reject(err);
      })
    })
  }

  getTournamentsData(tourneyID): Observable<any> {
    return this.http.get(`${this.baseURL}/tournaments-data/${tourneyID}.json`).map((res: Response) => {
      this.currentTourney = res.json();
      return this.currentTourney;
    })
  }

  getCurrentTourney() {
    return this.currentTourney;
  }
}