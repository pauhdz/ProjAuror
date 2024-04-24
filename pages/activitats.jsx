import Head from 'next/head';
import Link from 'next/link';

const Activitats = () => {
    // Definir el array de actividades
    const actividades = [
        {
            imagen: "yoga.png",
            titulo: "Yoga SUAU",
            capacitat: " 9 persones",
            edat: " 20-30 anys",
            descripcion: "Descobreix la calma en la nostra classe de ioga suau. Respira, estira i relaxa't mentre alleuges tensions i trobes equilibri. Perfecte per a tots els nivells, aquesta pràctica t'ofereix una pausa rejovenidora enmig del caos diari. Uneix-te a nosaltres i gaudeix de la pau interior"
            
        },
        {
            imagen: "yga.png",
            titulo: "BIODANSA",
            capacitat: " 11 persones",
            edat: " 20-30 anys",
            descripcion: "Explora la joia d'estar viu amb Biodança. A través del moviment i la música, allibera tensions, augmenta la vitalitat i reforça vincles. Uneix-te a nosaltres per a una experiència única de connexió i expressió"
        }
        // Agrega más objetos de actividad según sea necesario
    ];

    return (
        <div>
            <Head>
                <title>Servicios - Aurores</title>
                <meta name="description" content="Descubre los servicios de bienestar que ofrecemos en Aurores." />
            </Head>

            <div className='bg-maize-100 flex flex-col gap-28 justify-center items-center' >
                <div>
                    <h1 className='text-[25px] mt-8 font-semibold text-center'>Descubreix les Nostres Activitats</h1>
                </div>
                <div className='flex flex-col gap-1   w-1/2'>
                    {/* Recorrer el array de actividades y renderizar la información de cada actividad */}
                    {actividades.map((actividad, index) => (
                        <div className='flex flex-row gap-10 mb-20 p-10 rounded shadow-2xl' key={index}>
                            <img className='w-[25vh] h-[35vh]' src={actividad.imagen} alt={actividad.titulo} />
                            <div className='flex flex-col mt-16 gap-3'>
                                <h2 className='font-bold text-2xl'>{actividad.titulo}</h2>
                                <p>
                                    <span className='font-semibold'>Capacitat:</span>
                                    <span className='font-normal'>{actividad.capacitat}</span>
                                </p>
                                <p>
                                    <span className='font-semibold'>Edat:</span>
                                    <span className='font-normal'>{actividad.edat}</span>
                                </p>
                                <p>{actividad.descripcion}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Activitats;
