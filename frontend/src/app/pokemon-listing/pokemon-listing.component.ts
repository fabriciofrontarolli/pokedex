import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { PokemonElement, PokemonResponse, PokemonServiceService } from '../services/pokemon-service.service';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { PokemonSearchPipe } from '../pipes/pokemon-search.pipe';

@Component({
  selector: 'app-pokemon-listing',
  standalone: true,
  imports: [MatTableModule, MatButtonModule, MatInputModule, FormsModule],
  templateUrl: './pokemon-listing.component.html',
  styleUrl: './pokemon-listing.component.scss',
  providers: [PokemonSearchPipe]
})
export class PokemonListingComponent {
  constructor(
    private router: Router,
    private pokemonSearchPipe: PokemonSearchPipe
  ) {}

  pokemonResponse: PokemonResponse | null | undefined = undefined;
  fullPokemonList: any = [];
  displayPokemonList: any = [];
  displayedColumns: string[] = ['name', 'view'];
  searchCriteria: string | undefined = undefined;

  pokemonService = inject(PokemonServiceService);

  loadPokemonList(isLoadingMore: boolean = false) {
    this.pokemonService
        .fetchPokemonList(isLoadingMore && this.pokemonResponse?.next)
        .subscribe((result: PokemonResponse) => {
          this.pokemonResponse = result;
          this.fullPokemonList = [
            ...this.fullPokemonList,
            ...result.results
          ];
          this.displayPokemonList = this.fullPokemonList;
          this.searchPokemon();
        });
  }

  ngOnInit() {
    this.loadPokemonList();
  }

  onLoadMore() {
    this.loadPokemonList(true);
  }

  onSelectPokemon(pokemonElement: PokemonElement) {
    const pokemonId = pokemonElement.url.split('/')[6];
    this.router.navigate(['/', pokemonId], {
      queryParams: {
        url: pokemonElement.url,
      }
    })
  }

  searchPokemon() {
    if (!this.searchCriteria) {
      this.displayPokemonList = this.fullPokemonList;
    }
    const data = this.pokemonSearchPipe.transform(this.fullPokemonList, this.searchCriteria, 'name');
    this.displayPokemonList = data;
  }
}
