import React from 'react'
import PropTypes from 'prop-types';
import { SkeletonSearchItem } from "./SkeletonSearchItem";
import { SearchItem } from './SearchItem';
import { SkeletonSearchItemMobile } from './SkeletonSearchItemMobile';

export const SearchGrid = ({
  loading,
  items,
  className,
  classBlock,
  classModifier,
}) => {
  const isMobile = window.innerWidth <= 655 ? true : false;
  classModifier = !!classModifier
    ?  `${ classBlock }--${ classModifier }`
    : '';

  return (
    <div className={`${classBlock} ${ classModifier } ${className}`}>
      <ol className={`${classBlock}__list`}>
        {
          items.length < 1 && <li>No se encontraron resultados</li>
        }
        {
          loading
            ? isMobile
              ? <SkeletonSearchItemMobile className={`${classBlock}`} speed={1.5} />
              : <SkeletonSearchItem className={`${classBlock}`} speed={1.5} />
            : <SearchItem className={classBlock} items={items} />
        }
      </ol>
    </div>
  );
};

SearchGrid.propTypes = {
  loading: PropTypes.bool.isRequired,
  data: PropTypes.object,
  classBlock: PropTypes.string,
  classModifier: PropTypes.string
}

