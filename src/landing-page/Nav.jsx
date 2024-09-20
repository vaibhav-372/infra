import { Route, Routes, Link } from 'react-router-dom';
import Home from './Home';
import Gallery from './Gallery';
import Contact from './Contact';
const Nav = () => {
    return (
        <div>
          {/* Navigation */}
          <nav className="bg-gray-800/90 text-white p-4 fixed w-full z-10">
            <ul className="flex justify-between items-center">
              <div className="flex items-center">
                <img src="http://indubuildingblocks.com/wp-content/uploads/2020/11/Untitled-design-19.png" alt="logo" className="h-10" />
                <li><Link to="/" className="px-4 hover:text-orange-500 transition duration-300 ease-in-out">Home</Link></li>
                <li><Link to="/gallery" className="px-4 hover:text-orange-500 transition duration-300 ease-in-out">Gallery</Link></li>
                <li><Link to="/contact" className="px-4 hover:text-orange-500 transition duration-300 ease-in-out">Contact</Link></li>
              </div>
              <div className="flex items-center">
                <a href="mailto:info@indubuildingblocks.com" className="px-4">info@indubuildingblocks.com</a>
                <a href="tel:9441123957" className="bg-blue-500 text-white py-2 px-4 rounded">9441123957</a>
              </div>
            </ul>
          </nav>
    
          {/* Routes */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </div>
      );
}

export default Nav