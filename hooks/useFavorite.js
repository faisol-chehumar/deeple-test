import { useState } from "react";

const useFavorite = () => {
  const [favorites, setFavorites] = useState([]);

  const addFavorite = (favorite) => {
    setFavorites([...favorites, favorite]);
  };

  const removeFavorite = (id) => {
    const result = favorites.filter((favorite) => favorite.id !== id);

    setFavorites(result);
  };

  return { favorites, addFavorite, removeFavorite };
};

export default useFavorite;
