/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';

import { CharacterCard } from '../../components/cards/CharacterCard/CharacterCard';
import { CharactersFilters } from '../../components/common/CharactersFilters/CharactersFilters';
import { useFavoritesContext } from '../../context/FavoritesContext/FavoritesContext';
import { PageHeader } from '../../components/layout/PageHeader/PageHeader';
import { ICharacter } from '../../interfaces/api/ICharacter';
import { Button } from '../../components/buttons/Button/Button';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '../../router/routes';

export const FavoritesPage = () => {
  const navigate = useNavigate();

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

  const redirectToCharacters = () => {
    navigate(ROUTES.CHARACTERS);
  };

  const resetFilters = () => {
    setSearchTerm('');
    setGenderValue(null);
  };

  useEffect(() => {
    filterResults();
  }, [searchTerm, genderValue]);

  return (
    <div className='bg-gray-50'>
      <PageHeader title='My favorites' total={favorites.length} />
      <main className='p-4 md:p-6 lg:p-10 lg:pt-5 max-w-[1400px] m-auto'>
        <CharactersFilters
          handleSearch={handleSearch}
          handleSelectOption={setGenderValue}
          resetFilters={resetFilters}
        />

        {listToDisplay.length > 0 ? (
          <ul className='mx-auto min-w-min grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 sm:gap-5 mt-5 justify-center'>
            {listToDisplay.map((character: ICharacter) => (
              <CharacterCard key={character.id} character={character} />
            ))}
          </ul>
        ) : (
          <div className='flex flex-col justify-center items-center min-h-60 text-gray-300 gap-5'>
            <h1 className='md:text-xl font-semibold '>{filtersActive ? 'There are no favorites to show': "You don't have any favorite yet"}</h1>
            {!filtersActive && <Button text='EXPLORE CHARACTERS' onClickHandler={redirectToCharacters} />}
          </div>
        )}
      </main>
    </div>
  );
};
