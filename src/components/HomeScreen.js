import React from 'react'
import { Header } from './Header';

export const HomeScreen = () => {
  return (
    <>
      <Header />
      <main className="main container center-xs home-page">
        <h1>Mercado Libre - Search App</h1>
        <blockquote className="author">
          <p>Por William Bautista</p>
        </blockquote>
      </main>
    </>
  );
};
