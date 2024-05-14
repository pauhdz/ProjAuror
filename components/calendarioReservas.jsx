import React, { Fragment, useState } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from "@fullcalendar/interaction";
import FormActivitats from './formActivitats';
import Modal from 'react-modal';
import Button from 'react-bootstrap/Button';
import { Transition } from '@headlessui/react';
import { Dialog } from '@mui/material';

export default function Calendar() {
    const [calendarView] = useState('dayGridMonth');
    const [showDialog, setShowDialog] = useState(false);
    const [selectedDate, setSelectedDate] = useState(null);
    const [events, setEvents] = useState([]);
    const [showEventDialog, setShowEventDialog] = useState(false);
    const [selectedEvent, setSelectedEvent] = useState(null);
    const [actividades, setActividades] = useState([]);


    const handleDateClick = (info) => {
        setSelectedDate(info.dateStr);
        setShowDialog(true);
    }

    const handleEventSubmit = (eventData) => {
        setEvents([...events, eventData]);
        setShowDialog(false);
    };

    const handleEventClick = (info) => {
        setSelectedEvent(info.event);
        setShowEventDialog(true);
    };

    const handleOutsideClick = (event) => {
        if (event.target.classList.contains('fixed')) {
            setShowDialog(false);
            setShowEventDialog(false);
        }
    };

    const handleInfoClick = (activity) => {
        setShowDialog(true);
    };

    const eliminarActividad = (id) => {
        const nuevasActividades = actividades.filter(actividad => actividad.id !== id);
        setActividades(nuevasActividades);
    };


    return (
        <div className='p-20' onClick={handleOutsideClick}>
            <div className='bg-white p-4 rounded-md shadow-2xl'>
                <FullCalendar
                    plugins={[dayGridPlugin, interactionPlugin]}
                    initialView={calendarView}
                    editable={true}
                    selectable={true}
                    selectMirror={true}
                    timeZone='local'
                    height="700px"
                    headerToolbar={{
                        left: 'today prev,next',
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
                    eventClick={handleEventClick}
                />

                <Transition
                    show={showDialog}
                    className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
                    style={{ zIndex: 9999 }}
                    enter="transition-opacity duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="transition-opacity duration-300"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <FormActivitats
                        onClose={() => setShowDialog(false)}
                        selectedDate={selectedDate}
                        onSubmit={handleEventSubmit}
                        eventData={selectedEvent} // Pasar los datos del evento al formulario
                    />
                </Transition>

                <Transition
                    show={showEventDialog}
                    className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
                    style={{ zIndex: 9999 }}
                    enter="transition-opacity duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="transition-opacity duration-300"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className='bg-white p-10 rounded-xl items-center'>
                        <button className='border-2 border-blue-400 rounded-xl p-4 text-blue-400 font-bold mr-4 min-w-6 w-32 hover:bg-blue-400 hover:text-white' onClick={() => { setShowEventDialog(false); handleInfoClick(selectedEvent); }}>Informació</button>
                        <button className='border-2 border-orange-400 rounded-xl p-4 text-orange-400 font-bold mr-4 min-w-6 w-32 hover:bg-orange-400 hover:text-white' onClick={() => { setShowEventDialog(false); setShowDialog(true); }}>Editar</button>
                        <button className='border-2 border-red-600 rounded-xl p-4 text-red-600 font-bold min-w-6 w-32 hover:bg-red-600 hover:text-white' onClick={() => {eliminarActividad(selectedEvent.id); setShowEventDialog(false);}}>Eliminar</button>
                    </div>
                </Transition>

            </div>

        </div>
    );
}
