import React, { useEffect } from 'react'
import PropTypes from 'prop-types';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { SimpleSlider } from "./SimpleSlider";

import "../../node_modules/slick-carousel/slick/slick.css";
import "../../node_modules/slick-carousel/slick/slick-theme.css";

const newlineText = (text) => {
  return text.split("\n").map((str, ind) => (
    <p key={`p${ind}`}>
      {str}
      <br />
    </p>
  ));
}

export const ProductDetails = ({ item }) => {
  const { pictures } = item;
  const imageComponents = [];
  const options = {
    fade: true,
    arrows: false,
    className: "product-details__slider",
  };

  useEffect(() => window.scrollTo(0, 0), []);

  for (let i = 0; i < pictures.length; i++) {
    const image = pictures[i];
    const width = image.size.split("x")[0];
    const height = image.size.split("x")[1];

    imageComponents.push(
      <figure key={image.id} >
        <LazyLoadImage
          src={image.secure_url}
          width={width}
          height={height}
        />
      </figure>
    );
  }

  return (
    <div className="product-detail main__wrapper row center-sm col-xs-11 col-sm-10 animate__animated animate__fadeIn">
      <div className="product-detail__top row">
        <div className="product-detail__images col-xs-12 col-md-9">
          <SimpleSlider elements={imageComponents} slickOptions={options} />
        </div>
        <aside className="product-detail__main-data col-xs-12 col-md-3">
          <div className="product-detail__sold">
            {item.condition === "new" && <span>Nuevo - </span>}
            {item.sold_quantity} vendidos
          </div>
          <h1 className="product-detail__title">{item.title}</h1>
          <div className="product-detail__price">
            {new Intl.NumberFormat(`es-AR`, {
              style: "currency",
              currency: item.price.currency,
              maximumSignificantDigits: 1,
            }).format(item.price.amount)}
          </div>
          <a
            href={item.permalink}
            rel="noreferrer"
            target="_blank"
            className="btn btn-primary"
          >
            Comprar
          </a>
        </aside>
      </div>
      <div className="product-detail__bottom row start-sm">
        <h2>Descripción del producto</h2>
        <div className="product-detail__description col-xs-12 col-md-9 col-gutter-lr">
          {newlineText(item.description)}
        </div>
      </div>
    </div>
  );
}

ProductDetails.propTypes = {
  item: PropTypes.object.isRequired
}
