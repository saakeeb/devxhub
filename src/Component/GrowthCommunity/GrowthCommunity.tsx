import { useLayoutEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import community from '../../assets/Webp Images/middle-right-section.webp';

const GrowthCommunity = () => {
  const [animationInBrief, setAnimationInBrief] = useState(false);
  const [animationInCommunity, setAnimationInCommunity] = useState(false);
  const briefRef = useRef(null);
  const communityRef = useRef(null);

  useLayoutEffect(() => {
    const briefElement = briefRef.current;

    if (animationInBrief) {
      gsap.registerPlugin(ScrollTrigger);
      gsap.fromTo(
        briefElement,
        { y: '100%', scale: 0.3 },
        {
          y: 0,
          scale: 1, // size will increase
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.social-media-container',
            scrub: true
          }
        }
      );
    }
    setAnimationInBrief(true);
  }, [animationInBrief]);

  useLayoutEffect(() => {
    const communityElement = communityRef.current;
    if (!animationInCommunity) {
      gsap.registerPlugin(ScrollTrigger);
      gsap.fromTo(
        communityElement,
        { x: '300%', scale: 0.4 },
        {
          x: 0,
          scale: 1, // size will increase
          duration: 1,
          ease: 'power4.out',
          scrollTrigger: {
            trigger: '.growth',
            scrub: true,
            start: 'top bottom' // Trigger when element reaches the bottom of the viewport
          }
        }
      );
      setAnimationInCommunity(true);
    }
  }, [animationInCommunity]);

  return (
    <>
      <div className="growth flex justify-center flex-col items-center lg:flex-row gap-8 max-w-5xl w-full mx-auto px-4">
        <div className="brief max-w-[512px] w-full text-center lg:text-left" ref={briefRef}>
          <div className="max-w-[200px] w-full lg:ml-0 mr-auto ml-auto">
            <h3 className="text-[#e4801d] text-xl">Growth in Community</h3>
            <div className="border-[#e4801d] border-t-2 mt-2"></div>
          </div>
          <p className="text-white text-sm mt-6">
            Finding happiness within a community is a journey of discovery, connection, and mutual growth. As we share
            experiences, support each other's goals, and navigate life's challenges together, we encounter a unique kind
            of happiness. It's a joy that springs from belonging, from knowing that we are seen, valued, and cherished.
            Through these rich, communal experiences, we not only find happiness, but also a sense of purpose and
            fulfillment.
          </p>
        </div>
        <div className="community max-w-[512px] w-full m-auto" ref={communityRef}>
          <img src={community} alt="Community Growth" />
        </div>
      </div>
    </>
  );
};

export default GrowthCommunity;
