import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    return (
        <nav className="bg-gradient-to-r from-sea-pink-400 to-grandis-200 p-6 flex justify-between items-center">
            <div className="flex items-center">
                <Link href="/">
                    <Image
                        src="/logoAurores.png"
                        width={75}
                        height={50}
                        alt="Logo de Aurores"
                    />
                </Link>
                <div className='flex justify-center items-center ml-32 text-[20px] gap-14'>
                    <div className="relative">
                        <Link href="#" onClick={toggleDropdown}>El nostre espai</Link>
                        {isDropdownOpen && (
                            <div className="absolute left-0 mt-2 w-36 bg-white  shadow-lg rounded-md">
                                <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                                    <Link href="/qui-som" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:font-bold" role="menuitem">Qui som</Link>
                                    <Link href="/on-estem" className="block px-4 py-2 text-sm  text-gray-700  hover:bg-gray-100 hover:font-bold " role="menuitem">On estem</Link>
                                    <Link href="/monitors" className="block px-4 py-2 text-sm  text-gray-700  hover:bg-gray-100 hover:font-bold " role="menuitem">Monitors</Link>
                                </div>
                            </div>
                        )}
                    </div>
                    <Link href="/activitats">Activitats</Link>
                    <Link href="/calendari">Calendari</Link>
                    <Link href="/preus">Preus</Link>
                </div>
            </div>
            <div className="flex gap-4 mr-8">
                <div className="flex gap-4">
                    <Link href="/login" className="text-black">Iniciar sessió</Link>
                    <div className="border-l h-6 border-black"></div>
                    <Link href="/register" className="text-black">Registra't</Link>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
