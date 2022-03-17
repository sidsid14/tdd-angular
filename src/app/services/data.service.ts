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
}
