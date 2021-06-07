import React from 'react'
import { Link } from 'react-router-dom'
import { Header } from './Header'

export const Error404Screen = () => {

  return (
    <div>
      <Header />
      <main className="main container row center-xs error-page error-page--404" id="main">
        <div className="col-xs-11 col-sm-10">
          <h1>Error 404</h1>
          <h2>Página no encontrada</h2>
          <Link className="btn btn-primary" to="/">
            Volver al inicio
          </Link>
        </div>
      </main>
    </div>
  );
};
