import $ from 'jquery';

export const treatmentsListItem = (treatment) => {

    const li = $('<li class="list-group-item"></li>');
    li
        .append(`<img class="img treatment" src="${treatment.imgsrc}" alt="Photo of treatment"></img>`)
        .append(`<h3 class="treatment-header">${treatment.name}</h3>`)
        .append(`<p>${treatment.desc}</p>`)
        .append(`<p>Area: ${treatment.area}</p>`)
        .append(`<p>Duration: ${treatment.time}</p>`)
        .append(`<p>Price: ${treatment.price}</p>`)
        .append(`<button id="${treatment.id}" class="btn cart-add">Add</button>`);
    return li;
};
