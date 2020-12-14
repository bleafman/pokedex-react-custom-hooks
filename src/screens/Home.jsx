import { useState, useEffect } from "react";
import Head from "next/head";

import Navbar from "../components/Navbar";
import Pokemon from "../components/Pokemon";
import PokemonSelect from "../components/PokemonSelect";

const usePokemonAPI = () => {
  const [pokemon, setPokemon] = useState("bulbasaur");
  const [data, setData] = useState({});
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
      } catch (e) {
        setIsError(true);
      }

      setIsLoading(false);
    }
  }, [pokemon]);

  return [{ data, isLoading, isError }, setPokemon];
};

export default function Home() {
  const [{ data, isLoading, isError }, setPokemon] = usePokemonAPI();

  return (
    <>
      <Head>
        <title>Pokedex</title>
        <link rel="icon" href={"/favicon.ico" + "?v=2"} />
      </Head>

      <div className="relative bg-white overflow-hidden h-screen md:h-full max-w-screen-xl mx-auto">
        <div className="max-w-7xl h-96 mx-auto flex flex-col md:justify-items-center md:flex-row">
          <div className="flex flex-col md:w-1/2 bg-gray-50">
            <Navbar />

            <main className="mx-auto max-w-7xl sm:mt-12 sm:px-6 mt-6 mb-12 sm:mb-16 md:mt-16 lg:px-8">
              <Hero />
              <div className="mx-5 mt-4">
                <PokemonSelect
                  handlePokemonChange={(pokemon) =>
                    setPokemon(pokemon.toLowerCase())
                  }
                />
              </div>
            </main>
          </div>
          <Divider />
          <div className="mt-8 max-w-full flex-1">
            {isError ? (
              <div className="text-rose-500 mt-32 text-center">
                Oh no! There was an error...
              </div>
            ) : (
              <Pokemon
                image={data?.sprites?.other?.dream_world?.front_default}
                isLoading={isLoading}
              />
            )}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

function Hero() {
  return (
    <h1 className="text-3xl pt-4 text-center">
      <span className="block font-semibold">The data you need to </span>
      <span className="block font-semibold text-brand-gradient">
        catch 'em all
      </span>
    </h1>
  );
}

function Divider() {
  return (
    <svg
      className="hidden md:block absolute h-full w-32 text-gray-50 inset-x-1/2 -ml-16"
      fill="currentColor"
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <polygon points="50,0 100,0 50,100 0,100" />
    </svg>
  );
}

function Footer() {
  return (
    <footer
      style={{
        fontVariant: "all-small-caps",
      }}
      className="text-xs text-gray-600 font-semibold tracking-tight m-3"
    >
      <a
        className="text-rose-400"
        href="https://github.com/bleafman/pokedex-react-custom-hooks"
        target="_blank"
        rel="noopener noreferrer"
      >
        Repo
      </a>{" "}
      brought to you by{" "}
      <a
        className="text-rose-400"
        href="https://github.com/bleafman"
        target="_blank"
        rel="noopener noreferrer"
      >
        bleafman
      </a>
    </footer>
  );
}
