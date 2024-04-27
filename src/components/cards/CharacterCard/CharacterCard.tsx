import { SyntheticEvent } from 'react';

import { HeartIcon as HeartIconFilled } from '@heroicons/react/24/solid';
import { HeartIcon } from '@heroicons/react/24/outline';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

import { useFavoritesContext } from '../../../context/FavoritesContext/FavoritesContext';
import useGenderImage from '../../../hooks/useGenderImage/useGenderImage';
import { ICharacter } from '../../../interfaces/api/Character';
import { ROUTES } from '../../../router/routes';

export const CharacterCard = ({ character }: PropTypes) => {
  const navigate = useNavigate();
  const { favorites, addFavorite, removeFavorite } = useFavoritesContext();
  const [characterImage] = useGenderImage(character.gender);

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

  const navigateToDetail = () => {
    navigate(`${ROUTES.CHARACTERS}/${character.id}`);
  };

  return (
    <li
      onClick={navigateToDetail}
      className='cursor-pointer w-full mx-auto mt-1 rounded-lg p-0.5 shadow-lg border-2 border-gray-100'
    >
      <div className='bg-white p-4 lg:p-6 rounded-md'>
        <img src={characterImage} alt='Character gender representation' />
        <h2 className='font-bold text-xl mb-2'>{character.name}</h2>
        <p className='font-light'>{character.actor}</p>

        <button onClick={toggleFavorite}>
          {isFavorite ? (
            <HeartIconFilled className='text-black w-5' />
          ) : (
            <HeartIcon className='text-black w-5' />
          )}
        </button>
      </div>
    </li>
  );
};

type PropTypes = {
  character: ICharacter;
};
