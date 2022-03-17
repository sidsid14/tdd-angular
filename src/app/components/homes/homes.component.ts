import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { DataService, HomeInterface } from 'src/app/services/data.service';

@Component({
  selector: 'app-homes',
  templateUrl: './homes.component.html',
  styleUrls: ['./homes.component.css'],
})
export class HomesComponent implements OnInit {
  homes$ = new Observable<HomeInterface[]>();
  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.homes$ = this.dataService.getHomes$();
  }
}
