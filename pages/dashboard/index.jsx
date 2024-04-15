import Head from 'next/head';
import Link from 'next/link';
import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function Dashboard() {
    const router = useRouter();

    useEffect(() => {
        // Aquí puedes añadir una verificación para ver si el usuario está autenticado
        // Si no lo está, redirigir al login o a la página de inicio
        // const isAuthenticated = ...;
        // if (!isAuthenticated) {
        //     router.push('/login');
        // }
    }, [router]);

    return (
        <>
            <Head>
                <title>Dashboard - Aurores</title>
            </Head>
            <div className="container mx-auto p-4">
                <h1 className="text-2xl font-semibold mb-4">Dashboard</h1>
                <div className="flex flex-wrap -m-4">
                    {/* Enlace a la página de configuraciones */}
                    <div className="p-4">
                        <Link href="/dashboard/settings" className="underline text-blue-600 hover:text-blue-800">
                            Configuraciones
                        </Link>
                    </div>
                    {/* Agrega más enlaces según sea necesario */}
                </div>
            </div>
        </>
    );
}
