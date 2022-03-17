import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { DataService } from './data.service';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';

describe('DataService', () => {
  let httpClient: HttpClient;
  let service: DataService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    httpClient = TestBed.inject(HttpClient);
    service = TestBed.inject(DataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return a list of homes', () => {
    const homesMock = [
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
    ];
    //1. Spy On and mock the httpClient.
    spyOn(httpClient, 'get').and.returnValue(of(homesMock));

    //2. Use our service to get homes.
    const spy = jasmine.createSpy('spy');
    service.getHomes$().subscribe(spy);

    //3. Verify that our service returned mocked data.
    expect(spy).toHaveBeenCalledWith(homesMock);

    //4. Verify that the service called the proper HTTP endpoint.
    expect(httpClient.get).toHaveBeenCalledWith('assets/homes.json');
  });
});
