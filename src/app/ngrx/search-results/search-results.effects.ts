import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { of } from 'rxjs/internal/observable/of';
import { Observable } from 'rxjs/Observable';
import { catchError, debounceTime, map, switchMap } from 'rxjs/operators';
import {
  IStarWarsFilm,
  IStarWarsPerson,
  IStarWarsPlanet,
  IStarWarsSpecies,
  IStarWarsStarship,
  IStarWarsVehicle
} from '../../api/star-wars-http.interface';
import {
  STARWARS_FILMS,
  STARWARS_PEOPLE,
  STARWARS_PLANETS,
  STARWARS_SPECIES,
  STARWARS_STARSHIPS,
  STARWARS_VEHICLES,
  StarWarsHttpService
} from '../../api/star-wars-http.service';
import { AppErrorAction } from '../app-errors/app-errors.actions';
import {
  LOAD_RESULTS_FOR_TERM,
  LoadResultsForTermAction,
  UpdateSearchResultsForEntityAction
} from './search-results.actions';

const DEBOUNCE_TIME: number = 1500;

@Injectable()
export class SearchResultsEffects {

  @Effect()
  searchPeople$: Observable<UpdateSearchResultsForEntityAction|AppErrorAction> = this.actions$.pipe(
    ofType(LOAD_RESULTS_FOR_TERM),
    debounceTime(DEBOUNCE_TIME),
    switchMap((action: LoadResultsForTermAction) => {
      return this.starWarsApi.searchForItems<IStarWarsPerson>(STARWARS_PEOPLE, action.searchTerm)
        .pipe(
          map((data: IStarWarsPerson[]) => new UpdateSearchResultsForEntityAction(STARWARS_PEOPLE, data)),
          catchError(() => of(new AppErrorAction('Could not load people. Api Call Failed.')))
        );
    })
  );

  @Effect()
  searchFilms$: Observable<UpdateSearchResultsForEntityAction|AppErrorAction> = this.actions$.pipe(
    ofType(LOAD_RESULTS_FOR_TERM),
    debounceTime(DEBOUNCE_TIME),
    switchMap((action: LoadResultsForTermAction) => {
      return this.starWarsApi.searchForItems<IStarWarsFilm>(STARWARS_FILMS, action.searchTerm)
        .pipe(
          map((data: IStarWarsFilm[]) => new UpdateSearchResultsForEntityAction(STARWARS_FILMS, data)),
          catchError(() => of(new AppErrorAction('Could not load films. Api Call Failed.')))
        );
    })
  );

  @Effect()
  searchSpecies$: Observable<UpdateSearchResultsForEntityAction|AppErrorAction> = this.actions$.pipe(
    ofType(LOAD_RESULTS_FOR_TERM),
    debounceTime(DEBOUNCE_TIME),
    switchMap((action: LoadResultsForTermAction) => {
      return this.starWarsApi.searchForItems<IStarWarsSpecies>(STARWARS_SPECIES, action.searchTerm)
        .pipe(
          map((data: IStarWarsSpecies[]) => new UpdateSearchResultsForEntityAction(STARWARS_SPECIES, data)),
          catchError(() => of(new AppErrorAction('Could not load species. Api Call Failed.')))
        );
    })
  );

  @Effect()
  searchPlanets$: Observable<UpdateSearchResultsForEntityAction|AppErrorAction> = this.actions$.pipe(
    ofType(LOAD_RESULTS_FOR_TERM),
    debounceTime(DEBOUNCE_TIME),
    switchMap((action: LoadResultsForTermAction) => {
      return this.starWarsApi.searchForItems<IStarWarsPlanet>(STARWARS_PLANETS, action.searchTerm)
        .pipe(
          map((data: IStarWarsPlanet[]) => new UpdateSearchResultsForEntityAction(STARWARS_PLANETS, data)),
          catchError(() => of(new AppErrorAction('Could not load planet. Api Call Failed.')))
        );
    })
  );

  @Effect()
  searchVehicles$: Observable<UpdateSearchResultsForEntityAction|AppErrorAction> = this.actions$.pipe(
    ofType(LOAD_RESULTS_FOR_TERM),
    debounceTime(DEBOUNCE_TIME),
    switchMap((action: LoadResultsForTermAction) => {
      return this.starWarsApi.searchForItems<IStarWarsVehicle>(STARWARS_VEHICLES, action.searchTerm)
        .pipe(
          map((data: IStarWarsVehicle[]) => new UpdateSearchResultsForEntityAction(STARWARS_VEHICLES, data)),
          catchError(() => of(new AppErrorAction('Could not load planet. Api Call Failed.')))
        );
    })
  );

  @Effect()
  searchStarships$: Observable<UpdateSearchResultsForEntityAction|AppErrorAction> = this.actions$.pipe(
    ofType(LOAD_RESULTS_FOR_TERM),
    debounceTime(DEBOUNCE_TIME),
    switchMap((action: LoadResultsForTermAction) => {
      return this.starWarsApi.searchForItems<IStarWarsStarship>(STARWARS_STARSHIPS, action.searchTerm)
        .pipe(
          map((data: IStarWarsStarship[]) => new UpdateSearchResultsForEntityAction(STARWARS_STARSHIPS, data)),
          catchError(() => of(new AppErrorAction('Could not load planet. Api Call Failed.')))
        );
    })
  );

  constructor(
    private starWarsApi: StarWarsHttpService,
    private actions$: Actions
  ) {}
}
