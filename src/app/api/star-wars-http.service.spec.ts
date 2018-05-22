import { TestBed, inject } from '@angular/core/testing';

import { StarWarsHttpService } from './star-wars-http.service';

describe('StarWarsHttpService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ StarWarsHttpService ]
    });
  });

  it('should be created', inject([StarWarsHttpService], (service: StarWarsHttpService) => {
    expect(service).toBeTruthy();
  }));
});
