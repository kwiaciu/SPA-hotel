import $ from 'jquery';

export const home = () => {
    const fragment = $(new DocumentFragment());
    const section = $(`<section id="home" style="background-image: url('../dist/main01.jpg')"></section>`);
    fragment.append(section);
    section
        .append('<h2 class="front-page-header">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure quasi repellendus possimus fugit </h2>')
        .append('<p>Lorem ipsum dolor sit amet...</p>');

    return fragment;
};
