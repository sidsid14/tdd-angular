import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { DataService, HomeInterface } from 'src/app/services/data.service';
import { DialogService } from 'src/app/services/dialog.service';

@Component({
  selector: 'app-homes',
  templateUrl: './homes.component.html',
  styleUrls: ['./homes.component.css'],
})
export class HomesComponent implements OnInit {
  homes$ = new Observable<HomeInterface[]>();
  constructor(
    private dataService: DataService,
    private dialogService: DialogService
  ) {}

  ngOnInit(): void {
    this.homes$ = this.dataService.getHomes$();
  }

  openDialog(): void {
    this.dialogService.open();
  }
}
