import Select, { StylesConfig } from 'react-select';

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
      styles={selectCustomStyles}
        placeholder='Filter by gender'
        onChange={handleSelectOption}
        options={options}
        isClearable
      />
    </div>
  );
};

const selectCustomStyles: StylesConfig = {
  control: (provided, state) => ({
    ...provided,
    border: state.isFocused ? '2px solid #7cd4cc' : '1px solid #d1d5db', // Customize border color
    boxShadow: state.isFocused ? '0 0 0 1px #7cd4cc' : 'none', // Customize ring color
  }),
  option: (provided, state) => ({
    ...provided,
    backgroundColor: state.isFocused ? '#7cd4cc' : 'transparent', // Customize option hover background color
    color: state.isFocused ? 'white' : 'black', // Customize option hover text color
    '&:hover': {
      backgroundColor: state.isFocused ? '#7cd4cc' : 'lightgray', // Reset default color on hover
    },
  }),
};

type PropTypes = {
  handleSelectOption: (value: string) => void;
  handleSearch: (term: string) => void;
};

