// components/ContactForm.js

import { useState } from 'react';

const ContactForm = () => {
    const [contactData, setContactData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const handleChange = (e) => {
        setContactData({ ...contactData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        // Implementar lógica para enviar datos de contacto, por ejemplo, a una API
        console.log(contactData);
    };

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="name">Nombre:</label>
            <input type="text" id="name" name="name" value={contactData.name} onChange={handleChange} required />

            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" value={contactData.email} onChange={handleChange} required />

            <label htmlFor="message">Mensaje:</label>
            <textarea id="message" name="message" value={contactData.message} onChange={handleChange} required></textarea>

            <button type="submit">Enviar</button>
        </form>
    );
}

export default ContactForm;
