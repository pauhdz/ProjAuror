import React, { useRef, useState } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from "@fullcalendar/interaction";

export default function Calendar() {
    const [calendarView] = useState('dayGridMonth');

    const handleDateClick = (arg) => {
        alert(arg.dateStr);
    }

    return (
        <div className='px-40 '>
            <div className='bg-white p-4 rounded-md shadow-2xl'>
                <FullCalendar
                    plugins={[dayGridPlugin, interactionPlugin]}
                    dateClick={handleDateClick}
                    initialView={calendarView}
                    height="700px"
                    headerToolbar={{
                        left: 'prev,next',
                        center: 'title',
                        right: 'dayGridWeek,dayGridDay,dayGridMonth'
                    }}
                />
            </div>
        </div>
    );
}
