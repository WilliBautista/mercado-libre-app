import React, { useEffect } from 'react'
import queryString from 'query-string';
import { Header } from './Header';
import { useFetch } from '../hooks/useFetch';
import { SearchGrid } from './SearchGrid';
import { Breadcrumbs } from './Breadcrumbs';

export const ResultsScreen = ({ location, history }) => {
  const { search } = queryString.parse(location.search);
  const { loading, data } = useFetch(`api/items?q=${search}`, search);
  const categories = data ? data.categories : false;

  useEffect(() => {
    if (!search) history.push("/");
  }, [search, history]);

  return (
    <>
      <Header />
      <main className="main container row center-xs animate__animated animate__fadeIn">
        <h1 className="visually-hidden">Página de resultados</h1>
        {
          categories.length
            ? <Breadcrumbs breadcrumbs={ categories } loading={ loading } />
            : false
        }
        <SearchGrid
          className="main__wrapper col-xs-11 col-sm-10"
          classBlock="search-items"
          items={data ? data.items : {}}
          loading={loading}
        />
      </main>
    </>
  );
};
