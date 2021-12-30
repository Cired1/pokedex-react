import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Loader from "../components/Loader";
import PokemonPortrait from "../components/PokemonPortrait";
import "./Pokemon.scss";
import PokemonInfo from "../components/PokemonInfo";
import FilterContainer from "../components/FilterContainer";

const Pokemon = () => {
  const [pokemon, setPokemon] = useState({});
  const [pokemonSpecie, setPokemonSpecie] = useState({});
  const [loadingPokemon, setLoadingPokemon] = useState(true);
  const [loadingPokemonSpecie, setLoadingPokemonSpecie] = useState(true);
  let { id } = useParams();

  useEffect(() => {
    setLoadingPokemon(true);
    setLoadingPokemonSpecie(true);
    fetch("https://pokeapi.co/api/v2/pokemon/" + id)
      .then((res) => res.json())
      .then((data) => setPokemon(data))
      .finally(() => setLoadingPokemon(false));

    fetch("https://pokeapi.co/api/v2/pokemon-species/" + id)
      .then((res) => res.json())
      .then((data) => setPokemonSpecie(data))
      .finally(() => setLoadingPokemonSpecie(false));
  }, [id]);

  return (
    <section className="container-pokemon">
      {loadingPokemon ? (
        <Loader />
      ) : loadingPokemonSpecie ? (
        <Loader />
      ) : (
        <>
          <PokemonPortrait
            key={pokemon.id}
            name={pokemon.name}
            image={pokemon.sprites.other["official-artwork"].front_default}
            frontSprite={pokemon.sprites.front_default}
            backSprite={pokemon.sprites.back_default}
            frontShiny={pokemon.sprites.front_shiny}
            backShiny={pokemon.sprites.back_shiny}
            bgColor={pokemon.types[0].type.name}
          />
          <PokemonInfo
            key={pokemon.name}
            abilities={pokemon.abilities}
            height={pokemon.height}
            weight={pokemon.weight}
            types={pokemon.types}
            stats={pokemon.stats}
            description={pokemonSpecie.flavor_text_entries[0].flavor_text}
            captureRate={pokemonSpecie.capture_rate}
            habitat={
              pokemonSpecie.habitat ? pokemonSpecie.habitat.name : "No data"
            }
            bgColor={pokemon.types[0].type.name}
          />
        </>
      )}
    </section>
  );
};

export default Pokemon;
