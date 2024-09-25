import { useState, useEffect, useRef } from 'react';
import { Route, Routes, Link } from 'react-router-dom';
import Home from './Home';
import Gallery from './Gallery';
import Contact from './Contact';

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null); // Reference to the menu container

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // Close the menu if clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };

    // Add event listener to detect clicks outside
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      // Clean up the event listener
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [menuRef]);

  return (
    <div>
      {/* Navigation */}
      <nav className="bg-[#7ab24d]/90 text-white p-4 fixed w-full z-10">
        <ul className="flex justify-between items-center">
          {/* Logo and Contact Info */}
          <div className="flex items-center space-x-4">
            {/* Logo */}
            <img
              src="http://indubuildingblocks.com/wp-content/uploads/2020/11/Untitled-design-19.png"
              alt="logo"
              className="h-10"
            />
            {/* Email and Phone number (visible on all screen sizes) */}
            <a href="mailto:info@indubuildingblocks.com" className="hidden sm:block px-2">
              info@indubuildingblocks.com
            </a>
            <a href="tel:9441123957" className="hidden sm:block bg-blue-500 text-white py-2 px-4 rounded">
              9441123957
            </a>
          </div>

          {/* Navigation Links for larger screens */}
          <div className="hidden md:flex items-center space-x-4">
            <li>
              <Link to="/" className="px-4 hover:text-black transition duration-300">
                Home
              </Link>
            </li>
            <li>
              <Link to="/projects" className="px-4 hover:text-black transition duration-300">
                Projects
              </Link>
            </li>
            <li>
              <Link to="/contact" className="px-4 hover:text-black transition duration-300">
                Contact
              </Link>
            </li>
          </div>

          {/* Hamburger Menu for small screens */}
          <button className="md:hidden text-3xl focus:outline-none" onClick={toggleMenu}>
            &#x2022;&#x2022;&#x2022;
          </button>
        </ul>

        {/* Sliding Menu for small screens */}
        <div
          ref={menuRef} // Attach ref to the sliding menu
          className={`fixed top-0 left-0 h-full bg-[#7ab24d] w-64 p-5 transform transition-transform duration-300 ease-in-out ${
            menuOpen ? 'translate-x-0' : '-translate-x-full'
          } md:hidden`}
        >
          {/* Close Button */}
          <button className="text-white text-2xl mb-8 focus:outline-none" onClick={toggleMenu}>
            &#x2716;
          </button>

          <ul className="space-y-4">
            <li>
              <Link to="/" className="block text-white hover:text-black transition duration-300" onClick={toggleMenu}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/projects" className="block text-white hover:text-black transition duration-300" onClick={toggleMenu}>
                Projects
              </Link>
            </li>
            <li>
              <Link to="/contact" className="block text-white hover:text-black transition duration-300" onClick={toggleMenu}>
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </nav>

      {/* Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </div>
  );
};

export default Nav;
