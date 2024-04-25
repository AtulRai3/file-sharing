'use client'
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className="bg-gray-200">
            <div className="mx-auto flex h-16 max-w-screen-x2 items-center gap-8 px-4 sm:px-6 lg:px-8 border-b">
                <Link href="/">
                    <Image src='/logo2.png' width={150} height={100} alt='logo' />
                </Link>
                <div className="flex flex-1 items-center justify-end md:justify-between">
                    <button
                        onClick={toggleMenu}
                        className="md:hidden">
                        {isMenuOpen ? (
                            // Custom close icon when menu is open
                            <img src="image.png" alt="Close" className="h-6 w-6" />
                        ) : (
                            // Custom hamburger menu icon when menu is closed
                            <img src="menu.png" alt="Menu" className="h-6 w-6" />
                        )}
                    </button>
                    <nav aria-label="Global" className={`md:flex md:items-center md:w-auto ${isMenuOpen ? 'block' : 'hidden'}`}>
                        {isMenuOpen ? (
                            // Render custom menu items when menu is open
                            <ul className="space-y-1 block rounded-lg  bg-gray-200 ">
                                <li>
                                <a
                                        
                                        className="block rounded-lg px-4 py-14 text-sm font-medium text-white hover:bg-gray-200 hover:text-white dark:text-white dark:hover:bg-gray-800 dark:hover:text-white"
                                    >
                                        Home
                                    </a>
                                </li>

                                <li>
                                    <a
                                        href="/"
                                        className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-300 hover:text-gray-700 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-gray-200"
                                    >
                                        Home
                                    </a>
                                </li>

                                <li>
                                    <a
                                        href="upload"
                                        className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-300 hover:text-gray-700 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-gray-200"
                                    >
                                        Upload
                                    </a>
                                </li>

                                <li>
                                    <a
                                        href="about"
                                        className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-300 hover:text-gray-700 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-gray-200"
                                    >
                                        About Us
                                    </a>
                                </li>

                                <li>
                                    <a
                                        href="contact"
                                        className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-300 hover:text-gray-700 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-gray-200"
                                    >
                                        Contact
                                    </a>
                                </li>

                            </ul>
                        ) : (
                            // Render default menu items when menu is closed
                            <ul className="flex flex-col md:flex-row md:items-center md:gap-6 text-sm">
                                <li>
                                    <Link
                                        href="/"
                                        className="text-gray-500 transition hover:text-gray-700 text-lg hover:bg-gray-100">
                                        Home
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="/upload"
                                        className="text-gray-500 transition hover:text-gray-700 text-lg hover:bg-gray-100">
                                        Upload
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/about" className="text-gray-500 transition hover:text-gray-700 text-lg hover:bg-gray-100">
                                        About Us
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/contact" className="text-gray-500 transition hover:text-gray-700 text-lg hover:bg-gray-100">
                                        Contact Us
                                    </Link>
                                </li>
                            </ul>
                        )}
                    </nav>
                    {/* Other components */}
                </div>
            </div>
        </header>
    );
}

export default Header;
