// pages/login.js
import Head from 'next/head';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Login = () => {
    const [userData, setUserData] = useState({
        name: '',
        email: '',
        password: '',
    });

    const handleChange = (e) => {
        setUserData({ ...userData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        // Aquí puedes añadir la lógica para enviar los datos al servidor o a tu API de autenticación
    };

    return (
        <div className='bg-maize-100 min-h-screen flex flex-col'>
            <Head>
                <title>Registro - Aurores</title>
                <meta name="description" content="Regístrate para comenzar tu camino hacia el bienestar." />
            </Head>

            <div className='flex flex-grow '>

                <div className='flex flex-col text-white bg-gradient-to-b from-sea-pink-400 to-grandis-200 w-1/2 justify-center items-start'>
                    <div>
                    <Link href="/">
                            <Image
                                src="/house-solid.svg"
                                width={35}
                                height={25}
                                alt="Arrow left"
                                className="absolute top-0 left-0 mt-4 ml-4" // Ajusta el margen para la posición deseada
                            />
                        </Link>
                        <span className="absolute top-2 left-16 mt-4 text-white">Inici</span>
                    </div>
                    <h1 className='ml-20 text-[40px] font-bold'>AURORES</h1>
                    <h2 className='ml-20 text-[20px]'>El lloc on sanar l'anima</h2>
                </div>


                <div className='w-1/2 flex justify-center flex-col'>
                    <div>
                        <h1 className='ml-20 text-[40px] font-bold mt-10'>Inici de Sessió</h1>
                        <h2 className='ml-20 text-[20px]'>Benvingut de nou!</h2>
                    </div>

                    <div className='flex justify-center'>
                        <form className='flex flex-col mb-10 mt-10' onSubmit={handleSubmit}>


                            <label htmlFor="username"></label>
                            <input
                                className='mb-6 mt-2 rounded-full p-4 w-[400px]'
                                type="text"
                                id="username"
                                name="username"
                                value={userData.username}
                                onChange={handleChange}
                                required
                                placeholder="Usuari"
                            />



                            <label htmlFor="password"></label>
                            <input
                                className='mb-6 mt-2 rounded-full p-4'
                                type="password"
                                id="password"
                                name="password"
                                value={userData.password}
                                onChange={handleChange}
                                required
                                placeholder="Contrasenya"
                            />
                            <div className='flex flex-col gap-4'>
                                <button className=' bg-gradient-to-r from-sea-pink-400 to-grandis-200 rounded-full text-white p-4 w-[400px]' type="submit">Iniciar</button>
                                <button className='bg-gray-800 rounded-full text-white p-4' type="submit">Registra't</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;