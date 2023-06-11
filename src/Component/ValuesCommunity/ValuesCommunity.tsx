import { useRef, useState, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import gather from '../../assets/Webp Images/tree-plant.webp';
import gatherM from '../../assets/Webp Images/Tree_Planting_Festiva.webp';
import community from '../../assets/Webp Images/island_hills.webp';
import healing from '../../assets/Webp Images/track_at_hill.webp';
import ImageElement from './ImageElement';

const ValuesCommunity = () => {
  const briefRef = useRef(null);
  const communityRef = useRef(null);
  const [animationInCommunity, setAnimationInCommunity] = useState<boolean>(false);

  useLayoutEffect(() => {
    const communityElement = communityRef.current;

    if (animationInCommunity) {
      gsap.registerPlugin(ScrollTrigger);
      gsap.fromTo(
        communityElement,
        { scale: 0.3 },
        {
          scale: 1, // size increaze
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.community-media',
            scrub: true
          }
        }
      );
    }
    setAnimationInCommunity(true);
  }, [animationInCommunity]);

  return (
    <>
      <div className="values max-w-3xl w-full mx-auto px-4">
        <div className="brief max-w-xl w-full text-center m-auto" ref={briefRef}>
          <div className="max-w-[200px] w-full mx-auto">
            <h3 className="text-[#e4801d] text-3xl">Values</h3>
          </div>
          <p className="text-white text-sm mt-6 text-center">
            Our mission is to facilitate personal growth, helping individuals explore their full potential, and then,
            like a well-sprung coil, contract back into a better, more refined version of themselves.
          </p>
        </div>
        <div
          className="community w-full m-auto flex justify-center items-center lg:flex-row flex-col gap-2 lg:gap-4 mt-8"
          ref={communityRef}
        >
          <div className="gather gather-left relative lg:min-h-[390px] h-full max-w-[485px] w-full community-media mx-auto">
            <ImageElement imageDesk={gather} imageMob={gatherM} text="Gathering" />
          </div>
          <div className="gather gather-right flex justify-center items-center flex-col lg:gap-4 gap-2 lg:min-h-[390px] h-full max-w-[485px] w-full">
            <div className="top relative community-media">
              <ImageElement imageDesk={community} imageMob={community} text="Community" />
            </div>
            <div className="bottom relative community-media">
              <ImageElement imageDesk={healing} imageMob={healing} text="Healing" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ValuesCommunity;
