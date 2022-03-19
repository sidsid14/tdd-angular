import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

import { BookComponent } from './book.component';
import { homes } from 'src/assets/homes';

describe('BookComponent', () => {
  let component: BookComponent;
  let fixture: ComponentFixture<BookComponent>;
  let dialogData: any;
  const el = (selector: string) =>
    fixture.nativeElement.querySelector(`[data-test="${selector}"]`);

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

  // should show title
  it('should show title', () => {
    const title = el('title');
    expect(title.textContent).toContain('Home 1');
  });

  // show show price
  it('should show price', () => {
    const title = el('price');
    expect(title.textContent).toContain('125');
  });

  // should show check in date field
  it('should show price', () => {
    expect(el('check-in')).toBeTruthy();
  });

  // should show check out date field
  it('should show price', () => {
    expect(el('check-out')).toBeTruthy();
  });

  // should show total
  it('should show total', () => {
    const title = el('total');
    expect(title.textContent).toContain('125');
  });
  // should book home after clicking Book button
});
