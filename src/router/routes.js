import {
    home,
    rooms,
    treatments,
    booking,
    contact
} from '../views';

export const routes = [

    { name: 'Home', path: '/', data: {}, component: home },
    { name: 'Rooms', path: '/rooms', data: {}, component: rooms },
    { name: 'Treatments', path: '/treatments', data: {}, component: treatments },
    { name: 'Booking', path: '/booking', data: {}, component: booking },
    { name: 'Contact', path: '/contact', data: {}, component: contact },

];