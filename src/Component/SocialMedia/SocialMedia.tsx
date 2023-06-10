import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';
import { useState, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Link } from 'react-router-dom';

const SocialMedia = () => {
  const [animationInitialized, setAnimationInitialized] = useState(false);

  useLayoutEffect(() => {
    if (!animationInitialized) {
      gsap.registerPlugin(ScrollTrigger);
      gsap.fromTo(
        '.social-media-icon',
        { x: -120 },
        {
          x: 60,
          duration: 1,
          ease: 'ease-in-out',
          scrollTrigger: {
            trigger: '.social-media-container',
            scrub: true
          }
        }
      );
      setAnimationInitialized(true);
    }
  }, [animationInitialized]);

  return (
    <>
      <div className="flex justify-center items-center gap-4 flex-col social-media-container">
        <div
          className="facebook border-2 border-white rounded-full social-media-icon"
          style={{ transitionDelay: '50ms' }}
        >
          <Link target="_blank" rel="noopener noreferrer" to="https://www.facebook.com/">
            <FaFacebookF className="text-white p-1 text-3xl" />
          </Link>
        </div>
        <div
          className="twitter border-2 border-white rounded-full social-media-icon"
          style={{ transitionDelay: '90ms' }}
        >
          <Link target="_blank" rel="noopener noreferrer" to="https://www.twitter.com/">
            <FaTwitter className="text-white p-1 text-3xl" />
          </Link>
        </div>
        <div
          className="linkedin border-2 border-white rounded-full social-media-icon"
          style={{ transitionDelay: '130ms' }}
        >
          <Link target="_blank" rel="noopener noreferrer" to="https://www.linkedin.com/">
            <FaLinkedinIn className="text-white p-1 text-3xl" />
          </Link>
        </div>
        <div
          className="instagram border-2 border-white rounded-full social-media-icon"
          style={{ transitionDelay: '170ms' }}
        >
          <Link target="_blank" rel="noopener noreferrer" to="https://www.instagram.com/">
            <FaInstagram className="text-white p-1 text-3xl" />
          </Link>
        </div>
      </div>
    </>
  );
};

export default SocialMedia;
