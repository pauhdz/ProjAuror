import React, { useState } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from "@fullcalendar/interaction";
import FormActivitats from './formActivitats';
import Modal from 'react-modal';
import Button from 'react-bootstrap/Button';

export default function Calendar() {
    const [calendarView] = useState('dayGridMonth');
    const [showDialog, setShowDialog] = useState(false);
    const [selectedDate, setSelectedDate] = useState(null);
    const [events, setEvents] = useState([]);


    const handleDateClick = (info) => {
        setSelectedDate(info.dateStr);
        setShowDialog(true);
    }

    const handleEventSubmit = (eventData) => {
        setEvents([...events, eventData]);
        setShowDialog(false);
    };

    const handleEventClick = (info) => {
        const eventEl = info.el;
        const rect = eventEl.getBoundingClientRect();
        setContextMenuVisible(true);
        setContextMenuPosition(rect);
    };

    return (
        <div className='p-20'>
            <div className='bg-white p-4 rounded-md shadow-2xl'>
                <FullCalendar
                    plugins={[dayGridPlugin, interactionPlugin]}
                    initialView={calendarView}
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

                {showDialog && <FormActivitats onClose={() => setShowDialog(false)} selectedDate={selectedDate} onSubmit={handleEventSubmit} />}
            </div>
        </div>
    );
}
