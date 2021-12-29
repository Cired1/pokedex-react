import "./Home.scss";
import { useEffect, useState } from "react";
import Grid from "../components/Grid";
import Loader from "../components/Loader";
/* import FilterContainer from "../components/FilterContainer"; */

const Home = () => {

  const [pokemonList, setPokemonList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [nextPage, setNextPage] = useState(null);
  const [previousPage, setPreviousPage] = useState(null);
  const [currentPage, setCurrentPage] = useState(
    "https://pokeapi.co/api/v2/pokemon"
  );

  useEffect(() => {
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
  }, [currentPage]);

  return (
    <section className="container-home">
      {/* <FilterContainer /> */}
      {loading ? (
        <Loader />
      ) : (
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
              <button onClick={() => setCurrentPage(nextPage)}>
                {">>>"}
              </button>
            )}
          </div>
        </>
      )}
    </section>
  );
};

export default Home;
