import React from 'react'
import { Link } from 'react-router-dom';
import logo from '../assets/images/logo.png';
import { SearchForm } from './SearchForm';

export const Header = () => {
  return (
    <header className="header" id="header">
      <div className="header__container container row center-xs middle-xs">
        <Link
          title="Mercado Libre Colombia - Donde comprar y vender de todo"
          className="header__brand-logo col-xs-2 col-sm-2 col-md-1 col-gutter-lr col-no-gutter-right-lg"
          to="/"
        >
          <img src={logo} alt="Mercado libre"></img>
        </Link>
        <SearchForm className="col-xs-10 col-sm-8 col-md-9 col-gutter-lr col-no-gutter-left-lg" />
      </div>
    </header>
  );
};
