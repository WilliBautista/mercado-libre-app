import React, { useEffect } from "react";
import ContentLoader from "react-content-loader";

export const SkeletonProductDetailsMobile = (props) => {

  useEffect(() => window.scrollTo(0, 0), []);

  return (
    <div className="product-detail main__wrapper row center-sm col-xs-11 col-sm-10 skeleton">
      <ContentLoader
        speed={2}
        width={300}
        height={1100}
        viewBox="0 0 300 1100"
        backgroundColor="#f3f3f3"
        foregroundColor="#dedede"
        {...props}
      >
        <rect x="0" y="0" rx="4" ry="4" width="320" height="520" />
        <rect x="0" y="570" rx="0" ry="0" width="140" height="12" />
        <rect x="0" y="605" rx="0" ry="0" width="280" height="24" />
        <rect x="0" y="640" rx="0" ry="0" width="270" height="24" />
        <rect x="0" y="675" rx="0" ry="0" width="285" height="24" />
        <rect x="0" y="735" rx="0" ry="0" width="200" height="40" />
        <rect x="0" y="815" rx="0" ry="0" width="240" height="40" />
        <rect x="0" y="900" rx="0" ry="0" width="300" height="30" />
        <rect x="0" y="960" rx="0" ry="0" width="680" height="16" />
        <rect x="0" y="990" rx="0" ry="0" width="630" height="16" />
        <rect x="0" y="1020" rx="0" ry="0" width="640" height="16" />
        <rect x="0" y="1050" rx="0" ry="0" width="660" height="16" />
      </ContentLoader>
    </div>
  );
};
