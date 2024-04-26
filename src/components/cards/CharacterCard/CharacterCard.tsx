import { HeartIcon as HeartIconFilled } from '@heroicons/react/24/solid';
import { HeartIcon } from '@heroicons/react/24/outline';
import toast from 'react-hot-toast';

import { useFavoritesContext } from '../../../context/FavoritesContext/FavoritesContext';
import { ICharacter } from '../../../interfaces/api/Character';
import womanImage from '../../../assets/woman.jpg';
import manImage from '../../../assets/man.jpg';
import { GENDERS } from '../../../enums/enums';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '../../../router/routes';
import { SyntheticEvent } from 'react';

export const CharacterCard = ({ character }: PropTypes) => {
  const { favorites, addFavorite, removeFavorite } = useFavoritesContext();
  const navigate = useNavigate();

  const silhouetteImage = character.gender === GENDERS.MALE ? manImage : womanImage;
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
      <div className='bg-white p-7 rounded-md'>
        <img src={silhouetteImage} alt='Character gender representation' />
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
