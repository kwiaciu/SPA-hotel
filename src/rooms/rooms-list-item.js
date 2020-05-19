import $ from 'jquery';

export const roomsListItem = (room) => {
    const li = $(`<li id='${room.id}-li' class="room-li"></li>`);
    li
        .append(`
        <article class="room-container">
            <figure class="room-photo">
                <img class="img" src="${room.imgsrc}" alt="Photo of room">
            </figure>
            <div class="room-data">
                <h3 class="room-header">${room.name}</h3>
                <p class="room-desc">${room.desc}</p>
                <div class="room-info">
                    <ul>
                        <li>
                            <p>Beds:</p>
                            <p>${room.beds}</p>
                        </li>
                        <li>                  
                            <p>Guests:</p>
                            <p>${room.guests}</p>
                        </li>
                    </ul>
                    <div class="price">
                        <h3>${room.price}<i>ћ</i></h3>
                        <p>per night</p>
                    </div>

                </div>
                <p class="unavailable">Room not available on selected dates</p>
                <button id="${room.id}-add" class="btn cart-add" disabled>Add </button>
            </div>
        </article>
        `)
        .append(``)
        .append(``)
    return li;
};
