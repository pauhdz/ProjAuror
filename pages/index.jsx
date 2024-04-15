import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
// Asume la existencia de este archivo CSS para estilos específicos de la página de inicio

export default function Home() {
    return (
        <div>
            <Head>
                <title>Aurores - Centro de Bienestar</title>
                <meta name="description" content="Descubre Aurores, tu espacio de bienestar y desarrollo personal. Explora nuestros servicios de yoga, meditación, y más." />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className='flex'>
                <div className='bg-maize-100'>
                    <div>
                        <Image
                            src="/salaYoga.jpg"
                            width={3500}
                            height={100}
                            alt="Sala Principal"
                            className='w-screen'
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
