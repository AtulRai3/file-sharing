// _components/Header.js

import Link from 'next/link';
import Image from 'next/image';

function Header() {
    return (
        <header className="bg-white">
            <div className="mx-auto flex h-16 max-w-screen-xl items-center gap-8 px-4 sm:px-6 lg:px-8 border-b">
                <Link href="/">

                    <Image src='/logo1.png' width={150} height={100} alt='logo' />

                </Link>

                <div className="flex flex-1 items-center justify-end md:justify-between">
                    <nav aria-label="Global" className="hidden md:block">
                        <ul className="flex items-center gap-6 text-sm">
                            <li>
                                <Link
                                    href="/"
                                    className="text-gray-500 transition hover:text-gray-500/75">   
                                    Home
                                </Link>
                                {/* //hover:bg-blue-100 */}
                            </li>
                            <li>
                                <Link
                                    href="/upload"
                                    className="text-gray-500 transition hover:text-gray-500/75">
                                    Upload
                                </Link>
                            </li>
                            <li>
                                <Link href="/about" className="text-gray-500 transition hover:text-gray-500/75">
                                    About Us
                                </Link>
                            </li>
                            <li>
                                <Link href="/contact" className="text-gray-500 transition hover:text-gray-500/75">
                                    Contact Us
                                </Link>
                            </li>
                        </ul>
                    </nav>
                    {/* Other components */}
                </div>
            </div>
        </header>
    );
}

export default Header;
