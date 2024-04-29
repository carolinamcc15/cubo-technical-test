import { useParams } from 'react-router-dom';
import { useQuery } from 'react-query';
import toast from 'react-hot-toast';
import {
  BuildingLibraryIcon,
  BriefcaseIcon,
  StarIcon,
  FilmIcon,
  HeartIcon,
} from '@heroicons/react/24/outline';

import { FavoriteButton } from '../../components/common/FavoriteButton/FavoriteButton';
import { LoadingDetail } from '../../components/common/LoadingDetail/LoadingDetail';
import ErrorMessage from '../../components/common/ErrorMessage/ErrorMessage';
import useGenderImage from '../../hooks/useGenderImage/useGenderImage';
import animatedBg from '../../assets/svg/animated-squares-dark.svg';
import usePageTitle from '../../hooks/usePageTitle/usePageTitle';
import CharactersService from '../../services/characters';
import { DataSection } from './DataSection/DataSection';

export const CharactersDetailsPage = () => {
  const charactersService = new CharactersService();
  const {
    data: character,
    error,
    isLoading,
  } = useQuery('characterDetail', () => charactersService.fetchOneCharacter(id), {
    cacheTime: 0,
  });

  usePageTitle(character?.name);
  const [characterImage] = useGenderImage(character?.gender);
  const { id } = useParams();

  if (isLoading) {
    return <LoadingDetail />;
  }

  if (error) {
    toast.error('ERROR: Could not load character details');
    return <ErrorMessage />;
  }

  return (
    <div
      className='bg-primary-dark min-h-[95vh] flex flex-col justify-center items-center bg-cover bg-center p-8 pt-20 sm:pt-24 pb-16'
      style={{ backgroundImage: `url(${animatedBg})` }}
    >
      <main className='flex flex-col gap-8 backdrop-blur-sm isolate bg-white/70 ring-1 ring-black/5 shadow-lg p-4 md:p-6 lg:p-10 pt-0 rounded-md w-full sm:w-auto lg:min-w-[700px] max-w-[1200px] m-auto'>
        <div className='relative flex  flex-wrap gap-10'>
          <img
            src={characterImage}
            className='absolute left-1/2 transform -translate-x-1/2 -translate-y-10 md:-translate-y-16 w-32 h-32 md:w-36 md:h-36 rounded-full shadow-lg object-cover'
            alt='Character gender representation'
          />
          <div className='w-full flex flex-col items-center justify-center mt-24 border-b-[1px] border-white pb-4'>
            <div className='flex gap-4 items-center justify-center'>
              <h1 className='page-title mb-3 text-center font-title'>{character.name} </h1>
              <FavoriteButton character={character} />
            </div>

            <h2 className='text-md sm:text-lg mb-2 text-gray-600'>{character.actor}</h2>
          </div>
        </div>

        <div className='flex flex-col gap-4'>
          <div className='grid grid-cols-1 sm:grid-cols-3 gap-4'>
            <DataSection
              icon={<StarIcon className='w-5' />}
              title='First appearance'
              textValue={character.firstAppearance || 'None'}
            />
            <DataSection
              icon={<FilmIcon className='w-5' />}
              title='Last appearance'
              textValue={character.lastAppearance || 'None'}
            />
            <DataSection
              icon={<HeartIcon className='w-5' />}
              title='Marital'
              textValue={character.marital || 'No'}
            />
          </div>
          <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
            <DataSection
              icon={<BuildingLibraryIcon className='w-5' />}
              title='Workplaces'
              listValues={character.workplace}
              emptyListMessage='No workplaces found'
            />
            <DataSection
              icon={<BriefcaseIcon className='w-5' />}
              title='Jobs'
              listValues={character.job}
              emptyListMessage='No jobs found'
            />
          </div>
        </div>
      </main>
    </div>
  );
};
