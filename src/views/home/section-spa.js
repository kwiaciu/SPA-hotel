import $ from 'jquery';
import { routeChange } from '../../router/route-change';
import { routes } from '../../router/routes';

export const sectionSpa = () => {
    const routeTreatments = routes.find((route) => route.name === 'Treatments');
    const sectionSpa = $('<section id="section-spa" class="home"></section>');
    const spaDiv = $('<div class="home-spa"></div>');
    const treatmentsButton = $('<button class="big-btn"></button>').text(routeTreatments.name).on('click', () => spaDiv.trigger(routeChange, { path: routeTreatments.path }));
    const buttonWrapper = $('<div class="wrapper"></div>')
    buttonWrapper.append(treatmentsButton);
    spaDiv
        .append(`<h3 class=""front-page-header-top">Lorem, ipsum dolor sit amet consectetur adipisicing elit.</h3>
                 <p class="front-page-desc">Lorem ipsum dolor sit amet...</p>`)
        .append(buttonWrapper);
    sectionSpa
        .append(`
        <figure class="carousel">
                <img class="img" src="./spa03.jpg" alt="spa photo">
                <img class="img" src="./spa07.jpg" alt="spa photo">
                <img class="img" src="./spa10.jpg" alt="spa photo">
        </figure>`)
        .append(spaDiv);
    return sectionSpa
}