import $ from 'jquery';

export const roomsListItem = (room) => {
    const li = $(`<li id='${room.id}-li' class="list-group-item"></li>`);
    li.append(`<img class="img" src="${room.imgsrc}" alt="Photo of room">`)
        .append(`<h3 class="room-header">${room.name}</h3>`)
        .append(`<p>${room.desc}</p>`)
        .append(`<p>Number of beds: ${room.beds}</p>`)
        .append(`<p>Number of guests: ${room.guests}</p>`)
        .append(`<p>Price: ${room.price}</p>`)
        .append(`
        <p class="unavailable">Room not available on selected dates</p>
        <button id="${room.id}-add" class="btn cart-add" disabled>Add </button>
        `)
    // $(li).css('order', room.id);
    return li;
};
