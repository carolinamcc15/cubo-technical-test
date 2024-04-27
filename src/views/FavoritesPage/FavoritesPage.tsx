/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';

import { CharacterCard } from '../../components/cards/CharacterCard/CharacterCard';
import { CharactersFilters } from '../../components/common/CharactersFilters/CharactersFilters';
import { useFavoritesContext } from '../../context/FavoritesContext/FavoritesContext';
import { ICharacter } from '../../interfaces/api/Character';

export const FavoritesPage = () => {
  const { favorites } = useFavoritesContext();
  
  const [searchTerm, setSearchTerm] = useState('');
  const [genderValue, setGenderValue] = useState(null);
  const [filtered, setFiltered] = useState([]);

  const filtersActive = searchTerm || genderValue;
  const listToDisplay = filtersActive ? filtered : favorites;

  const handleSearch = (term: string) => {
    setSearchTerm(term);
  };

  const filterResults = () => {
    if (filtersActive) {
      const filteredCharacters = favorites.filter(
        (fav: ICharacter) =>
          fav.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
          (genderValue ? fav.gender === genderValue.value : true)
      );
      setFiltered(filteredCharacters);
    } else {
      setFiltered([]);
    }
  };

  useEffect(() => {
    filterResults();
  }, [searchTerm, genderValue]);

  return (
    <main className='p-4 md:p-6 lg:p-10 max-w-[1400px] m-auto'>
      <h1 className='page-title mb-2'>Favorite characters</h1>
      <CharactersFilters handleSearch={handleSearch} handleSelectOption={setGenderValue} />
      <ul className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5'>
        {listToDisplay.map((character: ICharacter) => (
          <CharacterCard key={character.id} character={character} />
        ))}
      </ul>
    </main>
  );
};
