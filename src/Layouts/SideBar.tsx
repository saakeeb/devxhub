import { RxHamburgerMenu, RxCross2 } from 'react-icons/rx';
import gsap from 'gsap';
import { useEffect, useState, useRef, useLayoutEffect } from 'react';

const SideBar = () => {
  const [showButton, setShowButton] = useState(false);
  const sidebarRef = useRef<HTMLDivElement | null>(null);
  const [showSidebar, setShowSidebar] = useState(false);

  useLayoutEffect(() => {
    const sidebar = sidebarRef.current;

    const closeSidebar = () => {
      gsap.to(sidebar, { x: '300%', duration: 1 });
      setShowSidebar(false);
    };

    const handleResize = () => {
      closeSidebar();
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleClick = () => {
    const sidebar = sidebarRef.current;
    if (sidebar) {
      if (showSidebar) {
        gsap.to(sidebar, { x: '300%', duration: 1 });
        setShowSidebar(false);
      } else {
        gsap.to(sidebar, { x: 0, duration: 1 });
        setShowSidebar(true);
      }
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setShowButton(scrollPosition > 10);
    };
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <div className={`${showButton ? 'block' : 'hidden'} lg:block relative`}>
      <button onClick={handleClick}>
        <RxHamburgerMenu className="text-3xl text-[#FFECB3]" />
      </button>
      <div
        ref={sidebarRef}
        className={`bg-opacity-50 backdrop-filter backdrop-blur-lg bg-[#294617] p-4 translate-x-[350%] h-screen w-96 fixed top-0 bottom-0 right-0 z-50 rounded-tl-xl rounded-ee-xl`}
      >
        <div>
          <ul className="py-8 px-6 text-[#f3a026]">
            <li className="my-4 text-2xl">
              <a href="/" rel="noopener noreferrer">
                OR Festival
              </a>
            </li>
            <li className="my-4 text-2xl">
              <a href="/" rel="noopener noreferrer">
                Festival FAQ
              </a>
            </li>
            <li className="my-4 text-2xl">
              <a href="/" rel="noopener noreferrer">
                Freedom Healing Center
              </a>
            </li>
            <li className="my-4 text-2xl">
              <a href="/" rel="noopener noreferrer">
                Our Community
              </a>
            </li>
            <li className="my-4 text-2xl">
              <a href="/" rel="noopener noreferrer">
                Contact
              </a>
            </li>
          </ul>
        </div>
        <button onClick={handleClick} className="top-4 right-4 absolute">
          <RxCross2 className="text-3xl text-[#FFECB3]" />
        </button>
      </div>
    </div>
  );
};

export default SideBar;
