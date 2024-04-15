// pages/_app.js

import '../styles/globals.css'; // Asegúrate de tener este archivo de estilos globales
import Layout from '../components/Layout'; // Aquí irá el layout que envuelve tus páginas, incluyendo la barra de navegación

function MyApp({ Component, pageProps }) {
    return (
        <Layout>
            <Component {...pageProps} />
        </Layout>
    );
}

export default MyApp;
