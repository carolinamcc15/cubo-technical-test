import { CharacterCard } from '../../components/cards/CharacterCard/CharacterCard';
import { useFavoritesContext } from '../../context/FavoritesContext/FavoritesContext';
import { ICharacter } from '../../interfaces/Character';

export const FavoritesPage = () => {
  const { favorites } = useFavoritesContext();

  return (
    <main>
      <h1 className='page-title'>Favorite characters</h1>
      <ul className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5'>
        {favorites.map((character: ICharacter) => (
          <CharacterCard character={character} />
        ))}
      </ul>
    </main>
  );
};
