import { useState, useEffect } from "react";

export const usePokemonAPI = (defualtPokemon) => {
  const [pokemon, setPokemon] = useState(defualtPokemon);
  const [data, setData] = useState({});
  const [image, setImage] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    fetchPokemon();

    async function fetchPokemon() {
      const API_PREIX = "https://pokeapi.co/api/v2/pokemon/";
      const url = new URL(`${API_PREIX}${pokemon}`);

      setIsError(false);
      setIsLoading(true);

      try {
        const result = await fetch(url);
        const data = await result.json();
        setData(data);

        setImage(data?.sprites?.other?.dream_world?.front_default);
      } catch (e) {
        setIsError(true);
      }

      setIsLoading(false);
    }
  }, [pokemon]);

  return [{ data, image, isLoading, isError }, setPokemon];
};
