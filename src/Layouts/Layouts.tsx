import { Outlet, Link } from 'react-router-dom';
import { RxHamburgerMenu } from 'react-icons/rx';
import logo from '../assets/SVG/logo.svg';
import { useEffect, useState } from 'react';

const Layouts = () => {
  const [showButton, setShowButton] = useState(false);
  // const [showSidebar, setShowSidebar] = useState(false);

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
    <>
      <div className="layout relative">
        <div className="navbar flex justify-between items-center py-6 px-4 lg:py-8 lg:px-16 fixed top-4 left-4 right-4 lg:left-8 lg:right-8 z-50">
          <div>
            <Link to="/" aria-label="Link to landing page">
              <img src={logo} alt="DEVxHUB logo" />
            </Link>
          </div>
          <div className="flex items-center gap-4 justify-center">
            <div className="items-center justify-center hidden lg:flex">
              <div className=" bg-[#FFECB3] text-center mr-4 rounded-full py-2">
                <Link
                  to="/community"
                  aria-label="Link to community page"
                  className="text-[#294617] text-xl font-[Neuton] font-bold py-2 px-8 rounded-full"
                >
                  Community
                </Link>
              </div>
              <div className=" bg-[#FFECB3] text-center mr-4 rounded-full py-2">
                <Link
                  to="/healing"
                  aria-label="Link to healing page"
                  className="text-[#294617] text-xl font-[Neuton] font-bold py-2 px-8 rounded-full"
                >
                  Healing
                </Link>
              </div>
              <div className=" bg-[#FFECB3] text-center mr-4 rounded-full py-2">
                <Link
                  to="/festival"
                  aria-label="Link to festival page"
                  className="text-[#294617] text-xl font-[Neuton] font-bold py-2 px-8 rounded-full"
                >
                  Festival
                </Link>
              </div>
            </div>
            <div className={`${showButton ? 'block' : 'hidden'} lg:block`}>
              <button onClick={() => console.log("Sidebar click")}>
                <RxHamburgerMenu className="text-3xl text-[#FFECB3]" />
              </button>
            </div>
          </div>
        </div>
        <Outlet />
      </div>
    </>
  );
};

export default Layouts;
