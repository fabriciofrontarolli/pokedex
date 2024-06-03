import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pokemonSearchPipe'
})
export class PokemonSearchPipe implements PipeTransform {
  transform(data: any[], filterString: string | undefined, filterProperty: string): any[] {
    if (!data || !filterString) {
      return data;
    }

    return data.filter(item => {
      const value = item[filterProperty].toLowerCase();
      const filter = filterString.toLowerCase();
      return value.includes(filter);
    });
  }
}
