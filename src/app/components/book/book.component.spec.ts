import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

import { BookComponent } from './book.component';
import { homes } from 'src/assets/homes';

describe('BookComponent', () => {
  let component: BookComponent;
  let fixture: ComponentFixture<BookComponent>;
  let dialogData: any;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BookComponent],
      providers: [{ provide: MAT_DIALOG_DATA, useValue: {} }],
    }).compileComponents();

    dialogData = TestBed.inject(MAT_DIALOG_DATA);
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
    const title = fixture.nativeElement.querySelector('[data-test="title"]');
    expect(title.textContent).toContain('Home 1');
  });
  // should show title
  // show show price
  // should show check in date field
  // should show check out date field
  // should show total
  // should book home after clicking Book button
});
