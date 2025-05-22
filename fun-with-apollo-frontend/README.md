# Fun with Apollo

A simple full-stack GraphQL app using Apollo Server and Apollo Client to search for Pokémon and display basic information using the PokeAPI.

## Features

- Search for a Pokémon by name
- View its types and official sprite image
- Technologies used:
  - Apollo Server (GraphQL backend)
  - Apollo Client with React (frontend)
  - Vite (React build tool)
  - Node.js and the PokeAPI as data source

## Setup

### Backend

cd fun-with-apollo
npm install
npm run dev

markdown
Copy
Edit

- Starts the GraphQL server at: `http://localhost:4000`

### Frontend

cd fun-with-apollo-frontend
npm install
npm run dev

markdown
Copy
Edit

- Starts the Vite frontend at: `http://localhost:5173`
- Ensure the backend server is running before starting the frontend

## Example

Search for: `pikachu`

Displays:

- Name: pikachu
- Types: electric
- Image: Pokémon sprite

## Notes

- Make sure both frontend and backend are running on the correct ports
- Data is sourced live from the [PokeAPI](https://pokeapi.co/)
