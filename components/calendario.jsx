import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const MiCalendario = () => {
 const [eventos, setEventos] = useState([]);
 const [nuevoEvento, setNuevoEvento] = useState({ fecha: new Date(), inicio: '', fin: '', titulo: '', descripcion: '' });
 const [mostrarFormulario, setMostrarFormulario] = useState(false);

 const handleEventoCreado = (fecha) => {
    setNuevoEvento({ ...nuevoEvento, fecha: fecha });
    setMostrarFormulario(true);
 };

 const handleGuardarEvento = () => {
    const evento = {
      id: eventos.length + 1,
      fecha: nuevoEvento.fecha,
      inicio: nuevoEvento.inicio,
      fin: nuevoEvento.fin,
      titulo: nuevoEvento.titulo,
      descripcion: nuevoEvento.descripcion,
    };
    setEventos([...eventos, evento]);
    setNuevoEvento({ fecha: new Date(), inicio: '', fin: '', titulo: '', descripcion: '' });
    setMostrarFormulario(false);
 };

 // Función para formatear la fecha
 const formatearFecha = (fecha) => {
    const opciones = { month: 'long', year: 'numeric' };
    const formateador = new Intl.DateTimeFormat('es-ES', opciones);
    return formateador.format(fecha);
 };

 return (
    <div className="flex flex-col items-center gap-6">
      <Calendar
        onChange={handleEventoCreado}
        value={new Date()}
      />
      {mostrarFormulario ? (
        <form className="flex flex-col gap-2 w-80">qws
        
          <input
            type="datetime-local"
            value={nuevoEvento.fecha.toISOString().slice(0, -1)}
            onChange={(e) => setNuevoEvento({ ...nuevoEvento, fecha: new Date(e.target.value) })}
            className="p-2 text-lg"
          />
          <input
            type="text"
            placeholder="Título del evento"
            value={nuevoEvento.titulo}
            onChange={(e) => setNuevoEvento({ ...nuevoEvento, titulo: e.target.value })}
            className="p-2 text-lg"
          />
          <textarea
            placeholder="Descripción del evento"
            value={nuevoEvento.descripcion}
            onChange={(e) => setNuevoEvento({ ...nuevoEvento, descripcion: e.target.value })}
            className="p-2 text-lg"
          />
          <button type="button" onClick={handleGuardarEvento} className="p-3 text-lg bg-blue-500 text-white rounded cursor-pointer hover:bg-blue-700">Guardar Evento</button>
        </form>
      ) : (
        <button onClick={() => setMostrarFormulario(true)} className="p-3 text-lg bg-blue-500 text-white rounded cursor-pointer hover:bg-blue-700">Crear Evento</button>
      )}
      <ul className="list-none p-0">
        {eventos.map((evento) => (
          <li key={evento.id} className="p-4 border border-gray-300 bg-gray-100 mb-4 rounded-lg">
            {formatearFecha(evento.fecha)} - {evento.titulo} - {evento.descripcion}
          </li>
        ))}
      </ul>
    </div>
 );
};

export default MiCalendario;
