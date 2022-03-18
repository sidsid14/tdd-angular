import { ComponentFixture, TestBed } from '@angular/core/testing';
import { spyOnClass } from 'jasmine-es6-spies';
import { of } from 'rxjs';
import { DataService } from 'src/app/services/data.service';
import { DialogService } from 'src/app/services/dialog.service';

import { HomesComponent } from './homes.component';

describe('HomesComponent', () => {
  let component: HomesComponent;
  let fixture: ComponentFixture<HomesComponent>;

  // let dataService: DataService;
  let dataServiceSpy: jasmine.SpyObj<DataService>;

  // let dialogService: DialogService;
  let dialogServiceSpy: jasmine.SpyObj<DialogService>;

  beforeEach(async () => {
    const spy = jasmine.createSpyObj('DataService', ['getHomes$']);
    const spy2 = jasmine.createSpyObj('DialogService', ['open']);

    await TestBed.configureTestingModule({
      declarations: [HomesComponent],
      providers: [
        { provide: DataService, useValue: spy },
        { provide: DialogService, useValue: spy2 },
      ],
    }).compileComponents();

    // dataService = TestBed.inject(DataService);
    dataServiceSpy = TestBed.inject(DataService) as jasmine.SpyObj<DataService>;

    // dialogService = TestBed.inject(DialogService);
    dialogServiceSpy = TestBed.inject(
      DialogService
    ) as jasmine.SpyObj<DialogService>;
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomesComponent);
    component = fixture.componentInstance;
    const stubValue = of([
      {
        title: 'Home 1',
        image: 'assets/image1.jpeg',
        location: 'New York',
      },
      {
        title: 'Home 2',
        image: 'assets/image1.jpeg',
        location: 'Boston',
      },
      {
        title: 'Home 3',
        image: 'assets/image1.jpeg',
        location: 'Chicago',
      },
    ]);

    dataServiceSpy.getHomes$.and.returnValue(stubValue);
    component.ngOnInit();
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

    expect(home.querySelector('[data-test="image"]')).toBeTruthy();
  });

  it('should show book button', () => {
    const home = fixture.nativeElement.querySelector('[data-test="home"]');

    expect(home.querySelector('[data-test="book-btn"]')).toBeTruthy();
  });

  it('should show dialog box on click of book button', () => {
    const bookBtn = fixture.nativeElement.querySelector(
      '[data-test="home"] button'
    );
    bookBtn.click();
    expect(dialogServiceSpy.open).toHaveBeenCalled();
  });
});
