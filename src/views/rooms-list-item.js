import $ from 'jquery';

export const roomsListItem = (room) => {
    const li = $('<li class="list-group-item"></li>');
    li.append(`<img class="img" src="${room.imgsrc}" alt="Photo of room">`)
    li.append(`<h3 class="room-header">${room.name}</h3>`);
    li.append(`<p>${room.desc}</p>`)
    li.append(`<p>Number of beds: ${room.beds}</p>`)
    li.append(`<p>Number of guests: ${room.guests}</p>`)
    li.append(`<p>Price: ${room.price}</p>`)
    li.append(`<button id="${room.id}" class="btn cart-add">Add</button>`)

    return li;
};
