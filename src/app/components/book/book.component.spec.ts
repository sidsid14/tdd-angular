import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { BookComponent } from './book.component';
import { homes } from 'src/assets/homes';
import { FormsModule } from '@angular/forms';
import { DataService } from 'src/app/services/data.service';
import { of } from 'rxjs';

describe('BookComponent', () => {
  let component: BookComponent;
  let fixture: ComponentFixture<BookComponent>;
  let dialogData: any;
  let dataServiceSpy: jasmine.SpyObj<DataService>;

  const el = (selector: string) =>
    fixture.nativeElement.querySelector(`[data-test="${selector}"]`);

  beforeEach(async () => {
    const spy = jasmine.createSpyObj('DataService', ['bookHomes$']);

    await TestBed.configureTestingModule({
      imports: [FormsModule],
      declarations: [BookComponent],
      providers: [
        { provide: MAT_DIALOG_DATA, useValue: {} },
        {
          provide: MatDialogRef,
          useFactory: () => jasmine.createSpyObj('MatDialogRef', ['close']),
        },
        { provide: DataService, useValue: spy },
      ],
    }).compileComponents();

    dialogData = TestBed.inject(MAT_DIALOG_DATA);
    dataServiceSpy = TestBed.inject(DataService) as jasmine.SpyObj<DataService>;
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookComponent);
    component = fixture.componentInstance;
    dialogData.home = homes[0];
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show title', () => {
    const title = el('title');
    expect(title.textContent).toContain('Book Home 1');
  });

  it('should show price', () => {
    const title = el('price');
    expect(title.textContent).toContain('$125 per night');
  });

  it('should show price', () => {
    expect(el('check-in')).toBeTruthy();
  });

  it('should show price', () => {
    expect(el('check-out')).toBeTruthy();
  });

  it('should show total', () => {
    const checkIn = el('check-in');
    const checkOut = el('check-out');

    checkIn.value = '2022-03-19';
    checkIn.dispatchEvent(new Event('input'));

    checkOut.value = '2022-03-22';
    checkOut.dispatchEvent(new Event('input'));

    fixture.detectChanges();

    const title = el('total');
    expect(title.textContent).toContain('Total: $375');
  });

  it('should book home after clicking Book button', () => {
    const checkIn = el('check-in');
    const checkOut = el('check-out');

    checkIn.value = '2022-03-19';
    checkIn.dispatchEvent(new Event('input'));

    checkOut.value = '2022-03-22';
    checkOut.dispatchEvent(new Event('input'));
    dataServiceSpy.bookHomes$.and.returnValue(of(Object));

    fixture.detectChanges();
    el('book-btn').click();

    expect(dataServiceSpy.bookHomes$).toHaveBeenCalled();
  });

  it('should close book dialog after clicking book button', () => {
    const checkIn = el('check-in');
    const checkOut = el('check-out');

    checkIn.value = '2022-03-19';
    checkIn.dispatchEvent(new Event('input'));

    checkOut.value = '2022-03-22';
    checkOut.dispatchEvent(new Event('input'));

    dataServiceSpy.bookHomes$.and.returnValue(of(Object));

    fixture.detectChanges();
    el('book-btn').click();
    expect(component.dialogRef.close).toHaveBeenCalled();
  });
});
