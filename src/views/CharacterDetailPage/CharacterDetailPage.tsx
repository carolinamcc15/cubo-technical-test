import { BuildingLibraryIcon } from '@heroicons/react/24/outline';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';

import CharactersService from '../../services/characters';
import usePageTitle from '../../hooks/usePageTitle/usePageTitle';
import useGenderImage from '../../hooks/useGenderImage/useGenderImage';

import animatedSquaresBg from '../../assets/svg/animated-squares-bg.svg';

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
    return <div>Fetching details...</div>;
  }

  if (error) {
    return <div>An error occurred: {error.message}</div>;
  }

  return (
    <div className='bg-gray-50 '>
      <img
        src={animatedSquaresBg}
        className='w-full h-64 md:h-72 object-cover'
        alt='Animated squares background'
      />
      <main className='p-4 md:p-6 lg:p-10 pt-0 max-w-[1200px] m-auto'>
        <div className='flex flex-wrap gap-10'>
          <img
            src={characterImage}
            className='w-32 sm:w-48 md:w-60 rounded-full -translate-y-24 shadow-lg'
            alt='Character gender representation'
          />
          <div className='flex flex-col '>
            <h1 className='page-title mb-3'>{character.name}</h1>
            <h2 className='text-xl mb-2 text-gray-600'>{character.actor}</h2>
          </div>
        </div>
        <div className='grid auto-rows-[192px] grid-cols-3 gap-4'></div>
        <div className='flex flex-col'>
          <span className='font-bold'>Marital</span>
          <span>{character.marital || 'No'}</span>
        </div>
        <div className='flex flex-col'>
          <span className='font-bold'>First appearance</span>
          <span>{character.firstAppearance}</span>
        </div>
        <div className='flex flex-col'>
          <span className='font-bold'>Last appearance</span>
          <span>{character.lastAppearance}</span>
        </div>
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-5'>
          <section className='flex flex-col gap-3 bg-white p-6 rounded-md shadow-lg border-[1px] border-primary-light'>
            <h3 className='flex items-end font-semibold text-lg text-primary-dark gap-2'>
              <BuildingLibraryIcon className='w-7' /> Workplaces
            </h3>
            <ul className='flex flex-col gap-2'>
              {character.workplace.map((workplace: string) => (
                <li key={workplace} className='ml-10'>
                  {workplace}
                </li>
              ))}
            </ul>
          </section>
          <section>
            <h3 className='font-bold'>Jobs</h3>
            <ul>
              {character.job.map((job: string) => (
                <li key={job}>{job}</li>
              ))}
            </ul>
          </section>
        </div>
      </main>
    </div>
  );
};
