import Footer from '../Component/Footer/Footer';
import ScrollButton from '../Component/ScrollButton/ScrollButton';
import VideoPlayer from '../Component/VideoPlayer/VideoPlayer';
import ValuesCommunityComponent from '../ValuesCommunity/ValuesCommunityComponent';

const Home = () => {
  return (
    <>
      <div className="relative">
        <VideoPlayer />
        <ValuesCommunityComponent />
        <div className="scroll-button z-50 sticky border-3 border-red-800 h-8 w-8 left-1/2 -translate-x-1/2 bottom-12">
          <ScrollButton />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
