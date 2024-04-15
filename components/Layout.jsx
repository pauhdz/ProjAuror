import { useRouter } from 'next/router';
import Navbar from './Navbar'; // Asegúrate de importar tus componentes Navbar y Footer
import Footer from './Footer';

const Layout = ({ children }) => {
    const router = useRouter();
    const isRegisterOrLoginPage = router.pathname === '/register' || router.pathname === '/login'; // Combina las condiciones para registro y login

    return (
        <>
            {!isRegisterOrLoginPage && <Navbar />}
            <main>{children}</main>
            {!isRegisterOrLoginPage && <Footer />}
        </>
    );
}

export default Layout;