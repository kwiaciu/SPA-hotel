import $ from 'jquery';
import { roomsList } from './rooms-list';

export const rooms = () => {
    const fragment = $(new DocumentFragment());
    fragment
        .append('<h3>Rooms</h3>')
        .append(roomsList())

    return fragment;
};
