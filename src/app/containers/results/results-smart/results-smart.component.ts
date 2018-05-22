import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import {
  IStarWarsFilm,
  IStarWarsPerson, IStarWarsPlanet, IStarWarsSpecies,
  IStarWarsStarship,
  IStarWarsVehicle
} from '../../../api/star-wars-http.interface';
import {
  STARWARS_FILMS,
  STARWARS_PEOPLE, STARWARS_PLANETS, STARWARS_SPECIES,
  STARWARS_STARSHIPS,
  STARWARS_VEHICLES
} from '../../../api/star-wars-http.service';
import { IStoreState } from '../../../ngrx/reducers';
import * as SearchResultSelectors from '../../../ngrx/search-results/search-results.selectors';

@Component({
  selector: 'em-results-smart',
  templateUrl: './results-smart.component.html',
  styleUrls: ['./results-smart.component.scss']
})
export class ResultsSmartComponent {

  public peopleResults: Observable<IStarWarsPerson[]>;
  public filmsResults: Observable<IStarWarsFilm[]>;
  public vehiclesResults: Observable<IStarWarsVehicle[]>;
  public starshipsResults: Observable<IStarWarsStarship[]>;
  public speciesResults: Observable<IStarWarsSpecies[]>;
  public planetsResults: Observable<IStarWarsPlanet[]>;

  constructor(
    private store: Store<IStoreState>
  ) {
    this.peopleResults = this.store.select<IStarWarsPerson[]>(SearchResultSelectors.selectResultsForEntity(STARWARS_PEOPLE));
    this.filmsResults = this.store.select<IStarWarsFilm[]>(SearchResultSelectors.selectResultsForEntity(STARWARS_FILMS));
    this.vehiclesResults = this.store.select<IStarWarsVehicle[]>(SearchResultSelectors.selectResultsForEntity(STARWARS_VEHICLES));
    this.starshipsResults = this.store.select<IStarWarsStarship[]>(SearchResultSelectors.selectResultsForEntity(STARWARS_STARSHIPS));
    this.speciesResults = this.store.select<IStarWarsSpecies[]>(SearchResultSelectors.selectResultsForEntity(STARWARS_SPECIES));
    this.planetsResults = this.store.select<IStarWarsPlanet[]>(SearchResultSelectors.selectResultsForEntity(STARWARS_PLANETS));
  }

}
