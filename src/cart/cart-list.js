import $ from 'jquery';
import { databaseAccess } from '../common/database-access';
import { cartListItem } from './cart-list-item';
import { Cart } from './cart-cookie-handler';
import { cartElementEdit } from './cart-element-edit';
import { cartSummaryOverlay } from './cart-summary-overlay';
import { customAlert } from '../common/custom-alert';


export const cartList = () => {
    const cart = new Cart();

    const cartValue = cart.getValue(); // value of cookies
    const isCartNotEmpty = cart.isNotEmpty();
    const cartList = $('<ul id="cart-list" class="list-group"></ul>')

    if (isCartNotEmpty) {
        const totalPrice = $('<h3>Total:</h3>')
        let total = 0;
        cartValue         // value of cookies
            .map((cartCookieElement) => {
                if (cartCookieElement.id.charAt(0) === "1") {
                    databaseAccess.getRoom(cartCookieElement.id)
                        .then(room => {
                            cartList
                                .prepend(cartListItem(room, cartCookieElement.quantity, cartCookieElement.dates));
                            total += room.price * cartCookieElement.quantity
                            totalPrice.text(`Total: ${total}`)

                        }
                        )
                } else if (cartCookieElement.id.charAt(0) === "5") {
                    databaseAccess.getTreatment(cartCookieElement.id)
                        .then(treatment => cartList
                            .prepend(cartListItem(treatment, cartCookieElement.quantity)
                            ))
                } else {
                    console.warn('error')
                }
            })
        cartList.append(totalPrice)
        cartList.append($('<button id="summary-button" class="btn">Summary</button>'))

    } else {
        cartList.append($('<li>Your basket is empty</li>'))
    }


    // ==EVENT HANDLERS== //

    // button id and database element id are the same
    $(cartList).on('click', '.delete', function () {
        const buttonId = $(this).attr('id').slice(0, 3);
        cart.removeFromCart({ "id": buttonId });
        // $('.overlay').remove();
        customAlert('Room removed from cart');
        
    });

    $(cartList).on('click', '.edit', function () {
        const elementId = $(this).attr('data-id');
        const elementQuantity = $(this).attr('data-quantity');
        const elementDates = $(this).attr('data-dates');
        $('main').append(cartElementEdit(elementId, elementQuantity, elementDates));
    });

    $(cartList).on('click', '#summary-button', function () {
        $('main').append(cartSummaryOverlay())
    })



    return cartList
}

