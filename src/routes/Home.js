import "./Home.scss";
import { useEffect, useState } from "react";
import Grid from "../components/Grid";
import Loader from "../components/Loader";
import { useSearchParams } from "react-router-dom";
import FilterContainer from "../components/FilterContainer";

const Home = () => {
  const [query] = useSearchParams();
  const search = query.get("search");

  const [pokemonList, setPokemonList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [nextPage, setNextPage] = useState(null);
  const [previousPage, setPreviousPage] = useState(null);
  const [currentPage, setCurrentPage] = useState(
    "https://pokeapi.co/api/v2/pokemon"
  );

  useEffect(() => {
    //Si search contiene algún valor solo hara la busqueda de un pokemon, en caso contrario devuelve 20 pokemon
    if (search) {
      setLoading(true);
      let array = [];
      fetch(`https://pokeapi.co/api/v2/pokemon/${search}`)
        .then((res) => res.json())
        .then((data) => {
          array.push(data);
          setPokemonList(array);
        })
        .finally(() => setLoading(false));
    } else {
      setLoading(true);
      let array = [];
      fetch(currentPage)
        .then((res) => res.json())
        .then(async (data) => {
          for await (const pokemon of data.results) {
            await fetch(pokemon.url)
              .then((res) => res.json())
              .then((pokemon) => {
                array.push(pokemon);
              });
          }
          setPokemonList(array);
          setNextPage(data.next);
          setPreviousPage(data.previous);
        })
        .finally(() => {
          setLoading(false);
        });
    }
  }, [currentPage, search]);

  return (
    <section className="container-home">
      <FilterContainer />
      {loading ? (
        <Loader />
      ) : search ? (
        //Grid con un solo pokemon
        <Grid key={pokemonList} pokemon={pokemonList} />
      ) : (
        //Grid con 20 pokemon
        <>
          <Grid key={pokemonList} pokemon={pokemonList} />
          <div className="pagination">
            {previousPage && (
              <button onClick={() => setCurrentPage(previousPage)}>
                {"<<<"}
              </button>
            )}
            {previousPage && nextPage && (
              <button
                onClick={() =>
                  setCurrentPage("https://pokeapi.co/api/v2/pokemon")
                }
              >
                First Page
              </button>
            )}
            {nextPage && (
              <button onClick={() => setCurrentPage(nextPage)}>{">>>"}</button>
            )}
          </div>
        </>
      )}
    </section>
  );
};

export default Home;

/*
 */
