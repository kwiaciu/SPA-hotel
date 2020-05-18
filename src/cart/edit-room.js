import $ from 'jquery'
import { dateInputCart } from './date-input-cart';


export const editRoom = (room, quantity, stringDates) => {
    const dates = JSON.parse(stringDates)
    const firstDay = dates[0]
    const lastDay = dates[dates.length - 1]
    const editRoom = $(`<li id='${room.id}-edit-li' class="room-li"></li>`);
    editRoom
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
            </div>
        </article>
        `)
        // .append(`<p class="unavailable">Room not available on selected dates</p>`)
        .append(`<p id='price'>Total price for room: ${parseInt(room.price) * parseInt(quantity)} </p>`)
        .append($(dateInputCart(firstDay, lastDay, room.id)))
        .append(`<button id="${room.id}-add-edit" class="btn cart-add edit" disabled>Save</button>`)
        .append(`<button id="${room.id}-delete" class="btn delete">Delete from cart</button>`)
        .append('<button class="btn cancel">Cancel changes</button>')

    $(editRoom).on('change', () => {
        $('#price').text(`Total price for room:  ${parseInt(room.price) * parseInt($('#departure-date-cart').attr('data-quantity'))}`)
    })
    return editRoom
}