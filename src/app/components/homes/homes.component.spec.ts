import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomesComponent } from './homes.component';

describe('HomesComponent', () => {
  let component: HomesComponent;
  let fixture: ComponentFixture<HomesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomesComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show homes', () => {
    expect(
      fixture.nativeElement.querySelectorAll('[data-test="home"]').length
    ).toBe(3);
  });

  it('should show home info', () => {
    const home = fixture.nativeElement.querySelector('[data-test="home"]');

    expect(home.querySelector('[data-test="title"]').innerText).toEqual(
      'Home 1'
    );

    expect(home.querySelector('[data-test="location"]').innerText).toEqual(
      'New York'
    );

    expect(home.querySelector('[data-test="image"]').innerText).toBeTruthy();
  });
});
