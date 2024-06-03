# Angular and NodeJS Assessment

## Overview
An Angular and NodeJS hands-on practice to interact with Poke API (https://pokeapi.co/).
NodeJS API serves as a proxy to forward requests to pokeapi, and the Angular UI interacts with the NodeJS application.
Both projects make use of a Dockerfile, and all the stack is ran using Docker Compose.

### API
- NodeJS
- Express
- Axios

### UI
- Angular
- Material UI

### Running the app

The project uses docker compose to run the application.
- Install [Docker Compose](https://docs.docker.com/compose/install/)
- Install project dependencies
-- Install backend dependencies
```
cd backend
npm install
```
-- Install frontend dependencies
```
cd frontend
npm install
```

- Run `docker compose up` to run both frontend angular app and backend nodejs api
