import ValuesCommunity from './ValuesCommunity';
import healingBg from '../assets/Webp Images/healing-site-event-bg.webp';

const ValuesCommunityComponent = () => {
  return (
    <>
      <div className="relative z-20 flex items-center justify-center w-full h-screen">
        <div className='relative z-40'>
          <ValuesCommunity />
        </div>
        <img src={healingBg} alt="Background Image" className="absolute h-[125vh] w-full object-cover top-0 bottom-0 left-0 right-0 z-30" />
      </div>
    </>
  );
};

export default ValuesCommunityComponent;
