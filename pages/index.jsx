import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import '../styles/global.css'; // Asegúrate de ajustar la ruta según la estructura de tu proyecto


export default function Home() {
    // Define las rutas de las imágenes
    const images = [
        "/salaYoga.jpg",
        "/sala.jpg",
        "/salaYoga.jpg",
    ];

    // Estado para la imagen actual
    const [currentImage, setCurrentImage] = useState(images[0]);

    useEffect(() => {
        const intervalId = setInterval(() => {
            const currentIndex = images.indexOf(currentImage);
            const nextIndex = (currentIndex + 1) % images.length;
            setCurrentImage(images[nextIndex]);
        }, 4000);

        return () => clearInterval(intervalId);
    }, [currentImage]);

   return (
    <div className="w-full"> {/* Asegura que el contenedor principal tenga un ancho completo */}
    <Head>
        <title>Aurores - Centro de Bienestar</title>
        <meta name="description" content="Descubre Aurores, tu espacio de bienestar y desarrollo personal. Explora nuestros servicios de yoga, meditación, y más." />
        <link rel="icon" href="/favicon.ico" />
    </Head>

    <main className='flex w-full'> {/* Asegura que el contenedor principal tenga un ancho completo */}
        <div className='bg-maize-100 w-full'> {/* Asegura que el contenedor principal tenga un ancho completo */}
            {/* Contenedor del carrusel con tamaño fijo */}
            <div className="w-full h-64 relative"> {/* Asegura que el contenedor del carrusel ocupe el ancho completo */}
                {/* Imagen actual del carrusel */}
                <Image
                    key={currentImage} // Añade esta línea
                    src={currentImage}
                    layout="fill"
                    objectFit="cover"
                    alt="Sala Principal"
                    style={{
                        animation: 'slideInFromLeft 1s forwards', // Aplica la animación aquí
                    }}
                />
            </div>

                    <div className='flex items-center justify-center mt-28 gap-24 mb-10'>
                        <div>
                            <h1 className='text-[30px]'>dkfbsdjkfsdbjkfsbf</h1>
                            <p>jksdfbsjdkfbsdjfhsbdfjsdbjdhdfhsdbfjsdbfskfjsdbsdbf</p>
                            <p>jksdfbsjdkfbsdjfhsbdfjsdbjdhdfhsdbfjsdbfssfsdfsfsdfs</p>
                            <p>jksdfbsjdkfbsdjfhsbdfjsdbjdhdfhsdbfjsdbfssdfsdfsdfsdfsf</p>
                            <p>jksdfbsjdkfbsdjfhsbdfjsdbjdhdfhsdbfjsdbfs</p>
                        </div>

                        <Image
                            src="/salaYoga.jpg"
                            width={700}
                            height={100}
                            alt="Sala Principal"
                        />
                    </div>
                </div>
            </main>
        </div>
    );
}