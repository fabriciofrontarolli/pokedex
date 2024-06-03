import { Component, inject } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { PokemonServiceService } from '../services/pokemon-service.service';

@Component({
  selector: 'app-pokemon-details',
  standalone: true,
  imports: [MatButtonModule],
  templateUrl: './pokemon-details.component.html',
  styleUrl: './pokemon-details.component.scss'
})
export class PokemonDetailsComponent {
  pokemonService = inject(PokemonServiceService);
  pokemonDetails: any = {};

  constructor(
    private router: Router,
    private route: ActivatedRoute,
  ) {
  }

  ngOnInit() {
    console.log('this.route.snapshot.queryParams >>>> ', this.route.snapshot.queryParams)
    this.pokemonService
        .fetchPokemonDetails(this.route.snapshot.queryParams['url'])
        .subscribe((result: any) => {
          this.pokemonDetails = result;
          console.log('result >>>  ', result)
        });
  }

  returnToListing() {
    this.router.navigate(['/'])
  }
}
