import React from 'react';
import Calendar from 'react-big-calendar';
import { events } from './constants';
import moment from 'moment';

import Toolbar from '../Toolbar';

Calendar.momentLocalizer(moment);

export default props => (
  <div>
    <Toolbar title="Sikh Calendar" />
    <Calendar style={{ height: '60vh' }} views={['month']} timeslots={24} events={events} defaultDate={new Date()} />
  </div>
);

