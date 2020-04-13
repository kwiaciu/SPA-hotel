import $ from 'jquery';

// import { routeChange } from '../../router/route-change';
// import { routes } from '../../router/routes';
import { sectionLanding } from './sectionLanding';
import { sectionBreak } from './sectionBreak';
import { sectionRooms } from './sectionRooms';
import { sectionSpa } from './sectionSpa';


export const home = () => {
    const fragment = $(new DocumentFragment());
    fragment.append(sectionLanding());
    fragment.append(sectionBreak('Something about hotel. Sit culpa quo officiis ad vero excepturi animi, placeat iusto dignissimos vitae repudiandae facere corrupti soluta unde illum reiciendis libero mollitia voluptates?'));
    fragment.append(sectionRooms());
    fragment.append(sectionBreak('And here bs about spa placeat iusto dignissimos, vitae repudiandae facere corrupti soluta unde illum reiciendis libero mollitia voluptates?'));
    fragment.append(sectionSpa());


    return fragment;
};
