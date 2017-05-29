import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

@Injectable()

export class ApiService {
  private baseURL: string = 'https://ionic2-course-45496.firebaseio.com';
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
}