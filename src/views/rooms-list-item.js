import $ from 'jquery';

export const roomsListItem = (room) => {
    const li = $('<li class="list-group-item"></li>');
    li.text(room.name);
    li.append(`<img class="img room" src="${room.imgsrc}" alt="Photo of room">`)
    li.append(`<p>Price: ${room.price}</p>`)

    return li;
};
