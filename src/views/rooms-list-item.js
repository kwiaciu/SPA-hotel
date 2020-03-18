import $ from 'jquery';

export const roomsListItem = (room) => {
    const li = $('<li class="list-group-item"></li>');
    li.text(room.name);
    li.append(`<p>Price: ${room.price}</p>`)

    return li;
};
