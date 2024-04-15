import Head from 'next/head';
import styles from '../styles/Yoga.module.css'; // Asegúrate de tener este archivo CSS para la página de Yoga

const Yoga = () => {
    return (
        <div className={styles.container}>
            <Head>
                <title>Yoga - Aurores</title>
                <meta name="description" content="Explora nuestras clases de yoga diseñadas para todos los niveles." />
            </Head>

            <main className={styles.main}>
                <h1 className={styles.title}>Clases de Yoga</h1>
                <p className={styles.description}>
                    En Aurores, ofrecemos una variedad de clases de yoga para ayudarte a encontrar el equilibrio entre cuerpo y mente.
                    Desde yoga para principiantes hasta sesiones avanzadas, nuestras clases están diseñadas para todos los niveles.
                </p>
                
                <div className={styles.classesList}>
                    {/* Descripción de las clases */}
                    <div className={styles.classItem}>
                        <h2>Yoga para Principiantes</h2>
                        <p>Esta clase es perfecta si estás empezando tu camino en el yoga. Aprenderás las posturas básicas y cómo respirar correctamente durante la práctica.</p>
                    </div>

                    <div className={styles.classItem}>
                        <h2>Yoga Vinyasa</h2>
                        <p>Una práctica más dinámica que sincroniza la respiración con una secuencia fluida de movimientos. Ideal para quienes buscan un desafío físico y mental.</p>
                    </div>

                    <div className={styles.classItem}>
                        <h2>Yoga Restaurativo</h2>
                        <p>Enfocado en la relajación profunda, esta clase utiliza soportes para mantener las posturas más tiempo, permitiendo una relajación completa del cuerpo y la mente.</p>
                    </div>
                    {/* Puedes añadir más clases según sea necesario */}
                </div>
            </main>
        </div>
    );
}

export default Yoga;
