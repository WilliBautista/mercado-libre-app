import React from "react";
import ContentLoader from "react-content-loader";

export const SkeletonSearchItem = (props) => {
  const items = [1, 2, 3, 4];
  return items.map((e, i) => (
    <li key={i} className={`${props.className}__item item`}>
      <ContentLoader
        speed={2}
        width={900}
        height={180}
        viewBox="0 0 1000 180"
        backgroundColor="#f3f3f3"
        foregroundColor="#dedede"
        {...props}
      >
        <rect x="0" y="0" rx="4" ry="4" width="180" height="180" />
        <rect x="210" y="16" rx="0" ry="0" width="100" height="20" />
        <circle cx="335" cy="26" r="10" />
        <rect x="850" y="32" rx="0" ry="0" width="100" height="12" />
        <rect x="210" y="70" rx="0" ry="0" width="450" height="16" />
        <rect x="210" y="95" rx="0" ry="0" width="450" height="16" />
      </ContentLoader>
    </li>
  ));
};
