import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed, inject } from '@angular/core/testing';
import { IStarWarsApiSearchResponse, IStarWarsPerson } from './star-wars-http.interface';

import { StarWarsHttpService } from './star-wars-http.service';

export const TEST_API_BASE_URL: string = 'https://swapi.co/api';

describe('StarWarsHttpService', () => {
  let starWarsHttpService: StarWarsHttpService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ],
      providers: [ StarWarsHttpService ]
    });

    starWarsHttpService = TestBed.get(StarWarsHttpService);
    httpMock = TestBed.get(HttpTestingController);
  });

  afterEach(() => {
    // ensure no outstanding mock requests open at end of tests.
    httpMock.verify();
  });

  it('should be created', () => {
    expect(starWarsHttpService).toBeTruthy();
  });

  it('should load people from the /people api.', () => {
    const mockResults: Array<string> = ['mock one', 'mock two'];
    const mockResponse: IStarWarsApiSearchResponse<string> = {
      count: 0,
      next: null,
      previous: null,
      results: mockResults
    };

    starWarsHttpService.searchForItems('people', 'mock')
      .subscribe((data: Array<string>) => {
        expect(data).toEqual(mockResults);
      });

    const req = httpMock.expectOne(`${TEST_API_BASE_URL}/people/?search=mock`);
    expect(req.request.method).toBe('GET');
    req.flush(mockResponse);
  });

});
