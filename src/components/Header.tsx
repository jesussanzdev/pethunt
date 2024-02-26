import React from 'react';
import logo from '../assets/logo.png';

const Header: React.FC = () => {
    return (
        <header>
            <nav className="bg-white px-4 lg:px-6 py-2.5 dark:bg-blue-800 pt-4 pb-4">
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                    <a href="/" className="flex items-center">
                        <img src={logo} className="mr-3 h-6 sm:h-9" alt="Salvapatas Logo" />
                        <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Salvapatas</span>
                    </a>
                    <div className="flex items-center lg:order-2">
                        <a href="/sobre-nosotros" className="text-gray-800 dark:text-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800">Sobre nosotros</a>
                    </div>
                </div>
            </nav>
        </header>
    );
}

export default Header;
