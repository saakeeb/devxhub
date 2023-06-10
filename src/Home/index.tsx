import {
  FooterComponent,
  ScrollButtonComponent,
  ValuesCommunityComponent,
  VideoPlayerComponent
} from '../Component/GlobalComponent';

const Home = () => {
  return (
    <>
      <div className="relative">
        <VideoPlayerComponent />
        <ValuesCommunityComponent />
        <div className="scroll-button z-50 sticky border-3 border-red-800 h-8 w-8 left-1/2 -translate-x-1/2 bottom-12">
          <ScrollButtonComponent />
        </div>
      </div>
      <FooterComponent />
    </>
  );
};

export default Home;
