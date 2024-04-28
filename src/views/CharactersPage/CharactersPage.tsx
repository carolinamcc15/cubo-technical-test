import { useMemo, useState } from 'react';

import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid';
import ReactPaginate from 'react-paginate';
import { useQuery } from 'react-query';
import toast from 'react-hot-toast';

import { CharacterCard } from '../../components/cards/CharacterCard/CharacterCard';
import { LoadingCards } from '../../components/common/LoadingCards/LoadingCards';
import ErrorMessage from '../../components/common/ErrorMessage/ErrorMessage';
import { PageHeader } from '../../components/layout/PageHeader/PageHeader';
import { ICharacter } from '../../interfaces/api/ICharacter';
import CharactersService from '../../services/characters';
import { charactersPerPage } from '../../utils/constants';

export const CharactersPage = () => {
  const charactersService = new CharactersService();
  const [currentPage, setCurrentPage] = useState(1);

  const { data, error, isLoading } = useQuery(
    ['charactersData', currentPage],
    () => charactersService.fetchCharacters({ page: currentPage, limit: charactersPerPage }),
    {
      enabled: currentPage > 0,
      refetchOnWindowFocus: false,
      staleTime: 0,
      refetchInterval: false,
    }
  );

  const characters = data?.results;
  const pageCount = useMemo(() => Math.ceil(data?.meta.totalCount / charactersPerPage), [data]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const handlePageClick = (selectedPage: { selected: number }) => {
    setCurrentPage(selectedPage.selected + 1);
    scrollToTop();
  };

  if (error) {
    toast.error('ERROR: Could not load characters');
    return <ErrorMessage />;
  }

  return (
    <div className='bg-gray-50'>
      <PageHeader title='Characters' total={data?.meta.totalCount} />
      <main className='p-4 md:p-6 lg:p-10 pt-0 max-w-[1400px] m-auto'>
        <ul className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 sm:gap-5 mt-5'>
          {isLoading ? (
            <LoadingCards quantity={10} />
          ) : (
            characters &&
            characters.map((character: ICharacter) => (
              <CharacterCard key={character.id} character={character} />
            ))
          )}
        </ul>
        <ReactPaginate
          initialPage={currentPage - 1}
          previousLabel={<ChevronLeftIcon className='w-5' />}
          nextLabel={<ChevronRightIcon className='w-5' />}
          breakLabel={'...'}
          pageCount={pageCount}
          marginPagesDisplayed={2}
          pageRangeDisplayed={3}
          onPageChange={handlePageClick}
          containerClassName={'flex justify-center items-center pt-10 mb-5'}
          activeClassName={'bg-primary text-white rounded-full font-bold text-lg py-1 '}
          disabledClassName={'opacity-50 cursor-not-allowed'}
          breakClassName={'...'}
          pageClassName={'m-1'}
          previousClassName={'m-1'}
          nextClassName={'m-1'}
          pageLinkClassName={'rounded-full px-3 py-1 hover:bg-primary-light hover:bg-opacity-30 px-3 py-1 transition ease-in-out duration-300'}
          previousLinkClassName={'rounded-full font-bold text-primary hover:primary-dark hover:px-3 hover:py-1 '}
          nextLinkClassName={'rounded-full font-bold text-primary hover:primary-dark'}
          breakLinkClassName={'...'}
        />
      </main>
    </div>
  );
};
