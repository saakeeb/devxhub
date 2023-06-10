import SocialMedia from '../SocialMedia/SocialMedia';
import MorphingText from './MorphingText';

const texts: string[] = ['Nature', 'Tranquility', 'Family', 'Harmony', 'Love', 'Home', 'Community', 'Health'];

const MorphingTextComponent = () => {
  return (
    <>
      <div className="relative z-40 h-screen w-full md:flex md:items-center md:justify-center md:flex-col overflow-hidden top-20 left-1/2 -translate-x-1/2">
        <div className="text-center relative max-w-lg w-full lg:-ml-48 mx-auto">
          <div className="relative">
            <p className="color-white text-2xl text-white">RETURN TO</p>
          </div>
          <div className="flex justify-center items-center relative lg:h-20 h-12">
            <MorphingText textList={texts} />
          </div>
          <div className="relative">
            <p className="color-white text-xl text-white">
              Welcome to a tranquil sanctuary, where healing dances with nature, community radiates warmth, and minds
              evolve endlessly.
            </p>
          </div>
        </div>
        <div className="social-media absolute top-1/2 -translate-y-1/2 right-8">
          <SocialMedia />
        </div>
      </div>
    </>
  );
};

export default MorphingTextComponent;
