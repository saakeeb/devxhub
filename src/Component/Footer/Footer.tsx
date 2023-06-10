import { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import FooterElement from './FooterElement';

const Footer = () => {
  const waveRef1 = useRef(null);
  const waveRef2 = useRef(null);
  const waveRef3 = useRef(null);
  const waveRef4 = useRef(null);

  useLayoutEffect(() => {
    const tl = gsap.timeline({ repeat: -1, repeatDelay: 0 });
    tl.to(waveRef1.current, { x: 85, duration: 5, ease: 'power1.inOut' });
  }, []);
  useLayoutEffect(() => {
    const tl = gsap.timeline({ repeat: -1, repeatDelay: 0.1 });
    tl.to(waveRef2.current, { x: 85, duration: 5, ease: 'power1.inOut' });
  }, []);
  useLayoutEffect(() => {
    const tl = gsap.timeline({ repeat: -1, repeatDelay: 0.2 });
    tl.to(waveRef3.current, { x: 85, duration: 5, ease: 'power1.inOut' });
  }, []);
  useLayoutEffect(() => {
    const tl = gsap.timeline({ repeat: -1, repeatDelay: 0.3 });
    tl.to(waveRef4.current, { x: 85, duration: 6, ease: 'power1.inOut' });
  }, []);

  return (
    <>
      <div className="relative z-40 overflow-hidden">
        <div className="animation">
          <svg
            className="waves lg:h-32 h-10 w-screen"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            viewBox="0 24 150 28"
            preserveAspectRatio="none"
            shapeRendering="auto"
          >
            <defs>
              <path
                id="gentle-wave"
                d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
              ></path>
            </defs>
            <g className="parallax">
              <use xlinkHref="#gentle-wave" x="48" y="0" fill="rgb(244 161 38 / 80%)" ref={waveRef1} />
              <use xlinkHref="#gentle-wave" x="48" y="3" fill="rgb(244 161 38 / 50%)" ref={waveRef2} />
              <use xlinkHref="#gentle-wave" x="48" y="5" fill="rgb(244 161 38 / 30%)" ref={waveRef3} />
              <use xlinkHref="#gentle-wave" x="48" y="7" fill="#fff" ref={waveRef4} />
            </g>
          </svg>
        </div>
        <div className="footer lg:px-5 px-4 bg-white">
          <FooterElement />
        </div>
      </div>
    </>
  );
};

export default Footer;
