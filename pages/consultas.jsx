import Head from 'next/head';
import styles from '../styles/Consultas.module.css'; // Asegúrate de tener este archivo CSS para la página de Consultas

const Consultas = () => {
    return (
        <div className={styles.container}>
            <Head>
                <title>Consultas Psicológicas - Aurores</title>
                <meta name="description" content="Descubre cómo nuestras consultas psicológicas pueden ayudarte en tu crecimiento personal y bienestar emocional." />
            </Head>

            <h1 className={styles.title}>Consultas Psicológicas</h1>
            <p className={styles.introduction}>
                En Aurores, entendemos la importancia del bienestar emocional en tu camino hacia el crecimiento personal.
                Ofrecemos consultas psicológicas individuales y en grupo, adaptadas a tus necesidades específicas.
            </p>

            <section className={styles.consultationTypes}>
                <h2>Tipos de Consultas</h2>
                <div className={styles.type}>
                    <h3>Terapia Individual</h3>
                    <p>Un espacio seguro y confidencial donde trabajarás uno a uno con un psicólogo para abordar tus inquietudes y desafíos personales.</p>
                </div>
                <div className={styles.type}>
                    <h3>Terapia de Grupo</h3>
                    <p>Participa en sesiones de terapia de grupo donde podrás compartir experiencias y encontrar apoyo en una comunidad que entiende lo que estás viviendo.</p>
                </div>
                <div className={styles.type}>
                    <h3>Asesoramiento Familiar</h3>
                    <p>Mejora la comunicación y resuelve conflictos dentro de la familia con la guía de nuestros expertos en relaciones familiares.</p>
                </div>
                {/* Agrega más tipos según las sesiones que ofrezcas */}
            </section>

            <section className={styles.booking}>
                <h2>Reserva tu Consulta</h2>
                <p>Para reservar una consulta o saber más sobre nuestros servicios, visita nuestra página de contacto o envíanos un mensaje directamente.</p>
            </section>
        </div>
    );
}

export default Consultas;
