import React from "react";
import ContentLoader from "react-content-loader";

export const SkeletonSearchItemMobile = (props) => {
  const items = [1, 2, 3, 4];
  return items.map((e, i) => (
    <li key={i} className={`${props.className}__item item results-mobile`}>
      <ContentLoader
        speed={2}
        width={300}
        height={370}
        viewBox="0 0 300 370"
        backgroundColor="#f3f3f3"
        foregroundColor="#dedede"
        {...props}
      >

        <rect className="rect-img" x="0" y="0" rx="4" ry="4" width="320" height="180" />
        <rect className="rect-price" x="0" y="205" rx="0" ry="0" width="120" height="26" />
        <rect className="rect-location" x="0" y="250" rx="0" ry="0" width="100" height="16" />
        <rect className="rect-title" x="0" y="300" rx="0" ry="0" width="245" height="18" />
        <rect className="rect-title" x="0" y="325" rx="0" ry="0" width="249" height="18" />
        <circle className="rect-shipping" cx="150" cy="217" r="13" />
      </ContentLoader>
    </li>
  ));
};
