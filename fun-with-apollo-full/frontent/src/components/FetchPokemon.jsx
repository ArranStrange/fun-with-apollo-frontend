import { useState } from "react";
import { gql, useLazyQuery } from "@apollo/client";

const FETCH_POKEMON = gql`
  query FetchPokemon($pokemonName: String) {
    fetchPokemon(pokemonName: $pokemonName) {
      name
      sprites {
        front_default
      }
      types {
        slot
        type {
          name
        }
      }
    }
  }
`;

export default function FetchPokemon() {
  const [pokemonName, setPokemonName] = useState("");
  const [fetchPokemon, result] = useLazyQuery(FETCH_POKEMON);

  return (
    <div>
      <input
        value={pokemonName}
        onChange={(e) => setPokemonName(e.target.value)}
        placeholder="Pokemon name"
      />
      <button onClick={() => fetchPokemon({ variables: { pokemonName } })}>
        Search
      </button>

      {result.data && (
        <div>
          <h2>{result.data.fetchPokemon.name}</h2>
          <p>Image:</p>
          <img
            src={result.data.fetchPokemon.sprites.front_default}
            alt={result.data.fetchPokemon.name}
          />
          <p>Types:</p>
          <ul>
            {result.data.fetchPokemon.types.map((t, i) => (
              <li key={i}>{t.type.name}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
