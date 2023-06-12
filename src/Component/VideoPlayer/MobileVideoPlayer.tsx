import React, { useRef, useEffect, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import ipadVideo from '../../assets/Videos/ipad.mp4';

gsap.registerPlugin(ScrollTrigger);

const MobileVideoPlayer: React.FC = () => {
  // make references
  const mobVideoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const video = mobVideoRef.current;
    const container = containerRef.current;

    const src = video?.currentSrc || video?.src;

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
        onUpdate: (self) => console.log('Update', self.progress.toFixed(3)),
        onToggle: (self) => console.log(' Toggle', self.isActive),
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
              currentTime: 100
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
    const video = mobVideoRef.current;

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
    <video // video for mobile view in the bg
      ref={mobVideoRef}
      src={ipadVideo}
      muted
      loop
      playsInline // Added playsInline for Safari compatibility
      className="object-fill fixed h-screen w-full z-10 top-0 right-0 bottom-0 left-0 block md:hidden"
    />
  );
};

export default MobileVideoPlayer;
