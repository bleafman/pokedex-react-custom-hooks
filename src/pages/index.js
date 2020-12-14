import Head from "next/head";

import Navbar from "../components/Navbar";
import Pokemon from "../components/Pokemon";
import SearchBar from "../components/SearchBar";

export default function Home() {
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
                <SearchBar />
              </div>
            </main>
          </div>
          <Divider />
          <div className="mt-8 max-w-full flex-1">
            <Pokemon />
          </div>
        </div>
      </div>

      {/* <footer className="">
        Repo brought to you by bleafman &nbsp;
        <a
          href="https://github.com/bleafman"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faGithub} />
        </a>
      </footer> */}
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
