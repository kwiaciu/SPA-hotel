import $ from 'jquery';

export const treatmentsListItem = (treatment) => {
    const li = $('<li></li>');
    
    const ul = $('<ul class="list-group-item"></ul>');
    ul.append(`<li><img class="img treatment" src="${treatment.imgsrc}" alt="Photo of treatment"></li>`)
    ul.append(`<li>${treatment.name}</li>`);
    ul.append(`<li>Price: ${treatment.price}</li>`)
    ul.append(`<li>Duration: ${treatment.time}</li>`)
    ul.append(`<li>Area: ${treatment.area}</li>`)
    li.append(ul);
    return li;
};
