import { useNavigate } from 'react-router-dom';

import useGenderImage from '../../../hooks/useGenderImage/useGenderImage';
import { ICharacter } from '../../../interfaces/api/ICharacter';
import { FavoriteButton } from '../../common/FavoriteButton/FavoriteButton';
import { ROUTES } from '../../../router/routes';

export const CharacterCard = ({ character }: PropTypes) => {
  const navigate = useNavigate();
  const [characterImage] = useGenderImage(character.gender);

  const navigateToDetail = () => {
    navigate(`${ROUTES.CHARACTERS}/${character.id}`);
  };

  return (
    <li
      onClick={navigateToDetail}
      className='relative cursor-pointer w-full mx-auto mt-1 rounded-lg p-0.5 shadow-lg border-2 border-gray-100'
    >
      <div className='flex sm:flex-col sm:justify-center items-center bg-white p-4 lg:p-5 pt-2 lg:pt-2 rounded-md'>
        <img src={characterImage} alt='Character gender representation' className='w-32 sm:mb-3' />
        <div>
          {' '}
          <h2 className='font-bold text-xl mb-2 sm:text-center'>{character.name}</h2>
          <p className='font-light sm:text-center'>{character.actor}</p>
        </div>
        <div className='absolute top-3 right-3 '>
          <FavoriteButton character={character} />
        </div>
      </div>
    </li>
  );
};

type PropTypes = {
  character: ICharacter;
};
