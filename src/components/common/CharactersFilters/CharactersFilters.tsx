import Select from 'react-select';

import { SearchBar } from '../../inputs/SearchBar/SearchBar';
import { GENDERS } from '../../../enums/enums';

export const CharactersFilters = ({ handleSelectOption, handleSearch }: PropTypes) => {
  const options = [
    { value: GENDERS.MALE, label: 'Male' },
    { value: GENDERS.FEMALE, label: 'Female' },
  ];

  return (
    <div className='w-full flex flex-wrap justify-center gap-6 py-5 m-auto'>
      <SearchBar onSearch={handleSearch} placeholder='Search by name' />
      <Select
        placeholder='Filter by gender'
        onChange={handleSelectOption}
        options={options}
        isClearable
      />
    </div>
  );
};

type PropTypes = {
  handleSelectOption: (value: string) => void;
  handleSearch: (term: string) => void;
};
