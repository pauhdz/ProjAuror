// pages/register.js

import Head from 'next/head';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Register = () => {
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
            

            <div className='flex flex-grow'>
                <div className='flex flex-col text-white bg-gradient-to-b from-sea-pink-400 to-grandis-200 w-1/2 justify-center'>
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
                        <h1 className='ml-20 text-[40px] font-bold mt-10'>Benvingut</h1>
                        <h2 className='ml-20 text-[20px]'>Enregistra't i inicia</h2>
                    </div>

                    <div className='flex justify-center'>
                        <form className='flex flex-col mb-10 mt-10' onSubmit={handleSubmit}>
                            <label htmlFor="name"></label>
                            <input
                                className='mb-6 mt-2 rounded-full p-4 w-[400px]'
                                type="text"
                                id="name"
                                name="name"
                                value={userData.name}
                                onChange={handleChange}
                                required
                                placeholder="Nom"
                            />

                            <label htmlFor="surname"></label>
                            <input
                                className='mb-6 mt-2 rounded-full p-4'
                                type="text"
                                id="surname"
                                name="surname"
                                value={userData.surname}
                                onChange={handleChange}
                                required
                                placeholder="Cognom"
                            />

                            <label htmlFor="username"></label>
                            <input
                                className='mb-6 mt-2 rounded-full p-4'
                                type="text"
                                id="username"
                                name="username"
                                value={userData.username}
                                onChange={handleChange}
                                required
                                placeholder="Usuari"
                            />

                            <label htmlFor="email"></label>
                            <input
                                className='mb-6 mt-2 rounded-full p-4'
                                type="email"
                                id="email"
                                name="email"
                                value={userData.email}
                                onChange={handleChange}
                                required
                                placeholder="Correu"
                            />

                            <label htmlFor="phone"></label>
                            <input
                                className='mb-6 mt-2 rounded-full p-4'
                                type="tel"
                                id="phone"
                                name="phone"
                                value={userData.phone}
                                onChange={handleChange}
                                required
                                placeholder="Número de telèfon"
                            />

                            <label htmlFor="birthdate"></label>
                            <input
                                className='mb-6 mt-2 rounded-full p-4'
                                type="date"
                                id="birthdate"
                                name="birthdate"
                                value={userData.birthdate}
                                onChange={handleChange}
                                required
                                placeholder="Data de Naixement"
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

                            <button className='bg-gray-800 rounded-full text-white p-4' type="submit">Registrar-se</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Register;
