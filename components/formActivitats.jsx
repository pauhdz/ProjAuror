const FormActivitats = () => {
    return (
        <form class="px-[300px] py-20">
            <div class="flex flex-col space-y-4 rounded-lg shadow-2xl py-6 px-14 bg-white">
                <label for="nombreActividad" class="text-lg">Nom de la Activitat:</label>
                <input type="text" id="nombreActividad" name="nombreActividad" required
                    class="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-gray-800 border-b" />

                <div className="flex gap-10 items-center mb-4">
                    <label for="fechaActividad" class="text-lg">Data de la Activitat:</label>
                    <input type="date" id="fechaActividad" name="fechaActividad" required
                        class="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-gray-800 border-b w-52" />

                    <label for="rangoHora" class="text-lg ml-10">Horari de la Activitat:</label>
                    <div class="flex items-center">
                        <input type="time" id="rangoHoraInicio" name="rangoHoraInicio" required
                            class="border border-gray-300 rounded-md px-3 py-2 mr-2 focus:outline-none focus:border-gray-800 border-b" />
                        <span class="text-lg">-</span>
                        <input type="time" id="rangoHoraFin" name="rangoHoraFin" required
                            class="border border-gray-300 rounded-md px-3 py-2 ml-2 focus:outline-none focus:border-gray-800 border-b" />
                    </div>
                </div>

                <label for="personasActividad" class="text-lg">Persones de la Activitat:</label>
                <input type="number" id="personasActividad" name="personasActividad" required
                    class="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-gray-800 border-b" />

                <label for="descripcionActividad" class="text-lg">Descripció de la Activitat:</label>
                <textarea id="descripcionActividad" name="descripcionActividad" rows="4" required
                    class="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-gray-800 border-b"></textarea>

                <button type="submit" class="bg-gray-800 text-white px-4 py-2 rounded-md hover:bg-gray-900">Afegir Activitat</button>
            </div>
        </form>

    );
}

export default FormActivitats;