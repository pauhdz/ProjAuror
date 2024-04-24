import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { Views } from 'react-calendar'; // Importar Views

const MiCalendario = () => {
 const [eventos, setEventos] = useState({});
 const [nuevoEvento, setNuevoEvento] = useState({ fecha: new Date(), inicio: '', fin: '', titulo: '', descripcion: '' });
 const [mostrarFormulario, setMostrarFormulario] = useState(false);
 const [vistaActual, setVistaActual] = useState('día'); // Estado para la vista actual

 const handleEventoCreado = (fechaUTC) => {
    const fechaLocal = new Date(fechaUTC);
    fechaLocal.setMinutes(fechaLocal.getMinutes() - fechaLocal.getTimezoneOffset());
    setNuevoEvento({ ...nuevoEvento, fecha: fechaLocal });
    setMostrarFormulario(true);
 };

 const handleGuardarEvento = () => {
    const evento = {
      inicio: nuevoEvento.inicio,
      fin: nuevoEvento.fin,
      titulo: nuevoEvento.titulo,
      descripcion: nuevoEvento.descripcion,
    };
    const fechaFormateada = nuevoEvento.fecha.toISOString().slice(0, 10);
    setEventos(prevEventos => ({
      ...prevEventos,
      [fechaFormateada]: [...(prevEventos[fechaFormateada] || []), evento],
    }));
    setNuevoEvento({ fecha: new Date(), inicio: '', fin: '', titulo: '', descripcion: '' });
    setMostrarFormulario(false);
 };

 // Función para manejar el cambio de vista
 const cambiarVista = (vista) => {
    setVistaActual(vista);
 };

 return (
    <div className="flex flex-col items-center gap-6">
      <Calendar
        onChange={handleEventoCreado}
        value={new Date()}
        className="mt-10"
        defaultView={vistaActual}
      />
      {mostrarFormulario ? (
        <form className="flex flex-col gap-2 w-80">
          {/* Formulario para crear eventos */}
        </form>
      ) : (
        <button onClick={() => setMostrarFormulario(true)} className="p-3 text-lg bg-blue-500 text-white rounded cursor-pointer hover:bg-blue-700">Crear Evento</button>
      )}
      <ul className="list-none p-0 w-1/2">
        {/* Lista de eventos */}
      </ul>
    </div>
 );
};

export default MiCalendario;
