import React from 'react'
import { useFetch } from '../hooks/useFetch';
import { Header } from './Header';
import { ProductDetails } from './ProductDetails';
import { SkeletonProductDetails } from './SkeletonProductDetails';
import { SkeletonProductDetailsMobile } from './SkeletonProductDetailsMobile';

export const ProductScreen = ({ match }) => {
  const isMobile = window.innerWidth <= 655 ? true : false;
  const { id } = match.params;
  const { data, loading } = useFetch(`api/items/${id}`, id);

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
