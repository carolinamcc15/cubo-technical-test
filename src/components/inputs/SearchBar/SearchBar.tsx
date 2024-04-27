import { MagnifyingGlassIcon, XCircleIcon } from '@heroicons/react/24/outline';
import React, { useState } from 'react';

export const SearchBar = ({ onSearch, placeholder = 'Search' }: PropTypes) => {
  const [searchTerm, setSearchTerm] = useState('');

  const debounce = (func: any, delay: number) => {
    let timeoutId: number;
    return (...args: any[]) => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        func(...args);
      }, delay);
    };
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const term = event.target.value;
    setSearchTerm(term);
    debouncedSearch(term);
  };

  const handleResetSearch = () => {
    setSearchTerm('');
    debouncedSearch('');
  };

  const debouncedSearch = debounce((term: string) => {
    onSearch(term);
  }, 300);

  return (
    <div className='relative'>
      <input
        type='text'
        placeholder={placeholder}
        className='block w-full border border-gray-300 rounded-md py-2 pl-10 pr-4 focus:outline-none focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 transition duration-200 placeholder:text-gray-400'
        value={searchTerm}
        onChange={handleInputChange}
      />
      {searchTerm && (
        <button
          type='button'
          className='absolute inset-y-0 right-0 pr-3 flex items-center justify-center text-gray-400 hover:text-gray-600 focus:outline-none'
          onClick={handleResetSearch}
        >
          <XCircleIcon className='h-5 w-5' />
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