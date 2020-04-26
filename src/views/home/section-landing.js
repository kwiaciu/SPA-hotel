import $ from 'jquery';


export const sectionLanding = () => {

    const sectionLanding = $(`<section id="hero" class="home carousel" style="background-image: url('../dist/main01.jpg')"></section>`);
    sectionLanding
        .append('<h2 class="front-page-header-top">Lorem, ipsum dolor sit amet consectetur adipisicing elit.</h2>')
        .append('<h2 class="front-page-header-bottom">Iure quasi repellendus possimus fugit </h2>')
        .append('<p class="front-page-desc">Lorem ipsum dolor sit amet...</p>');

    return sectionLanding
}