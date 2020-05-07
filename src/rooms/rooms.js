import $ from 'jquery';
import { roomsList } from './rooms-list';
import { dateInput } from './date-input';
import { roomsIndex } from './rooms-index';

export const rooms = () => {
    const fragment = $('<section></section>');
    fragment
        .append(dateInput())
        .append('<h2>Rooms</h2>')
        .append(roomsIndex())
        .append(roomsList())
    
    return fragment;
};
