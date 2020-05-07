import $ from 'jquery';
import { databaseAccess } from '../common/database-access';
import { customAlert } from '../common/custom-alert';

export const roomsIndex = () => {
    const roomsIndex = $('<ul id="rooms-index" class="list-group"></ul>');
    // const li = $(`<li id="${room.id}-index"class="index">${room.name}</li>`)

    databaseAccess.getRooms()
        .then(rooms => rooms.map(room => $(`<li id="${room.id}-index" class="index" tabindex="0">${room.name}</li>`)))
        .then(roomsIndexItems => roomsIndex.append(roomsIndexItems));


    $(roomsIndex).on('click', '.index', function () {
        const buttonId = $(this).attr('id').slice(0, 3) + '-li';
        document.getElementById(buttonId).scrollIntoView({ behavior: 'smooth'});
        console.log($(buttonId).height())
        customAlert(`Scrolled to ${buttonId}`)
    });


    return roomsIndex
}