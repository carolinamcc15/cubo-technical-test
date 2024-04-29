import React, { useState } from 'react';
import { debounce } from 'lodash';

import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import { XMarkIcon } from '@heroicons/react/24/solid';

export const SearchBar = ({ onSearch, placeholder = 'Search' }: PropTypes) => {
  const [searchTerm, setSearchTerm] = useState('');

  const debouncedSearch = debounce((term: string) => {
    onSearch(term);
  }, 300);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const term = event.target.value;
    setSearchTerm(term);
    debouncedSearch(term);
  };

  const handleResetSearch = () => {
    setSearchTerm('');
    debouncedSearch('');
  };

  return (
    <div className='relative'>
      <input
        type='text'
        placeholder={placeholder}
        className='block w-full border border-gray-300 rounded-md py-2 pl-10 pr-4 focus:outline-none focus:border-primary focus:ring focus:ring-primary-light focus:ring-opacity-50 transition duration-200 placeholder:text-gray-400'
        value={searchTerm}
        onChange={handleInputChange}
      />
      {searchTerm && (
        <button
          type='button'
          className='absolute inset-y-0 right-0 pr-3 flex items-center justify-center text-gray-400 hover:text-gray-600 focus:outline-none'
          onClick={handleResetSearch}
        >
          <XMarkIcon className='h-5 w-5' />
        </button>
      )}
      <div className='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none'>
        <MagnifyingGlassIcon className='h-5 w-5 text-gray-500' />
      </div>
    </div>
  );
};

type PropTypes = {
  onSearch: (term: string) => void;
  placeholder: string;
};
