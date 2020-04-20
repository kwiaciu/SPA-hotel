import $ from 'jquery';
import { roomsList } from './rooms-list';
import { dateInput } from './date-input';

export const rooms = () => {
    const fragment = $(new DocumentFragment());
    fragment
        .append(dateInput())
        .append('<h3>Rooms</h3>')
        .append(roomsList())

    return fragment;
};
