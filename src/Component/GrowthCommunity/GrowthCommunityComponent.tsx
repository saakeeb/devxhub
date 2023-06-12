import React from 'react';
const GrowthCommunity = React.lazy(() => import('./GrowthCommunity'));

const GrowthCommunityComponent = () => {
  return (
    <>
      <div className="relative z-20 flex items-center justify-center w-full h-screen growth-community">
        <GrowthCommunity />
      </div>
    </>
  );
};

export default GrowthCommunityComponent;
