import {
  BuildingLibraryIcon,
  BriefcaseIcon,
  StarIcon,
  FilmIcon,
  HeartIcon,
} from '@heroicons/react/24/outline';
import { useParams } from 'react-router-dom';
import { useQuery } from 'react-query';

import { FavoriteButton } from '../../components/common/FavoriteButton/FavoriteButton';
import { LoadingDetail } from '../../components/common/LoadingDetail/LoadingDetail';
import useGenderImage from '../../hooks/useGenderImage/useGenderImage';
import animatedBg from '../../assets/svg/animated-squares-dark.svg';
import usePageTitle from '../../hooks/usePageTitle/usePageTitle';
import CharactersService from '../../services/characters';

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
    return <div>An error occurred: {error.message}</div>;
  }

  return (
    <div
      className='bg-primary-dark min-h-[95vh] flex flex-col justify-center items-center bg-cover bg-center p-8 pt-20 sm:pt-24 '
      style={{ backgroundImage: `url(${animatedBg})` }}
    >
      <main className='flex flex-col gap-8 backdrop-blur-sm isolate bg-white/70 ring-1 ring-black/5 shadow-lg p-4 md:p-6 lg:p-10 pt-0 rounded-md w-full sm:w-auto lg:min-w-[700px] max-w-[1200px] m-auto'>
        <div className='relative flex  flex-wrap gap-10'>
          <img
            src={characterImage}
            className='absolute left-1/2 transform -translate-x-1/2 -translate-y-10 md:-translate-y-16 w-32 h-32 md:w-40 md:h-40 rounded-full shadow-lg object-cover'
            alt='Character gender representation'
          />
          <div className='w-full flex flex-col items-center justify-center mt-28 border-b-[1px] border-white pb-4'>
            <div className='flex gap-4 items-center justify-center'>
              <h1 className='page-title mb-3 text-center font-title'>{character.name} </h1>
              <FavoriteButton character={character} />
            </div>

            <h2 className='text-md sm:text-lg mb-2 text-gray-600'>{character.actor}</h2>
          </div>
        </div>

        <div className='flex flex-col gap-4'>
          <div className='grid grid-cols-1 sm:grid-cols-3 gap-4'>
            <section className='flex flex-col gap-3 bg-white bg-opacity-50 p-5 rounded-md shadow-lg border-[1px] border-primary-light'>
              <h3 className='flex items-center font-semibold text-primary-dark gap-2'>
                <StarIcon className='w-5' /> First appearance
              </h3>
              <p className='ml-3'>{character.firstAppearance || 'None'}</p>
            </section>
            <section className='flex flex-col gap-3 bg-white bg-opacity-50 p-5 rounded-md shadow-lg border-[1px] border-primary-light'>
              <h3 className='flex items-center font-semibold  text-primary-dark gap-2'>
                <FilmIcon className='w-5' /> Last appearance
              </h3>
              <p className='ml-3'>{character.lastAppearance || 'None'}</p>
            </section>
            <section className='flex flex-col gap-3 bg-white bg-opacity-50 p-5 rounded-md shadow-lg border-[1px] border-primary-light'>
              <h3 className='flex items-center font-semibold  text-primary-dark gap-2'>
                <HeartIcon className='w-5' /> Marital
              </h3>
              <p className='ml-3'>{character.marital || 'No'}</p>
            </section>
          </div>

          <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
            <section className='flex flex-col gap-3 bg-white bg-opacity-50 p-5 rounded-md shadow-lg border-[1px] border-primary-light'>
              <h3 className='flex items-center font-semibold  text-primary-dark gap-2'>
                <BuildingLibraryIcon className='w-6' /> Workplaces
              </h3>
              <ul className='flex flex-col gap-2'>
                {character.workplace.length > 0 ? (
                  character.workplace.map((workplace: string) => (
                    <li key={workplace} className='ml-3'>
                      <span className=' text-primary-light mr-0.5'>•</span> {workplace}
                    </li>
                  ))
                ) : (
                  <li className='ml-3 text-gray-500'>No workplaces found</li>
                )}
              </ul>
            </section>
            <section className='flex flex-col gap-3 bg-white bg-opacity-50 p-5 rounded-md shadow-lg border-[1px] border-primary-light'>
              <h3 className='flex items-center font-semibold  text-primary-dark gap-2'>
                <BriefcaseIcon className='w-6' /> Jobs
              </h3>
              <ul className='flex flex-col gap-2'>
                {character.job.length > 0 ? (
                  character.job.map((job: string) => (
                    <li key={job} className='ml-3'>
                      <span className=' text-primary-light mr-0.5'>•</span> {job}
                    </li>
                  ))
                ) : (
                  <li className='ml-3 text-gray-500'>No jobs found</li>
                )}
              </ul>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
};
