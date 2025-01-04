'use client';
import { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import TitleComponent from './TitleComponent';

type ValuePiece = Date | null;
type Value = ValuePiece | [ValuePiece, ValuePiece];


export const event = [
  {
    id: 1,
    title: 'Event 1',
    time: '7:00 AM - 11:00 AM',
    description: 'Description 1',
  },
  {
    id: 2,
    title: 'Event 2',
    time: '9:00 AM - 2:00 PM',
    description: 'Description 2',
  },
  {
    id: 3,
    title: 'Event 3',
    time: '10:00 AM - 3:00 PM',
    description: 'Description 3',
  },
  {
    id: 4,
    title: 'Event 4',
    time: '10:00 AM - 2:00 PM',
    description: 'Description 4',
  },
  {
    id: 5,
    title: 'Event 5',
    time: '3:00 PM - 7:00 PM',
    description: 'Description 5',
  },
]


const EventCalendar = () => {
  const [value, onChange] = useState<Value>(new Date());

  return (
    <div className='bg-white p-4 rounded-md'>
      <Calendar onChange={onChange} value={value} />
      {/* TITLE EVENT */}
      <div className='py-4'>
        <TitleComponent title='Event' key={'Event'} />
      </div>
      
      {/* EVENT */}
      <div className='flex flex-col gap-3'>
        {event.map(e => (
          <div className='p-5 rounded-md border-2 border-gray-200 border-t-4 odd:border-t-lamaSky even:border-t-lamaPurple' key={e.id}>
            <div className='flex items-center justify-between'>
              <h1 className='font-semibold text-gray-600'>{e.title}</h1>
              <span className='text-gray-300 text-xs'>{e.time}</span>
            </div>
            <p className='mt-2 text-gray-400 text-sm'>{e.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default EventCalendar;