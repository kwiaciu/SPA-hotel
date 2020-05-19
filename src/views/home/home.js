import $ from 'jquery';
import { sectionLanding } from './section-landing';
import { sectionBreak } from './section-break';
import { sectionRooms } from './section-rooms';
import { sectionSpa } from './section-spa';


export const home = () => {
    const fragment = $(new DocumentFragment());
    fragment.append(sectionLanding())
        .append('<section class="home"></section>')
        .append(sectionBreak('Something about hotel. Sit culpa quo officiis ad vero excepturi animi, placeat iusto dignissimos vitae repudiandae facere corrupti soluta unde illum reiciendis libero mollitia voluptates?'))
        .append(sectionRooms())
        .append(sectionBreak('And here bs about spa placeat iusto dignissimos, vitae repudiandae facere corrupti soluta unde illum reiciendis libero mollitia voluptates?'))
        .append(sectionSpa())

    return fragment;
};
