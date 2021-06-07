import React from 'react'
import PropTypes from 'prop-types';
import { RiArrowRightSLine } from "react-icons/ri";

export const Breadcrumbs = ({ breadcrumbs, loading }) => {

  return (
    <div className="breadcrumb col-xs-11 col-sm-10 col-no-gutter">
      <ul className="breadcrumb__list">
        {breadcrumbs.map((breadcrumb, index) => (
          <li key={breadcrumb.id} className="breadcrumb__item">
            {breadcrumb.name}
            {index !== breadcrumbs.length - 1 && (
              <RiArrowRightSLine color="#999999" size="20px" />
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

Breadcrumbs.propTypes = {
  breadcrumbs: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired
};
