import { createContext, useContext, useState, useEffect, ReactElement } from 'react';
import { ICharacter } from '../../interfaces/api/ICharacter';

const FavoritesContext = createContext({} as FavoritesContextValues);

export const useFavoritesContext = () => useContext<FavoritesContextValues>(FavoritesContext);

export const FavoritesProvider = ({ children }: PropTypes) => {
  const [favorites, setFavorites] = useState<ICharacter[]>([] as ICharacter[]);

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

type PropTypes = {
  children: ReactElement;
};

type FavoritesContextValues = {
  favorites: ICharacter[];
  addFavorite: (character: ICharacter) => void;
  removeFavorite: (characterId: number) => void;
};
