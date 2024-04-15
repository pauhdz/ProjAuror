import Link from 'next/link';
import Image from 'next/image';
import React from 'react';
import MiCalendario from '@/components/calendario';

const Calendari = () => {
    return (
        <div>
            <h1>Calendari</h1>
            <MiCalendario />
        </div>
    );
}

export default Calendari;