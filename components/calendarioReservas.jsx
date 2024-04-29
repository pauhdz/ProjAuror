import React, { useState } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from "@fullcalendar/interaction";
import FormActivitats from './formActivitats';

export default function Calendar() {
    const [calendarView] = useState('dayGridMonth');
    const [showDialog, setShowDialog] = useState(false);
    const [selectedDate, setSelectedDate] = useState(null);
    const [events, setEvents] = useState([]); // Estado para almacenar los eventos
    const [showEventDetails, setShowEventDetails] = useState(false); // Estado para controlar la visibilidad del modal de detalles
    const [selectedEvent, setSelectedEvent] = useState(null); // Estado para almacenar el evento seleccionado

    const handleDateClick = (info) => {
        setSelectedDate(info.dateStr);
        setShowDialog(true);
    };

    const handleEventSubmit = (eventData) => {
        setEvents([...events, eventData]);
        setShowDialog(false);
    };

    const handleEventClick = (info) => {
        // Establecer la fecha seleccionada con la fecha del evento
        setSelectedDate(info.event.start.toISOString().split('T')[0]);
        // Pasar los detalles del evento al formulario
        setSelectedEvent(info.event);
        // Abrir el formulario de edición
        setShowDialog(true);
    };


    return (
        <div className='px-20 pt-10'>
            <div className='bg-white p-4 rounded-md shadow-2xl'>
                <FullCalendar
                    plugins={[dayGridPlugin, interactionPlugin]}
                    initialView={calendarView}
                    height="700px"
                    headerToolbar={{
                        left: 'prev,next',
                        center: 'title',
                        right: 'dayGridWeek,dayGridDay,dayGridMonth'
                    }}
                    businessHours={{
                        daysOfWeek: [1, 2, 3, 4, 5],
                        startTime: '08:00',
                        endTime: '17:00'
                    }}
                    dateClick={handleDateClick}
                    events={events}
                    eventClick={handleEventClick} // Agrega el manejador del evento de clic en eventos
                />
                {showDialog && <FormActivitats onClose={() => setShowDialog(false)} selectedDate={selectedDate} selectedEvent={selectedEvent} onSubmit={handleEventSubmit} />}
                {showEventDetails && selectedEvent && (
                    <div>
                        <h2>{selectedEvent.title}</h2>
                        <p>Fecha y hora de inicio: {selectedEvent.start.toLocaleString()}</p>
                        <p>Fecha y hora de finalización: {selectedEvent.end.toLocaleString()}</p>
                        <p>Número de personas: {selectedEvent.numPersonas}</p>
                        <button onClick={() => setShowEventDetails(false)}>Cerrar</button>
                    </div>
                )}
            </div>
        </div>
    );
}
