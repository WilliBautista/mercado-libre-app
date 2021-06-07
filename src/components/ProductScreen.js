import React, { useEffect } from 'react'
import { useFetch } from '../hooks/useFetch';
import { Header } from './Header';
import { ProductDetails } from './ProductDetails';
import { SkeletonProductDetails } from './SkeletonProductDetails';
import { SkeletonProductDetailsMobile } from './SkeletonProductDetailsMobile';

export const ProductScreen = ({ match, history }) => {
  const isMobile = window.innerWidth <= 655 ? true : false;
  const { id } = match.params;
  const { data, loading, error } = useFetch(`api/items/${id}`, id);

  useEffect(() => {
    if (error) history.push("/404");
  }, [error, history]);

  return (
    <>
      <Header />
      <main className="main container" id="main">
        <h1 className="visually-hidden">Detalle de producto</h1>
        {
          loading
            ? isMobile
              ? <SkeletonProductDetailsMobile />
              : <SkeletonProductDetails />
            : <ProductDetails item={data.item} />}
      </main>
    </>
  );
};
