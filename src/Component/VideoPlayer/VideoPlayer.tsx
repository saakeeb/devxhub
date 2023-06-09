import React, { useRef, useLayoutEffect, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import bannerVideo from '../../assets/Videos/Animation_Video_Desktop_Device.mp4';
import MorphingTextComponent from '../MorphingText/MorphingTextComponent';
import GrowthCommunityComponent from '../GrowthCommunity/GrowthCommunityComponent';
import IphoneBG from '../../assets/Webp Images/iPhone.webp';
import monstera from '../../assets/Webp Images/monstera-small.webp';

gsap.registerPlugin(ScrollTrigger);

const VideoPlayer1: React.FC = () => {
  // make references
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const video = videoRef.current;
    const container = containerRef.current;

    const src = video?.currentSrc || video?.src;
    console.log(video, src);

    const once = (el: HTMLElement, event: string, fn: (...args: []) => void, opts?: AddEventListenerOptions) => {
      const onceFn = (...args: []) => {
        el.removeEventListener(event, onceFn);
        fn.apply(this, args);
      };
      el.addEventListener(event, onceFn, opts);
      return onceFn;
    };

    once(document.documentElement, 'touchstart', function () {
      video?.play();
      video?.pause();
    });

    gsap.registerPlugin(ScrollTrigger);

    const tl = gsap.timeline({
      defaults: { duration: 1 },
      scrollTrigger: {
        trigger: container,
        start: 'top top',
        end: 'bottom bottom',
        scrub: true
      }
    });

    if (video) {
      once(video, 'loadedmetadata', () => {
        if (video) {
          tl.fromTo(
            video,
            {
              currentTime: 0
            },
            {
              currentTime: 10
            }
          );
        }
      });
    }

    /* When first coded, the Blobbing was important to ensure the browser wasn't dropping previously played segments, but it doesn't seem to be a problem now. Possibly based on memory availability? */
    setTimeout(function () {
      if (src) {
        fetch(src)
          .then((response) => response.blob())
          .then((response) => {
            const blobURL = URL.createObjectURL(response);

            const t = video?.currentTime ?? 0;
            once(document.documentElement, 'touchstart', function () {
              video?.play();
              video?.pause();
            });

            if (video) {
              video.setAttribute('src', blobURL);
              video.currentTime = t + 0.01;
            }
          });
      }
    }, 1000);
  }, []);

  useEffect(() => {
    const video = videoRef.current;

    const checkVideoEnd = () => {
      if (video && video.ended) {
        video.style.display = 'none'; // Hide the video when it ends
      }
    };

    video?.addEventListener('ended', checkVideoEnd);

    return () => {
      video?.removeEventListener('ended', checkVideoEnd);
    };
  }, []);

  return (
    <div className="relative">
      <section className="relative overflow-hidden">
        <video
          ref={videoRef}
          src={bannerVideo}
          muted
          loop
          className="object-fill fixed h-screen w-full z-10 top-0 right-0 bottom-0 left-0"
        />
        <img
          src={IphoneBG}
          alt=" Iphone Background"
          className="md:hidden block z-20 absolute top-0 right-0 bottom-0 left-0"
        />
        <img
          src={monstera}
          alt=" Iphone Background with leaf"
          className="md:hidden block z-30 absolute top-20 left-0 w-36"
        />

        <MorphingTextComponent />
        <div className="lg:h-screen lg:block hidden"></div>
        <GrowthCommunityComponent />
        <div className="lg:h-screen lg:block hidden"></div>
      </section>
    </div>
  );
};

export default VideoPlayer1;
