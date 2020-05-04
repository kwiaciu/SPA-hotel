import $ from 'jquery';
import { dateInputCart } from './date-input-cart';
import { roomsListItem } from '../rooms/rooms-list-item';
import { databaseAccess } from '../common/database-access';

export const cartElementEdit = (cartElementId, quantity, stringDates) => {
    const dates = JSON.parse(stringDates)
    const firstDay = dates[0]
    const lastDay = dates[dates.length - 1]

    const cartEditContainer = $(`<aside class="overlay" id="cart-room-edit"></aside>`);
    const cartEdit = $(`<div id="edit-cart"></div>`)

    databaseAccess.getRoom(cartElementId)
        .then(room => {
            const roomLiElement = roomsListItem(room);
            $(dateInputCart(firstDay, lastDay, room.id)).insertBefore($(roomLiElement).find('.cart-add'))
            $(roomLiElement).find('.cart-add').text('Save changes')
            $(roomLiElement).append('<button class="btn">Delete from cart</button>')
            $(roomLiElement).append('<button class="btn">Cancel changes</button>')
            cartEdit.append(roomLiElement);

        })

    cartEditContainer.append(cartEdit)


    // ==EVENT HANDLERS== //

    $('main').on("click", ".overlay", function (event) {
        if (!document.getElementById('edit-cart').contains(event.target)) {
            $('.overlay').remove();
            $('main').off("click", ".overlay");
            // $('main').off("submit", "#login-form");
            // $('main').off("click", "#link-register")
        }
    })

    return cartEditContainer



}