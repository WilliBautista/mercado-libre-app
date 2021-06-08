import React from 'react'
import { AppRouter } from './routes/AppRouter';
import BackToTop from 'react-back-to-top-button';
import { RiArrowUpSLine } from "react-icons/ri";

export const MercadoLibreApp = () => {

  return (
    <>
      <AppRouter />
      <BackToTop
        showOnScrollDown
        showAt={200}
        speed={1500}
        easing="easeInOutQuint"
      >
        <RiArrowUpSLine color="#333333" size="32px" />
      </BackToTop>
    </>
  );
};
