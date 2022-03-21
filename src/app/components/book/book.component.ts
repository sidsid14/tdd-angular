import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import * as moment from 'moment';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css'],
})
export class BookComponent implements OnInit {
  checkIn: string = '';
  checkOut: string = '';
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dataService: DataService,
    public dialogRef: MatDialogRef<BookComponent>
  ) {}

  ngOnInit(): void {}

  calculateTotal(checkIn: string, checkOut: string) {
    if (checkIn == '' || checkOut == '') {
      return;
    }
    const checkInDate = moment(checkIn);
    const checkOutDate = moment(checkOut);
    const nights = checkOutDate.diff(checkInDate, 'days');
    return nights * this.data.home.price;
  }

  bookHome() {
    this.dataService.bookHomes$().subscribe(() => {
      this.dialogRef.close();
    });
  }
}
