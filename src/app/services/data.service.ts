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
  constructor() {}

  getHomes$(): Observable<HomeInterface[]> {
    return of<HomeInterface[]>([]);
  }
}
