import $ from 'jquery';
import { roomsList } from './rooms-list';
import { dateInput } from './date-input';
import { roomsIndex } from './rooms-index';

export const rooms = () => {
    const fragment = $('<section class="rooms"></section>');
    fragment
        .append('<h2 class="rooms-header">Rooms</h2>')
        .append(dateInput())
        .append(roomsIndex())
        .append(roomsList())

    return fragment;
};
