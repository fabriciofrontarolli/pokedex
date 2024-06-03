import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

export interface PokemonElement {
  name: string;
  url: string;
}

export interface PokemonResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: Array<PokemonElement>;
}

@Injectable({ providedIn: 'root' })
export class PokemonServiceService {
  constructor(private httpClient: HttpClient) { }

  fetchPokemonList(nextUrl: string | null | false | undefined = undefined): Observable<PokemonResponse> {
    return this.httpClient.get<PokemonResponse>(`${environment.apiUrl}/api/pokemon${nextUrl ? `?next=${nextUrl}` : ''}`)
  }

  fetchPokemonDetails(url: string): Observable<any> {
    return this.httpClient.get<PokemonResponse>(`${environment.apiUrl}/api/pokemon/details?url=${url}`)
  }
}
