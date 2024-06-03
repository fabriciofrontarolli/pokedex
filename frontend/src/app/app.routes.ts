import { Routes } from '@angular/router';
import { PokemonListingComponent } from './pokemon-listing/pokemon-listing.component';
import { PokemonDetailsComponent } from './pokemon-details/pokemon-details.component';

export const routes: Routes = [
  { path: '', component: PokemonListingComponent }, // Pokemon listing
  { path: ':id', component: PokemonDetailsComponent }, // Pokemon details
];
