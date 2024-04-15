// components/Navbar.js
import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
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
                    <Link href="/about">El nostre espai</Link>
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

