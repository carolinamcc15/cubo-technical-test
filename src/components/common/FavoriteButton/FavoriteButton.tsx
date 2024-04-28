import { HeartIcon as HeartIconFilled } from '@heroicons/react/24/solid';
import { HeartIcon } from '@heroicons/react/24/outline';
import toast from 'react-hot-toast';
import { Tooltip } from 'react-tooltip';

import { useFavoritesContext } from '../../../context/FavoritesContext/FavoritesContext';

export const FavoriteButton = ({ character }: PropTypes) => {
  const { favorites, addFavorite, removeFavorite } = useFavoritesContext();

  const isFavorite = favorites.some(fav => fav.id === character.id);

  const toggleFavorite = (event: SyntheticEvent) => {
    // Stop event propagation to prevent navigation to details page
    event.stopPropagation();

    if (isFavorite) {
      removeFavorite(character.id);
      toast(`${character.name} removed from favorites`);
    } else {
      addFavorite(character);
      toast.success(`${character.name} added to favorites!`);
    }
  };

  return (
    <>
      <button
        onClick={toggleFavorite}
        className='flex items-center gap-1 m-auto text-gray-500'
      >
        {isFavorite ? (
          <>
            <HeartIconFilled
              data-tooltip-id='favs-tooltip'
              data-tooltip-content='Remove favorite'
              className='text-red-600 w-6 sm:w-7 '
            />
          </>
        ) : (
          <>
            <HeartIcon
              data-tooltip-id='favs-tooltip'
              data-tooltip-content='Add to favorites'
              className='text-gray-500 w-6 sm:w-7 '
            />
          </>
        )}
      </button>

      <Tooltip id='favs-tooltip' style={{ opacity: '0.8' }} />
    </>
  );
};

type PropTypes = {
  character: ICharacter;
};
