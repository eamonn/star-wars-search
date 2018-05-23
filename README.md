# Starwars API Search (for Kingfisher)

## Build and Run

### The easy way (I built it for you already)
To save you faffing around with tooling and node versions I have deliberately
removed `/dist` from `.gitignore` (Would not usually do this). There is a prod build in there ready to go.
You should be able to run it on pretty much any web server you want, but i recommend the below.

Have a reasonably up-to-date version of [NodeJS Installed](https://nodejs.org/en/)

In the project root directory (above `src`) run the following in terminal:
```
npm install -g http-server
http-server dist
```
The terminal will tell you the URL where you can access the site (normally `http://127.0.0.1:8080`)
### The less easy way (build it yourself)


This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.0.3.
You will need to install it globally to generate a build.

You will need to have [NodeJS 8+ Installed](https://nodejs.org/en/)

Run `npm install` in the project root to download dependencies.

##### Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

##### Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist` directory. Use the `--prod` flag for a production build.

##### Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

----
## Notes

### Angular/ngrx vs React/Redux decision
As most of my commercial experience is in Angular I took the safe option of using it over react here,
mostly due to the time constraints and to show the best of my work where I have the most recent experience.
However I am using some react concepts here using smart wrapper components over facade services which is a more
typical Angular style approach.

### Features
- Enter text in the search box to search 6 different API Endpoints on the [Star Wars API](https://swapi.co/).
- Results from the 6 endpoints are displayed as fact cards below the search box.
- Text changes triggers new searches, at least two characters must be entered.
- Search box input is debounced in the ngrx store effects, API calls trigger 1500ms after change.
- Any outstanding in-flight requests cancel on search term change.
- I have implemented [ngrx store logger](https://github.com/btroncone/ngrx-store-logger) to log actions to the console.
Useful for debugging and visualising state changes, usually would only enable in develop/test environments
but have deliberately enabled in prod here. 

### Design Decision Highlights
- **Component Structure:** I am using "smart" [container components](https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0)
to interface with ngrx. These wrap "dumb" containers that are not concerned with the origins or calculations of state.
The dumb components display the state in the required format with the help of
purely decorative presentation component. Key benefit here is that any state management library could
replace ngrx and only the smart containers would need to be re-mapped to the new state.
- **ngrx:** Flux inspired, redux style store implemented with RxJs Observables for Angular. I chose this as it
is the state management library that I have the most experience in.
- **Selector factory function:** Rather than writing code for six selector's in `search-results.selectors.ts` (one for each set of api results). I have
implemented a selector factory function to return a selector to the consumer. This helps to cut boilerplate and maintenance.
- **Immutability:** In my reducer logic I am using [immutability-helper](https://github.com/kolodny/immutability-helper) to help
manage pure state updates in an efficient way as suggested/recommended by [Redux docs](https://redux.js.org/recipes/structuring-reducers/immutable-update-patterns#immutable-update-utility-libraries). 
- **In-flight request cancellation & debounce:** The http requests made by the app are called by Effects
that trigger off the back of ngrx Actions. These utilise RxJs switchMap to cancel in-flight requests that are
yet to respond, additionally the effects have a debounce time of 1500ms on them from when the search term changes.
Both of these measures are to help with network overhead, wasted API calls and API rate limiting.

### About Unit Tests
I have not unit tested the whole project as it is not in production.
I have tried to give a variety of unit test's for different scenarios:
- ngrx actions
- ngrx reducer ``
- ngrx selector
- ngrx effects
- http service
- smart (wrapper) component
- dumb component
- presentation component 

### With more time....
- **Tech Debt:** Results for each entity, are held in arrays in the store.
Generally, I would not do this as if you update an object by it's array index, another (possibly preceding) Action
could have re-ordered that array. The solution I would usually use is to hold objects in key value pairs (by id for example).
Then for state where order is important store an ordered array of the id's. This API does not provide id's on the returned objects, and in any case
the objects inside each array are never modified by the app so this would not cause a bug here, but it's still good to try and avoid arrays in the store where possible I feel.
- **Tech Debt:**: Generate API error class/object in catch block in the API Service, consume in effect rather than generate error in the effect. (Seperation of concerns)
- **Tech Debt:**: In state I am tracking the API calls complete with a simple increment counter. This is not a suitable solution for several reasons.
- **Feature**: Display errors, not just have them in reducer. Have a way to clear them down.
- **Tech Debt**: More unit tests, always more unit tests....
