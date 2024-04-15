// pages/api/auth/[...nextauth].js

import NextAuth from 'next-auth';
import Providers from 'next-auth/providers';

export default NextAuth({
    providers: [
        Providers.Google({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET
        }),
        // Añade otros proveedores según sea necesario
    ],
    database: process.env.DATABASE_URL,
    session: {
        jwt: true,
    },
    pages: {
        signIn: '/auth/signin',  // Ruta personalizada para la página de inicio de sesión
        signOut: '/auth/signout', // Ruta personalizada para la página de cierre de sesión
        error: '/auth/error',     // Ruta personalizada para la página de error
        // Añade otras páginas si es necesario
    },
    // Añade más configuración según sea necesario
});
