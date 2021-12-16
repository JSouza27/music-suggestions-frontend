import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { AiOutlineSearch } from 'react-icons/ai';
import { Input, SearchBtn, Bar, SearchInput } from './style';

function SearchBar({ getPlayList }) {
  const [location, setLocation] = useState('');

  return (
    <Bar>
      <SearchInput>
        <Input
          name="searchPlayList"
          onChange={ (e) => setLocation(e.target.value) }
          placeholder="Digite uma localidade"
        />
        <SearchBtn
          type="button"
          onClick={ async () => { await getPlayList(location); } }
        >
          <AiOutlineSearch />
        </SearchBtn>
      </SearchInput>
    </Bar>
  );
}

SearchBar.propTypes = {
  getPlayList: PropTypes.func.isRequired,
};

export default SearchBar;
