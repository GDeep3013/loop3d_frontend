import React, { useEffect, useState } from "react";
import { Link , useLocation } from "react-router-dom";
import Container from "../common/Container";

const Header: React.FC = () => {

  const location  = useLocation();

  const [isScrolled, setIsScrolled] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [topbarVisible, setTopbarVisible] = useState(true);

  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Determine if the user is scrolling up or down
      if (currentScrollY > 50) {
        setIsScrolled(true);
        if (currentScrollY > lastScrollY) {
          setTopbarVisible(false); // Scrolling down
        } else {
          setTopbarVisible(true); // Scrolling up
        }
      } else {
        setIsScrolled(false);
        setTopbarVisible(true); // Always show topbar when near the top
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const bgColor = (location.pathname === '/start-survey' || location.pathname === '/terms-of-service' || location.pathname === '/lead-dashboard' || location.pathname === '/feedback-survey')
  ? 'bg-custom-color'
  : 'bg-[transparent]';

  return (
    <div>
      {/* Topbar */}
      <div className="bg-[#7ABCDB]">
        <Container className="">
          <div
            className={` flex justify-between items-center py-4 transition-transform duration-300 ease-in-out ${
              topbarVisible ? "translate-y-0" : "-translate-y-full"
            }`}
          >
            <div className="flex space-x-4">
              {/* Social Icons (replace with your SVGs or FontAwesome Icons) */}
              <Link to="#">
                <img
                  className="w-6 h-6"
                  src="/images/header/facebook_icon.svg"
                  alt="Logo"
                />
              </Link>
              <Link to="#">
                <img
                  className="w-6 h-6"
                  src="/images/header/instagram_icon.svg"
                  alt="Logo"
                />
              </Link>
            </div>
            <div className="flex gap-3 items-center">
              <Link to="#">
                <img
                  className="w-5 h-5"
                  src="/images/header/message_icon.svg"
                  alt="Logo"
                />
              </Link>
              <p className="text-white text-[16px] font-poppins ">
                {" "}
                Get in touch with us
              </p>
            </div>
          </div>
        </Container>
      </div>
      {/* Header */}
      <div
        className={`absolute left-0 right-0 transition-all duration-300 ease-in-out z-10 ${
          isScrolled
            ? "bg-white text-gray-900 shadow-md !fixed w-full top-0"
            : ` ${bgColor} text-white`
        }`}
      >
        <Container className="">
          <div className="flex justify-between items-center py-[12px]">
              {/* Logo */}
              {!isScrolled ?
              <Link to="/home">
              <img
                className="h-[50px] md:h-[77px]"
                src='/images/header/logoheader.svg'
                alt="Logo"
              />
              </Link>
              :
              <Link to="/home">
              <img
                className="h-[36px]"
                src='/images/header/loop3d-logo.webp'
                alt="Logo"
              />
              </Link>
}
            {/* Nav links */}
            <nav
              className={`${
                menuOpen ? "block" : "hidden"
              } lg:flex space-x-8 absolute lg:relative top-full lg:top-0 left-0 w-full lg:w-auto bg-white lg:bg-transparent`}
            >
              <Link
                to="/home"
                className={`relative block-inline mx-4 py-2 lg:py-0 text-[16px] font-poppins text-black lg:text-white after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-full after:h-[1px] after:bg-[#7ABCDB] after:scale-x-0 after:origin-center after:transition-transform after:duration-300 after:ease-[cubic-bezier(.58,.3,.005,1)] hover:text-[#7ABCDB] hover:after:scale-x-100 ${isScrolled ? '!text-custom-color' : 'text-white' } `}
              >
                Home
              </Link>
              <Link
                to="/about"
                className={`relative block-inline mx-4 py-2 lg:py-0 text-[16px] font-poppins text-black lg:text-white after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-full after:h-[1px] after:bg-[#7ABCDB] after:scale-x-0 after:origin-center after:transition-transform after:duration-300 after:ease-[cubic-bezier(.58,.3,.005,1)] hover:text-[#7ABCDB] hover:after:scale-x-100 ${isScrolled ? '!text-custom-color' : 'text-white' } `}
              >
                About Us
              </Link>
              <Link
                to="/services"
                className={`relative block-inline mx-4 py-2 lg:py-0 text-[16px] font-poppins text-black lg:text-white after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-full after:h-[1px] after:bg-[#7ABCDB] after:scale-x-0 after:origin-center after:transition-transform after:duration-300 after:ease-[cubic-bezier(.58,.3,.005,1)] hover:text-[#7ABCDB] hover:after:scale-x-100 ${isScrolled ? '!text-custom-color' : 'text-white'} `}
              >
                Services
              </Link>
              <Link
                to="/contact"
                className={`relative block-inline mx-4 py-2 lg:py-0 text-[16px] font-poppins text-black lg:text-white after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-full after:h-[1px] after:bg-[#7ABCDB] after:scale-x-0 after:origin-center after:transition-transform after:duration-300 after:ease-[cubic-bezier(.58,.3,.005,1)] hover:text-[#7ABCDB] hover:after:scale-x-100 ${isScrolled ? '!text-custom-color' : 'text-white'} `}
              >
                Contact Us
              </Link>
            </nav>

            <div className="flex gap-4">
              {/* Mobile menu button */}
              <button
                className="flex justify-center items-center w-[39px] h-[39px] lg:hidden text-white focus:outline-none bg-[#7ABCDB] p-1 rounded-[3px]"
                onClick={toggleMenu}
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {menuOpen ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  )}
                </svg>
              </button>
              {/* Request a Demo button hidden on mobile */}
              <div className="hidden sm:block">
                <button className="bg-[#7abcdb] hover:bg-[#174a6d] text-white min-w-[250px] min-h-[56px] leading-[56px] inline-block text-center rounded-[50px] font-poppins">
                  Request a Demo
                </button>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Header;