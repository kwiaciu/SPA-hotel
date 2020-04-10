import $ from 'jquery';

import { routeChange } from '../router/route-change';
import { routes } from '../router/routes'

export const home = () => {
    const fragment = $(new DocumentFragment());
    const sectionHome = $(`<section id="hero" style="background-image: url('../dist/main01.jpg')"></section>`);
    sectionHome
        .append('<h2 class="front-page-header-top">Lorem, ipsum dolor sit amet consectetur adipisicing elit.</h2>')
        .append('<h2 class="front-page-header-bottom">Iure quasi repellendus possimus fugit </h2>')
        .append('<p class="front-page-desc">Lorem ipsum dolor sit amet...</p>');
    fragment.append(sectionHome);

    const sectionBreakOne = $(`<section class="section-break"></section>`);
    sectionBreakOne
        .append('<p class="section-break-paragraph">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit culpa quo officiis ad vero excepturi animi, placeat iusto dignissimos vitae repudiandae facere corrupti soluta unde illum reiciendis libero mollitia voluptates?</p>');
    fragment.append(sectionBreakOne);

    const sectionRooms = $('<section id="section-rooms"></section>');
    const roomsDiv =$('<div class="home-rooms"></div>');
    const roomsButton = $('<a class="big-btn"></a>').text(routes[1].name).on('click', () => roomsDiv.trigger(routeChange, { path: routes[1].path })); 
    const buttonWrapper1 = $('<div class="wrapper"></div>')
    buttonWrapper1.append(roomsButton);
    sectionRooms
        .append('<figure class="carousel"><img class="img" src="../dist/main02.jpg" alt="room photo"></figure>')
    roomsDiv    
        .append(`<h2 class=""front-page-header-top">Lorem, ipsum dolor sit amet consectetur adipisicing elit.</h2>
                 <p class="front-page-desc">Lorem ipsum dolor sit amet...</p>`)
        .append(buttonWrapper1)
    sectionRooms.append(roomsDiv);
    fragment.append(sectionRooms);

    return fragment;
};
