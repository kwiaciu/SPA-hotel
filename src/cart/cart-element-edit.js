import $ from 'jquery';
import { dateInputCart } from './date-input-cart';
import { roomsListItem } from '../rooms/rooms-list-item';
import { databaseAccess } from '../common/database-access';
import { Cart } from './cart-cookie-handler';
import { customAlert } from '../common/custom-alert';

export const cartElementEdit = (cartElementId, quantity, stringDates) => {
    const cart = new Cart();
    const cartEditContainer = $(`<aside class="overlay" id="cart-room-edit"></aside>`);
    const cartEdit = $(`<div id="edit-cart"></div>`)
    console.log(cartElementId)
    if (cartElementId.charAt(0) === "1") {
        const dates = JSON.parse(stringDates)
        const firstDay = dates[0]
        const lastDay = dates[dates.length - 1]
        const getRoom = () => {
            databaseAccess.getRoom(cartElementId)
                .then(room => {
                    const roomLiElement = roomsListItem(room);
                    $(`<p id='price'>Total price for room: ${parseInt(room.price) * parseInt(quantity)} </p>`).insertBefore($(roomLiElement).find('.cart-add'));
                    $(dateInputCart(firstDay, lastDay, room.id)).insertBefore($(roomLiElement).find('.cart-add'))
                    $(roomLiElement).find('.unavailable').remove();
                    $(roomLiElement).find('.cart-add').text('Save changes').addClass('edit')
                    $(roomLiElement).append(`<button id="${room.id}-delete" class="btn delete">Delete from cart</button>`)
                    $(roomLiElement).append('<button class="btn cancel">Cancel changes</button>')
                    cartEdit.append(roomLiElement);

                    // change total price on changing input
                    $(roomLiElement).on('change', () => {
                        $('#price').text(`Total price for room:  ${parseInt(room.price) * parseInt($('#departure-date-cart').attr('data-quantity'))}`)
                    })
                })
        }
        getRoom();
    }
    //TODO: rewrite it as another function - not roomsListItem -> too many dynamic changes 


    cartEditContainer.append(cartEdit)


    // ==EVENT HANDLERS== //

    $('main').on("click", ".overlay", function (event) {
        if (!($(event.target).is("button"))) {
            if (!document.getElementById('edit-cart').contains(event.target)) {
                console.log('removed')
                $('.overlay').remove();
                $('.overlay').empty();
                $('main').off("click", ".overlay");
                $('main').off("click", ".overlay");
            }
        }
    })

    $('main').on("click", ".cancel", function (event) {
        $('.overlay').remove();
        $('main').off("click", ".overlay");
    })
    
    $('main').on('click', '.edit', function () {
        const buttonId = $(this).attr('id').slice(0, 3);
        const quantity = $('#departure-date-cart').attr('data-quantity')
        const dates = $('#departure-date-cart').attr('data-dates')
        cart.removeFromCart({ "id": buttonId });
        cart.addRoom({
            "id": buttonId,
            "quantity": quantity,
            "dates": dates
        });
        $('.overlay').remove();
        $('main').off('click', '.edit');
        $('main').off('click', '.overlay');
        customAlert('Room was updated')
    });


    return cartEditContainer



}