import { useState, useEffect, useReducer } from "react";

const pokemonApiReducer = (state, action) => {
  switch (action.type) {
    case "FETCH_INIT":
      return { ...state, isLoading: true, isError: false };
    case "FETCH_SUCCESS":
      return {
        ...state,
        data: action.payload,
        image: action.payload.sprites?.other?.dream_world?.front_default,
        isLoading: false,
        isError: false,
      };
    case "FETCH_FAILURE":
      return { ...state, isLoading: false, isError: true };
    default:
      throw new Error();
  }
};

export const usePokemonAPI = (defualtPokemon) => {
  const [pokemon, setPokemon] = useState(defualtPokemon);

  const [state, dispatch] = useReducer(pokemonApiReducer, {
    isLoading: false,
    isError: false,
    data: {},
    image: undefined,
  });

  useEffect(() => {
    fetchPokemon();

    async function fetchPokemon() {
      dispatch({ type: "FETCH_INIT" });

      const API_PREIX = "https://pokeapi.co/api/v2/pokemon/";
      const url = new URL(`${API_PREIX}${pokemon}`);

      try {
        const result = await fetch(url);
        const data = await result.json();

        dispatch({ type: "FETCH_SUCCESS", payload: data });
      } catch (e) {
        dispatch({ type: "FETCH_FAILURE" });
      }
    }
  }, [pokemon]);

  return [{ ...state }, setPokemon];
};
