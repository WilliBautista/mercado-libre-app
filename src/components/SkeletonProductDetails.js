import React from "react";
import ContentLoader from "react-content-loader";

export const SkeletonProductDetails = (props) => {
  return (
    <div className="product-detail main__wrapper row center-sm col-xs-11 col-sm-10">
      <ContentLoader
        speed={2}
        width={900}
        height={750}
        viewBox="0 0 1000 800"
        backgroundColor="#f3f3f3"
        foregroundColor="#dedede"
        {...props}
      >
        <rect x="0" y="0" rx="4" ry="4" width="680" height="520" />
        <rect x="740" y="0" rx="0" ry="0" width="140" height="12" />
        <rect x="740" y="35" rx="0" ry="0" width="200" height="24" />
        <rect x="740" y="70" rx="0" ry="0" width="210" height="24" />
        <rect x="740" y="105" rx="0" ry="0" width="190" height="24" />
        <rect x="740" y="165" rx="0" ry="0" width="200" height="40" />
        <rect x="740" y="245" rx="0" ry="0" width="240" height="40" />
        <rect x="0" y="570" rx="0" ry="0" width="300" height="30" />
        <rect x="0" y="650" rx="0" ry="0" width="680" height="16" />
        <rect x="0" y="680" rx="0" ry="0" width="630" height="16" />
        <rect x="0" y="710" rx="0" ry="0" width="640" height="16" />
        <rect x="0" y="740" rx="0" ry="0" width="660" height="16" />
      </ContentLoader>
    </div>
  );
};
