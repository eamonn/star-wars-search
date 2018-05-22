import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { EffectsModule } from '@ngrx/effects';
import { ActionReducer, StoreModule } from '@ngrx/store';
import { storeLogger } from 'ngrx-store-logger';
import { environment } from '../environments/environment';
import { ApiModule } from './api/api.module';
import { AppComponent } from './app.component';
import { ContainersModule } from './containers/containers.module';
import { IStoreState, reducers } from './ngrx/reducers';
import { SearchQueryEffects } from './ngrx/search-query/search-query.effects';
import { SearchResultsEffects } from './ngrx/search-results/search-results.effects';
import { PresentationModule } from './presentation/presentation.module';

export function logger(reducer: ActionReducer<IStoreState>): any {
  return storeLogger({collapsed: true})(reducer);
}

export const metaReducers = environment.production ? [] : [ logger ];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ContainersModule,
    PresentationModule,
    ApiModule,
    StoreModule.forRoot(reducers, { metaReducers }),
    EffectsModule.forRoot([
      SearchQueryEffects,
      SearchResultsEffects
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
