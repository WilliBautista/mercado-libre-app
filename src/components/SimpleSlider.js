import React from "react";
import Slider from "react-slick";
import PropTypes from 'prop-types';

export const SimpleSlider = ({elements, slickOptions = {}}) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    ...slickOptions,
  };

  return (
    <>
      <Slider {...settings}>
        {elements.map(el => el)}
      </Slider>
    </>
  );
}

SimpleSlider.propTypes = {
  elements: PropTypes.array.isRequired,
  slickOptions: PropTypes.object
}
