import $ from 'jquery';

export const sectionBreak = (text) => {

    const sectionBreak = $(`<section class="section-break"></section>`);
    sectionBreak
        .append(`<p class="section-break-paragraph">${text}</p>`);

    return sectionBreak;
};

     