import React from 'react';
import footer from "../assets/footer1.jpg"; // Corrected the import

const Footer = () => {
    return (
        <div>
            <footer className="text-black bg-gray-100 body-font m-14">
                <div className="container px-5 py-24 mx-auto flex justify-evenly w-full md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
                    <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
                        <a className="flex title-font font-medium items-center md:justify-start justify-center text-black">
                            <div className='w-9 h-9'>
                                <img src="src/assets/pipes-pipe-svgrepo-com.svg" alt="logo" />
                            </div>
                            <span className="ml-3 text-xl">Buildings</span>
                        </a>
                        <p className="mt-2 text-sm text-gray-500">Find Your Dream House</p>
                    </div>

                    <div className="flex-grow flex flex-wrap md:pl-20 md:mt-0 mt-10 md:text-left text-center">
                        <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                            <h2 className="title-font font-extrabold text-black tracking-wide text-lg mb-3">Quick links</h2>
                            <nav className="list-none mb-10">
                                <li><a className="text-black cursor-pointer font-bold hover:text-green-400">Home</a></li>
                                <li><a className="text-black cursor-pointer font-bold hover:text-green-400">Gallery</a></li>
                                <li><a className="text-black cursor-pointer font-bold hover:text-green-400">Contact us</a></li>
                            </nav>
                        </div>

                        <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                            <h2 className="title-font font-extrabold text-black tracking-wide text-lg mb-3">Follow us</h2>
                            <nav className="list-none mb-10">
                                <li><a className="text-black cursor-pointer font-bold hover:text-green-400">Instagram</a></li>
                                <li><a className="text-black cursor-pointer font-bold hover:text-green-400">Facebook</a></li>
                                <li><a className="text-black cursor-pointer font-bold hover:text-green-400">LinkedIn</a></li>
                                <li><a className="text-black cursor-pointer font-bold hover:text-green-400">X</a></li>
                            </nav>
                        </div>

                        <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                            <div className="w-full">
                                <h2 className="title-font font-extrabold text-black tracking-wide text-lg mb-3">Address</h2>
                                <p className="mt-1 text-gray-700">Hotel Kritunga street Opp to Sitara Hotel lane JN Road Rajahmundry</p>
                            </div>
                            <div className="w-full mt-4">
                                <h2 className="title-font font-semibold text-white tracking-widest text-xs">EMAIL</h2>
                                <a className="text-indigo-400 leading-relaxed cursor-pointer">******@gmail.com</a>
                                <h2 className="title-font font-semibold text-white tracking-widest text-xs mt-4">PHONE</h2>
                                <p className="leading-relaxed">+91 99999-99999</p>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
            <div
                style={{
                    backgroundImage: `url(${footer})`,
                    backgroundSize: 'contain',
                    backgroundPosition: 'center',
                    backgroundRepeat:'repeat-x',
                    height: '200px',
                    width: '100%',
                    marginBottom: '0px',
                }}
            >
                <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row justify-start">
                    <span className="flex sm:justify-start">
                        <a className="text-gray-700">
                            <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                            </svg>
                        </a>
                        <a className="ml-3 text-gray-700">
                            <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                            </svg>
                        </a>
                        <a className="ml-3 text-gray-700">
                            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                            </svg>
                        </a>
                        <a className="ml-3 text-gray-700">
                            <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0" className="w-5 h-5" viewBox="0 0 24 24">
                                <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
                                <circle cx="4" cy="4" r="2" stroke="none"></circle>
                            </svg>
                        </a>
                    </span>
                </div>
            </div>
        </div>
    );
};

export default Footer;
