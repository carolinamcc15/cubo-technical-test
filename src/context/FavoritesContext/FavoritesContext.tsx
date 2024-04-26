import { createContext, useContext, useState, useEffect } from 'react';
import { ICharacter } from '../../interfaces/api/Character';

const FavoritesContext = createContext([]);

export const useFavoritesContext = () => useContext(FavoritesContext);

export const FavoritesProvider = ({ children }) => {
  const [favorites, setFavorites] = useState<ICharacter[]>([]);

  const addFavorite = (character: ICharacter) => {
    const updatedFavs = [...favorites, character];

    setFavorites(updatedFavs);
    localStorage.setItem('favorites', JSON.stringify(updatedFavs));
  };

  const removeFavorite = (characterId: number) => {
    const updatedFavs = favorites.filter(character => character.id !== characterId);
    setFavorites(updatedFavs);
    localStorage.setItem('favorites', JSON.stringify(updatedFavs));
  };

  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem('favorites') || '[]');
    setFavorites(storedFavorites);
  }, []);

  return (
    <FavoritesContext.Provider value={{ favorites, addFavorite, removeFavorite }}>
      {children}
    </FavoritesContext.Provider>
  );
};
