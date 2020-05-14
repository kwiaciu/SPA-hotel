import $ from 'jquery';
import { carousel } from '../../common/carousel';


export const sectionLanding = () => {

    const sectionLanding = $(`<section id="hero" class="home " style=""></section>`);
    sectionLanding
        .append(`<img class="hero-carousel" src="src/assets/main01.jpg" alt=""> `)
        .append(`<img class="hero-carousel invisible" src="src/assets/main03.jpg" alt=""> `)
        .append(`<img class="hero-carousel invisible" src="src/assets/main02.jpg" alt=""> `)
        .append('<h2 class="front-page-header-top">Lorem, ipsum dolor sit amet consectetur adipisicing elit.</h2>')
        .append('<h2 class="front-page-header-bottom">Iure quasi repellendus possimus fugit </h2>')
        .append('<p class="front-page-desc">Lorem ipsum dolor sit amet...</p>');


    const interval = setInterval(() => {
        carousel('.hero-carousel')
        console.log(interval)

    }, 1000)

    $('body').on('routechange', () => clearInterval(interval));

    return sectionLanding
}