import $ from 'jquery';

import { routeChange } from '../../router/route-change';
import { routes } from '../../router/routes';

export const sectionRooms = () => {
    const routeRooms = routes.find((route) => route.name === 'Rooms');

    const sectionRooms = $('<section id="section-rooms"></section>');
    const roomsDiv = $('<div class="home-rooms"></div>');
    const roomsButton = $('<a class="big-btn"></a>').text(routeRooms.name).on('click', () => roomsDiv.trigger(routeChange, { path: routeRooms.path }));
    const buttonWrapper = $('<div class="wrapper"></div>')
    buttonWrapper.append(roomsButton);
    sectionRooms
        .append('<figure class="carousel"><img class="img" src="../dist/main02.jpg" alt="room photo"></figure>')
    roomsDiv
        .append(`<h2 class=""front-page-header-top">Lorem, ipsum dolor sit amet consectetur adipisicing elit.</h2>
                 <p class="front-page-desc">Lorem ipsum dolor sit amet...</p>`)
        .append(buttonWrapper)
    sectionRooms.append(roomsDiv);

    return sectionRooms
}