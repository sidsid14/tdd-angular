import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { DataService, HomeInterface } from 'src/app/services/data.service';
import { DialogService } from 'src/app/services/dialog.service';
import { BookComponent } from '../book/book.component';

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

  openDialog(home: any): void {
    this.dialogService.open(BookComponent, {
      width: '250px',
      data: { home },
    });
  }
}
