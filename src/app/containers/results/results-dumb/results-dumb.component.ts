import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import {
  IStarWarsFilm,
  IStarWarsPerson, IStarWarsPlanet,
  IStarWarsSpecies,
  IStarWarsStarship, IStarWarsVehicle
} from '../../../api/star-wars-http.interface';

@Component({
  selector: 'em-results-dumb',
  templateUrl: './results-dumb.component.html',
  styleUrls: ['./results-dumb.component.scss']
})
export class ResultsDumbComponent implements OnInit {

  @Input() public peopleResults: Observable<IStarWarsPerson[]>;
  @Input() public filmsResults: Observable<IStarWarsFilm[]>;
  @Input() public vehiclesResults: Observable<IStarWarsVehicle[]>;
  @Input() public starshipsResults: Observable<IStarWarsStarship[]>;
  @Input() public speciesResults: Observable<IStarWarsSpecies[]>;
  @Input() public planetsResults: Observable<IStarWarsPlanet[]>;

  @Input() public showSpinner: Observable<boolean>;
  @Input() public showResults: Observable<boolean>;

  constructor() { }

  ngOnInit() {
  }

}
