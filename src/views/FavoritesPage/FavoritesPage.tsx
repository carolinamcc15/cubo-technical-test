import { CharacterCard } from '../../components/cards/CharacterCard/CharacterCard';
import { useFavoritesContext } from '../../context/FavoritesContext/FavoritesContext';
import { ICharacter } from '../../interfaces/api/Character';

export const FavoritesPage = () => {
  const { favorites } = useFavoritesContext();

  return (
    <main className='p-4 md:p-6 lg:p-10 max-w-[1400px] m-auto'>
      <h1 className='page-title mb-2'>Favorite characters</h1>
      <span className='mb-5'>{favorites.length} favorites found</span>
      <ul className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5'>
        {favorites.map((character: ICharacter) => (
          <CharacterCard key={character.id} character={character} />
        ))}
      </ul>
    </main>
  );
};
