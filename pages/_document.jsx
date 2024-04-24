import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx);
        return { ...initialProps };
    }

    render() {
        return (
            <Html lang="es"> {/* Asume que el contenido del sitio está en español */}
                <Head>
                    {/* Aquí puedes incluir fuentes personalizadas, hojas de estilo globales, etc. */}
                    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto" />
                    {/* No olvides incluir el favicon y cualquier otro recurso global */}
                    <link rel="icon" href="/favicon.ico" />
                </Head>
                <body className='bg-maize-100'>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

export default MyDocument;
