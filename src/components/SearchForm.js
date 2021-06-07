import React, { useEffect, useRef, useState } from 'react';
import queryString from 'query-string'
import { GrSearch } from "react-icons/gr";
import { useHistory } from 'react-router';
import { useForm } from '../hooks/useForm';

export const SearchForm = ({ className }) => {
  const history = useHistory();
  const { location } = history;
  const { search } = queryString.parse(location.search);
  const [ status, setStatus ] = useState('');
  const [ values, handleChange ] = useForm({ searchWord: !!search ? search : '' });
  const { searchWord } = values;
  const searchInput = useRef(null);

  useEffect(() => {
    if (status.trim().length > 0) history.push(`/items?search=${status}`);
  }, [history, status]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (searchWord.trim().length < 1) {
      searchInput.current.select();
      return;
    }
    setStatus(searchWord);
  };

  return (
    <form className={`form-search ${className}`} onSubmit={handleSubmit}>
      <input
        autoComplete="off"
        className="form-search__text"
        name="searchWord"
        onChange={handleChange}
        placeholder="Nunca dejes de buscar"
        ref={searchInput}
        type="text"
        value={searchWord}
      />
      <button
        title="Buscar"
        className="btn btn-icon form-search__submit"
        type="submit"
      >
        <GrSearch color="#333333" size="16px" />
      </button>
    </form>
  );
};
