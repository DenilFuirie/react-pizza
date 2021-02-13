import React from 'react';
import ContentLoader from "react-content-loader";

const LoadingBlock = () => {
    return (
        <ContentLoader
            speed={2}
            width={280}
            height={460}
            viewBox="0 0 280 460"
            backgroundColor="#f3f3f3"
            foregroundColor="#ecebeb"
        >
            <rect x="-1" y="267" rx="3" ry="3" width="280" height="26" />
            <rect x="-1" y="305" rx="6" ry="6" width="280" height="85" />
            <rect x="-1" y="417" rx="3" ry="3" width="96" height="31" />
            <rect x="142" y="409" rx="21" ry="21" width="135" height="46" />
            <circle cx="132" cy="142" r="115" />
        </ContentLoader>
    )
}

export default LoadingBlock