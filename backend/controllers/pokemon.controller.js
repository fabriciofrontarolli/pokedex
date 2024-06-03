import express from 'express';
import pokemonService from '../services/pokemon.service.js';

const pokemonRoute = express.Router();

pokemonRoute.get('/', async (req, res) => {
  try {
    const { next } = req.query;
    const pokemonData = await pokemonService.fetchMorePokemon(next);
    return res.status(200).json(pokemonData);
  }
  catch (error) {
    res.status(500).send(error.message)
  }
});

pokemonRoute.get('/details', async (req, res) => {
  try {
    const { url } = req.query;
    const pokemonData = await pokemonService.fetchPokemonDetailsByUrl(url);
    return res.status(200).json(pokemonData);
  }
  catch (error) {
    res.status(500).send(error.message)
  }
});

export default pokemonRoute;
