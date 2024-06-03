import axios from 'axios';

const INITIAL_URL = 'https://pokeapi.co/api/v2/pokemon';

export const fetchMorePokemon = async (url = INITIAL_URL) => {
  const pokemonResponse = await axios(url);
  return pokemonResponse.data;
}

export const fetchPokemonDetailsByUrl = async (url) => {
  if (!url) {
    throw new Error('Nenhum pokemon selecionado!');
  }
  const pokemonResponse = await axios(url);
  return pokemonResponse.data;
}

export default {
  fetchMorePokemon,
  fetchPokemonDetailsByUrl,
};
