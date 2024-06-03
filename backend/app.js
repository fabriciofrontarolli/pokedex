import bodyParser from 'body-parser';
import express from 'express';
import cors from 'cors';

import pokemonController from './controllers/pokemon.controller.js';

const app = express();

app.use((req, res, next) => {
  console.log(req.originalUrl)
  next();
})

app.use(bodyParser.json());
app.use(cors());

// App Routes
app.use('/api/pokemon', pokemonController);

export default app;
