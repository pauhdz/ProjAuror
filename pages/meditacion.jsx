import Head from 'next/head';
import styles from '../styles/Meditacion.module.css'; // Asegúrate de tener este archivo CSS para la página de Meditación

const Meditacion = () => {
    return (
        <div className={styles.container}>
            <Head>
                <title>Meditación - Aurores</title>
                <meta name="description" content="Descubre la paz interior y reduce el estrés a través de nuestras sesiones de meditación." />
            </Head>

            <h1 className={styles.title}>Sesiones de Meditación</h1>
            <p className={styles.introduction}>
                La meditación es una práctica ancestral que ayuda a centrar la mente y encontrar la calma en medio de la agitación cotidiana. En Aurores, ofrecemos sesiones guiadas de meditación diseñadas para todos los niveles, desde principiantes hasta practicantes avanzados.
            </p>

            <section className={styles.sessionTypes}>
                <h2>Tipos de Meditación que Ofrecemos</h2>
                <div className={styles.type}>
                    <h3>Meditación Mindfulness</h3>
                    <p>Concentra tu atención en el momento presente, aprendiendo a observar tus pensamientos y emociones sin juzgarlos.</p>
                </div>
                <div className={styles.type}>
                    <h3>Meditación con Mantras</h3>
                    <p>Utiliza sonidos sagrados para profundizar tu meditación, calmar tu mente y conectar con tu esencia interior.</p>
                </div>
                <div className={styles.type}>
                    <h3>Meditación de Movimiento</h3>
                    <p>Integra movimientos suaves y conscientes para liberar tensiones corporales y alcanzar un estado de meditación profundo.</p>
                </div>
                {/* Puedes añadir más tipos según las sesiones que ofrezcas */}
            </section>

            <section className={styles.benefits}>
                <h2>Beneficios de la Meditación</h2>
                <ul>
                    <li>Mejora la concentración y la claridad mental.</li>
                    <li>Reduce los niveles de estrés y ansiedad.</li>
                    <li>Promueve una sensación de paz y bienestar general.</li>
                    <li>Mejora la calidad del sueño.</li>
                    {/* Lista más beneficios según tu experiencia y conocimiento */}
                </ul>
            </section>

            {/* Incluye información sobre cómo inscribirse o participar en las sesiones */}
            <div className={styles.join}>
                <h2>¿Cómo Participar?</h2>
                <p>Si estás interesado en participar en nuestras sesiones de meditación, visita nuestra página de contacto o inscríbete a través de nuestro formulario de inscripción.</p>
            </div>
        </div>
    );
}

export default Meditacion;
