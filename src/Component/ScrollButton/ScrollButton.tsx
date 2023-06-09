import { useLayoutEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import { AiOutlineArrowDown, AiOutlineArrowUp } from 'react-icons/ai';

gsap.registerPlugin(ScrollToPlugin);

const ScrollButton = () => {
  const scrollButtonRef = useRef<HTMLButtonElement | null>(null);
  const [pointer, setPointer] = useState<boolean>(false);

  useLayoutEffect(() => {
    const scrollButton = scrollButtonRef.current;

    const scrollTo = (position: number) => {
      gsap.to(window, { duration: 12, scrollTo: { y: position, autoKill: false }, ease: 'power1.inOut' });
    };

    const handleScroll = () => {
      const isAtTop = window.scrollY === 0;
      const isAtBottom = window.innerHeight + window.scrollY + 240 >= document.body.offsetHeight;

      if (scrollButton) {
        if (isAtTop) {
          scrollButton.removeEventListener('click', scrollToTop);
          scrollButton.addEventListener('click', scrollToBottom);
          setPointer(false);
        } else if (isAtBottom) {
          scrollButton.removeEventListener('click', scrollToBottom);
          scrollButton.addEventListener('click', scrollToTop);
          setPointer(true);
        }
      }
    };

    const scrollToBottom = () => {
      scrollTo(document.body.offsetHeight);
    };

    const scrollToTop = () => {
      scrollTo(0);
    };

    if (scrollButton) {
      scrollButton.addEventListener('click', scrollToBottom);
    }

    window.addEventListener('scroll', handleScroll);

    return () => {
      if (scrollButton) {
        scrollButton.removeEventListener('click', scrollToBottom);
        scrollButton.removeEventListener('click', scrollToTop);
      }
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useLayoutEffect(() => {
    const scrollButton = scrollButtonRef.current;

    if (scrollButton) {
      const tl = gsap.timeline({ repeat: -1, yoyo: true });

      tl.to(scrollButton, { y: '-=10', duration: 0.5 });
    }

    return () => {
      gsap.killTweensOf(scrollButton);
    };
  }, []);

  return (
    <>
      <button ref={scrollButtonRef}>
        {pointer ? (
          <div className="border-2 border-white rounded-full p-2">
            <AiOutlineArrowUp className="text-white text-3xl" />
          </div>
        ) : (
          <div className="border-2 border-white rounded-full p-2">
            <AiOutlineArrowDown className="text-white text-3xl" />
          </div>
        )}
      </button>
    </>
  );
};

export default ScrollButton;
