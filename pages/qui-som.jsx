// pages/contact.js
import Image from 'next/image';
import Head from 'next/head';


const Quisom = () => {
    return (
        <div>
            <Head>
                <title>Servicios - Aurores</title>
                <meta name="description" content="Descubre los servicios de bienestar que ofrecemos en Aurores." />
            </Head>

            <div className='bg-maize-100 flex flex-col  gap-14' >
                <div className='flex flex-row mt-16 mb-10 gap-10 justify-center items-center'>
                    <div className='flex flex-col  w-[60vh] gap-4'>
                        <h1 className='text-[25px]  font-semibold '>QUI SOM?</h1>
                        <h1 className='text-[15px]  font-medium '>En Aurores, ens dediquem a conrear el benestar holístic a través d'un enfocament únic i enriquidor cap a la vida. Som més que una empresa, som un santuari per al creixement personal, la connexió espiritual i l'harmonia interior.
                            La nostra filosofia es basa en la creença que l'equilibri entre el cos, la ment i l'esperit és essencial per a aconseguir una vida plena i significativa. Per això, oferim una àmplia gamma d'activitats espirituals dissenyades per a nodrir cada aspecte del teu ser.
                        </h1>
                    </div>
                    <div>
                        <Image
                            src="/sala.jpg"
                            width={400}
                            height={250}
                            alt="Sala Principal"
                            className=''
                        />
                    </div>

                </div>
                <div className='flex flex-row    gap-10 justify-center items-center'>

                    <div>
                        <Image
                            src="/sala.jpg"
                            width={400}
                            height={250}
                            alt="Sala Principal"
                            className=''
                        />
                    </div>
                    <div className='flex   w-[60vh] gap-4'>

                        <h1 className='text-[15px]  font-medium '>
                            Des de sessions de ioga que t'ajuden a trobar pau interior i flexibilitat física, fins a classes de biodansa que et conviden a expressar-te lliurement a través del moviment, en Aurores t'oferim un espai on pots explorar, créixer i florir.</h1>
                    </div>
                </div>
                <div className='flex flex-row   mb-[20vh] gap-10 justify-center items-center'>
                    <div className='flex flex-col  w-[60vh] gap-4'>

                        <h1 className='text-[15px]  font-medium '>En Aurores, no sols ens preocupem pel teu benestar individual, sinó que també ens esforcem per crear una comunitat acollidora i solidària on puguis trobar suport, inspiració i connexions significatives.
                            <br></br>
                            Uneix-te a nosaltres en aquest viatge cap a l'autodescobriment i la realització personal. En Aurores, t'ajudem a trobar la teva llum interior i a brillar amb tota la teva esplendor.
                        </h1>
                    </div>
                    <div>
                        <Image
                            src="/sala.jpg"
                            width={400}
                            height={250}
                            alt="Sala Principal"
                            className=''
                        />
                    </div>

                </div>
            </div>
        </div>
    );
}


export default Quisom;
