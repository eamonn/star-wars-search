import { TestBed } from '@angular/core/testing';
import { EffectsMetadata, getEffectsMetadata } from '@ngrx/effects';
import { provideMockActions } from '@ngrx/effects/testing';
import { cold, hot } from 'jasmine-marbles';
import 'rxjs-compat/add/observable/of';
import { Observable } from 'rxjs/Observable';
import { LoadResultsForTermAction } from '../search-results/search-results.actions';
import { QueryTooShortAction } from './search-query.actions';
import * as SearchQueryActions from './search-query.actions';
import { SearchQueryEffects } from './search-query.effects';

describe('SearchQueryEffects', () => {
  let effects: SearchQueryEffects;
  let actions: Observable<any>;
  let metadata: EffectsMetadata<SearchQueryEffects>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
      ],
      providers: [
        SearchQueryEffects,
        provideMockActions(() => actions)
      ],
    });

    effects = TestBed.get(SearchQueryEffects);
    metadata = getEffectsMetadata(effects);
  });

  describe('clearResults$', () => {

    it('should dispatch LoadResultsForTermAction with search query of 2+ chars', () => {
      const action = new SearchQueryActions.UpdateSearchQueryAction('mock term');
      const completion = new LoadResultsForTermAction('mock term');

      const expected = cold('--b', {b: completion});
      actions = hot('--a-', {a: action});

      expect(effects.clearResults$).toBeObservable(expected);
    });

    it('clearResults$ should be decorated', () => {
      expect(metadata.clearResults$).toEqual({ dispatch: true });
    });

    it('should dispatch QueryTooShortAction with search query of < 2 chars', () => {
      const action = new SearchQueryActions.UpdateSearchQueryAction('m');
      const completion = new QueryTooShortAction();

      const expected = cold('--b', {b: completion});
      actions = hot('--a-', {a: action});

      expect(effects.clearResults$).toBeObservable(expected);
    });
  });
});
