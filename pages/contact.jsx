// pages/contact.js

import Head from 'next/head';
import styles from '../styles/contact.module.css'; // Asegúrate de tener este archivo CSS para la página de Contacto
import Footer from '../components/Footer';
const Contact = () => {
    return (
        <div className={styles.container}>
            <Head>
                <title>Contacto - Aurores</title>
                <meta name="description" content="Ponte en contacto con Aurores para más información sobre nuestros servicios." />
            </Head>

            <h1 className={styles.title}>Contacto</h1>
            <form className={styles.contactForm} onSubmit={handleSubmit}>
                <label htmlFor="name">Nombre</label>
                <input type="text" id="name" name="name" required />

                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" required />

                <label htmlFor="message">Mensaje</label>
                <textarea id="message" name="message" required></textarea>

                <button type="submit">Enviar Mensaje</button>
            </form>
        </div>
    );
}

// Asegúrate de definir esta función para manejar el envío del formulario
const handleSubmit = async (event) => {
    event.preventDefault();
    // Aquí iría la lógica para manejar la información del formulario
    // Por ejemplo, podrías enviar esta información a una API o a un servicio de email
};

export default Contact;
