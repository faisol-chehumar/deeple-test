import Image from "next/image";
import { useEffect, useState } from "react";
import styles from "../styles/Home.module.css";
import axios from "axios";

import useFavorite from "../hooks/useFavorite";

import PokemonDetail from "../components/pokemon-detail";
import WaitngRequest from "../components/waing-request";
import FavoriteResult from "../components/FavoriteResult";

export default function Home() {
  const [searchValue, setSearchValue] = useState(undefined);
  const [searchResults, setSearchResults] = useState(undefined);
  const [isWating, setIsWating] = useState(false);
  const [isNotFound, setIsNotFound] = useState(false);

  const { favorites, addFavorite, removeFavorite } = useFavorite();

  const handleChangeSearchInput = (e) => {
    setSearchValue(e.target.value);
  };

  const fetchData = async () => {
    if (searchValue) {
      try {
        const { data } = await axios.get(
          `https://pokeapi.co/api/v2/pokemon/${searchValue}`
        );
        setSearchResults(data);
      } catch (error) {
        setSearchResults(undefined);
        setIsNotFound(true);
      } finally {
        setIsWating(false);
      }
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchValue) {
        setIsNotFound(false);
        setIsWating(true);
        fetchData(searchValue);
      } else {
        setIsNotFound(false);
        setSearchResults(undefined);
      }
    }, 1000);

    return () => clearTimeout(timer);
  }, [searchValue]);

  return (
    <div className={styles.container}>
      <div className={styles["app-container"]}>
        <div className={styles["logo-container"]}>
          <Image
            src="/images/logo.svg"
            width="162px"
            height="60px"
            alt="logo"
          ></Image>
        </div>
        <div className={styles["search-box"]}>
          <div style={{ position: "relative", marginBottom: "2rem" }}>
            <input
              className={styles["search-input"]}
              type="text"
              placeholder="Search Pokemon"
              onChange={handleChangeSearchInput}
              value={searchValue}
              style={{ paddingLeft: "40px" }}
            />
            <div style={{ position: "absolute", left: "10px", top: "10px" }}>
              <Image
                src={`/images/search-icon.svg`}
                width="20px"
                height="20px"
                alt="search-icon"
              />
            </div>
            <div style={{ position: "absolute", right: "10px", top: "10px" }}>
              0/50
            </div>
          </div>
          <div className={styles["display-result"]}>
            {isWating ? (
              <WaitngRequest />
            ) : searchResults || isNotFound ? (
              <PokemonDetail
                data={searchResults}
                isNotFound={isNotFound}
                addFavorite={addFavorite}
              />
            ) : (
              <p>Try search for Pokémon by their name</p>
            )}
          </div>
        </div>
      </div>
      <div className={styles["poke-list"]}>
        {favorites.length > 0 && (
          <FavoriteResult
            data={favorites}
            handleRemoveFavorite={removeFavorite}
          />
        )}
      </div>
    </div>
  );
}
