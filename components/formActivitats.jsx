const FormActivitats = ({ onClose, selectedDate, onSubmit, eventData }) => {

    const handleSubmit = (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        const data = Object.fromEntries(formData.entries());
    
        // Combina la fecha seleccionada con las horas de inicio y fin para crear objetos Date completos
        const fechaSeleccionada = new Date(selectedDate);
        const horaInicio = new Date(`${selectedDate}T${data.rangoHoraInicio}`);
        const horaFin = new Date(`${selectedDate}T${data.rangoHoraFin}`);

        onClose();
    
        onSubmit({
            title: data.nombreActividad,
            date: fechaSeleccionada, // Fecha seleccionada
            start: horaInicio, // hora de inicio
            end: horaFin, // Fecha y hora de finalización
            numPersonas: data.personasActividad, // Número de personas
            description: data.descripcionActividad, // Descripción de la actividad
        });
    };

    return (
        <form onSubmit={handleSubmit} className="p-20">
            <div class="flex flex-col space-y-4 rounded-lg shadow-2xl py-6 px-14 bg-white">
                <label for="nombreActividad" class="text-lg">Nom de la Activita:</label>
                <input type="text" id="nombreActividad" name="nombreActividad" required
                    class="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-gray-800 border-b" defaultValue={eventData ? eventData.title : ''}/>

                <div className="flex gap-10 items-center mb-4">
                    <label for="fechaActividad" class="text-lg">Data de la Activita:</label>
                    <input type="date" id="fechaActividad" name="fechaActividad" required
                        value={selectedDate} // Establece el valor predeterminado de la fecha seleccionada
                        class="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-gray-800 border-b w-52" />

                    <label for="rangoHora" class="text-lg ml-10">Horari de la Activitat:</label>
                    <div class="flex items-center">
                        <input type="time" id="rangoHoraInicio" name="rangoHoraInicio" required
                            class="border border-gray-300 rounded-md px-3 py-2 mr-2 focus:outline-none focus:border-gray-800 border-b" defaultValue={eventData ? eventData.start : ''} />
                        <span class="text-lg">-</span>
                        <input type="time" id="rangoHoraFin" name="rangoHoraFin" required
                            class="border border-gray-300 rounded-md px-3 py-2 ml-2 focus:outline-none focus:border-gray-800 border-b" defaultValue={eventData ? eventData.end : ''}/>
                    </div>
                </div>

                <label for="personasActividad" class="text-lg">Persones de la Activitat:</label>
                <input type="number" id="personasActividad" name="personasActividad" required
                    class="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-gray-800 border-b" defaultValue={eventData ? eventData.numPersonas : ''} />

                <label for="descripcionActividad" class="text-lg">Descripció de la Activitat:</label>
                <textarea id="descripcionActividad" name="descripcionActividad" rows="4"
                    class="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-gray-800 border-b"></textarea>

                <button type="submit" class="bg-gray-800 text-white px-4 py-2 rounded-md hover:bg-gray-900">Afegir Activitat</button>
            </div>
        </form>
    );
}

export default FormActivitats;
