import {
    home,
    treatments,
    booking,
    contact
} from '../views';
import { rooms } from '../rooms/rooms'
import { profile } from '../profile/profile';

export const routes = [

    { name: 'Home', path: '/', data: {}, component: home },
    { name: 'Rooms', path: '/rooms', data: {}, component: rooms },
    { name: 'Treatments', path: '/treatments', data: {}, component: treatments },
    { name: 'Booking', path: '/booking', data: {}, component: booking },
    { name: 'Contact', path: '/contact', data: {}, component: contact },
    { name: 'Profile', path: '/profile', data: {'login':'user'}, component: profile }

];