import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs-compat/add/operator/do';
import { IStarWarsApiSearchResponse, StarWarsEntities } from './star-wars-http.interface';
import 'rxjs-compat/add/operator/map';

// These are static values so we can't type them as string's for TSLint to work.
export const STARWARS_FILMS = 'films';
export const STARWARS_PEOPLE = 'people';
export const STARWARS_PLANETS = 'planets';
export const STARWARS_SPECIES = 'species';
export const STARWARS_STARSHIPS = 'starships';
export const STARWARS_VEHICLES = 'vehicles';

// This is ok in this file as we are always using the public API.
// For internal API's I would store the url in the environment config file & reference here.
export const API_BASE_URL: string = 'https://swapi.co/api';

@Injectable({
  providedIn: 'root'
})
export class StarWarsHttpService {

  constructor(
    private http: HttpClient
  ) {}

  public searchForItems<T>(entity: StarWarsEntities, searchTerm: string): Observable<Array<T>> {
    return this.http.get<IStarWarsApiSearchResponse<T>>(`${API_BASE_URL}/${entity}/?search=${searchTerm}`)
      .map((data: IStarWarsApiSearchResponse<T>): Array<T> => {
        return data.results;
      });
  }
}
