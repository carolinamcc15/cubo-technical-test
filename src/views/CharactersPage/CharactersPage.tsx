import { useQuery } from 'react-query';

import { CharacterCard } from '../../components/cards/CharacterCard/CharacterCard';
import CharactersService from '../../services/characters';
import { ICharacter } from '../../interfaces/api/ICharacter';

export const CharactersPage = () => {
  const charactersService = new CharactersService();

  const {
    data: characters,
    error,
    isLoading,
  } = useQuery('charactersData', () => charactersService.fetchCharacters());

  if (isLoading) {
    return <div>Fetching characters...</div>;
  }

  if (error) {
    return <div>An error occurred: {error.message}</div>;
  }

  return (
    <main className='p-4 md:p-6 lg:p-10 max-w-[1400px] m-auto'>
      <h1 className='page-title'>All characters</h1>
      <ul className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5'>
        {characters.map((character: ICharacter) => (
          <CharacterCard key={character.id} character={character} />
        ))}
      </ul>
    </main>
  );
};
