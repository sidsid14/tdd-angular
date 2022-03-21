import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

export interface HomeInterface {
  title: string;
  image: string;
  location: string;
}

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private http: HttpClient) {}

  getHomes$(): Observable<HomeInterface[]> {
    return this.http.get<HomeInterface[]>('assets/homes.json');
  }

  bookHomes$(): Observable<Object> {
    return this.http.post(
      'https://run.mocky.io/v3/6bdeff61-3eeb-4236-81e2-08a3b47c49b7',
      {}
    );
  }
}
