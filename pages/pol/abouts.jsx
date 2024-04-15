// pages/about.js

import Head from 'next/head';
import styles from '../../styles/about.module.css'; // Asegúrate de tener este archivo CSS para la página About

const About = () => {
    return (
        <div className={styles.container}>
            <Head>
                <title>Acerca de Aurores</title>
                <meta name="description" content="Conoce más sobre Aurores y nuestro enfoque en bienestar y desarrollo personal." />
            </Head>

            <h1 className={styles.title}>Acerca de Nosotros</h1>
            <p>
                Aurores es un espacio dedicado al bienestar y desarrollo personal.
                Ofrecemos clases de yoga, sesiones de meditación y asesoramiento psicológico
                para ayudarte en tu camino hacia una vida más plena y consciente.
            </p>
            {/* Agrega más contenido según sea necesario */}
        </div>
    );
}

export default About;
