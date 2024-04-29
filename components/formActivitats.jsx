import React, { useState, useEffect } from 'react';

const FormActivitats = ({ onClose, selectedDate, selectedEvent, onSubmit, isEditing }) => {
    const [formValues, setFormValues] = useState({
        nombreActividad: '',
        fechaActividad: selectedDate,
        rangoHoraInicio: '',
        rangoHoraFin: '',
        personasActividad: '',
        descripcionActividad: '',
    });

    useEffect(() => {
        if (selectedEvent) {
            setFormValues({
                nombreActividad: selectedEvent.title,
                fechaActividad: selectedEvent.start.toISOString().split('T')[0],
                rangoHoraInicio: selectedEvent.start.toISOString().split('T')[1].substring(0, 5),
                rangoHoraFin: selectedEvent.end.toISOString().split('T')[1].substring(0, 5),
                personasActividad: selectedEvent.numPersonas,
                descripcionActividad: selectedEvent.description,
            });
        }
    }, [selectedEvent]);

    const handleSubmit = (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        const data = Object.fromEntries(formData.entries());

        // Combina la fecha seleccionada con las horas de inicio y fin para crear objetos Date completos
        const fechaSeleccionada = new Date(data.fechaActividad);
        const horaInicio = new Date(`${data.fechaActividad}T${data.rangoHoraInicio}`);
        const horaFin = new Date(`${data.fechaActividad}T${data.rangoHoraFin}`);

        onClose();

        if (isEditing) {
            // Lógica para actualizar el evento existente
            const updatedEvent = {
                ...selectedEvent,
                title: data.nombreActividad,
                start: horaInicio,
                end: horaFin,
                numPersonas: data.personasActividad,
                description: data.descripcionActividad,
            };
            onSubmit(updatedEvent);
        } else {
            // Lógica para agregar un nuevo evento
            onSubmit({
                title: data.nombreActividad,
                date: fechaSeleccionada,
                start: horaInicio,
                end: horaFin,
                numPersonas: data.personasActividad,
                description: data.descripcionActividad,
            });
        }
    };

    return (
        <form onSubmit={handleSubmit} className="p-20">
            <div class="flex flex-col space-y-4 rounded-lg shadow-2xl py-6 px-14 bg-white">
                <label for="nombreActividad" class="text-lg">Nom de la Activitat:</label>
                <input type="text" id="nombreActividad" name="nombreActividad" required
                    value={formValues.nombreActividad}
                    onChange={(e) => setFormValues({ ...formValues, nombreActividad: e.target.value })}
                    class="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-gray-800 border-b" />

                <div className="flex gap-10 items-center mb-4">
                    <label for="fechaActividad" class="text-lg">Data de la Activitat:</label>
                    <input type="date" id="fechaActividad" name="fechaActividad" required
                        value={formValues.fechaActividad}
                        onChange={(e) => setFormValues({ ...formValues, fechaActividad: e.target.value })}
                        class="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-gray-800 border-b w-52" />

                    <label for="rangoHora" class="text-lg ml-10">Horari de la Activitat:</label>
                    <div class="flex items-center">
                        <input type="time" id="rangoHoraInicio" name="rangoHoraInicio" required
                            value={formValues.rangoHoraInicio}
                            onChange={(e) => setFormValues({ ...formValues, rangoHoraInicio: e.target.value })}
                            class="border border-gray-300 rounded-md px-3 py-2 mr-2 focus:outline-none focus:border-gray-800 border-b" />
                        <span class="text-lg">-</span>
                        <input type="time" id="rangoHoraFin" name="rangoHoraFin" required
                            value={formValues.rangoHoraFin}
                            onChange={(e) => setFormValues({ ...formValues, rangoHoraFin: e.target.value })}
                            class="border border-gray-300 rounded-md px-3 py-2 ml-2 focus:outline-none focus:border-gray-800 border-b" />
                    </div>
                </div>

                <label for="personasActividad" class="text-lg">Persones de la Activitat:</label>
                <input type="number" id="personasActividad" name="personasActividad" required
                    value={formValues.personasActividad}
                    onChange={(e) => setFormValues({ ...formValues, personasActividad: e.target.value })}
                    class="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-gray-800 border-b" />

                <label for="descripcionActividad" class="text-lg">Descripció de la Activitat:</label>
                <textarea id="descripcionActividad" name="descripcionActividad" rows="4"
                    value={formValues.descripcionActividad}
                    onChange={(e) => setFormValues({ ...formValues, descripcionActividad: e.target.value })}
                    class="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-gray-800 border-b"></textarea>

                <button type="submit" class="bg-gray-800 text-white px-4 py-2 rounded-md hover:bg-gray-900">Afegir Activitat</button>
            </div>
        </form>
    );
}

export default FormActivitats;
