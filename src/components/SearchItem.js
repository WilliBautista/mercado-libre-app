import React from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import { Link } from 'react-router-dom';

export const SearchItem = ({ items, className }) => {
  return (
    <>
      {
        items.map((item) => (
          <li key={item.id} className={`${className}__item item animate__animated animate__fadeIn`}>
            <Link
              aria-label={ item.title }
              className="row center-xs"
              to={ `/items/${ item.id }` }
            >
              <div className="item__image">
                <LazyLoadImage
                  key={ item.id }
                  alt={ item.title }
                  src={ item.thumbnail }
                  width="180"
                  height="180"
                  effect="blur"
                />
              </div>
              <div className="item__description col-xs-12 col-sm">
                <div className={`price ${ item.free_shipping ? 'free-shipping' : '' }`}>
                  {
                    new Intl.NumberFormat(`es-AR`, {
                      style: 'currency',
                      currency: item.price.currency,
                      maximumSignificantDigits: 1
                    }).format(item.price.amount)
                  }
                </div>
                <div className="location">{ item.state_name }</div>
                <h2 className="title">{ item.title }</h2>
              </div>
            </Link>
          </li>
        ))
      }
    </>
  );
};
