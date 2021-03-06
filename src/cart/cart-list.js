import $ from 'jquery';
import { databaseAccess } from '../common/database-access';
import { cartListItem } from './cart-list-item';
import { Cart } from './cart-cookie-handler';
import { cartElementEdit } from './cart-element-edit';
import { cartSummaryOverlay } from './cart-summary-overlay';
import { customAlert } from '../common/custom-alert';
import { reloadSummary } from './reload-summary';


export const cartList = () => {
    const cart = new Cart();

    const cartValue = cart.getValue(); // value of cookies
    const isCartNotEmpty = cart.isNotEmpty();
    const cartList = $('<ul id="cart-list" class="list-group"></ul>')

    if (isCartNotEmpty) {
        const totalPrice = $('<h3 class="total">Total:</h3>')
        let total = 0;
        cartValue         // value of cookies
            .map((cartCookieElement) => {
                if (cartCookieElement.id.charAt(0) === "1") {
                    databaseAccess.getRoom(cartCookieElement.id)
                        .then(room => {
                            cartList
                                .prepend(cartListItem(room, cartCookieElement.quantity, cartCookieElement.dates));
                            total += room.price * cartCookieElement.quantity
                            totalPrice.html(`Total: ${total}<i>ћ
                            </i>`)

                        }
                        )
                } else if (cartCookieElement.id.charAt(0) === "5") {
                    databaseAccess.getTreatment(cartCookieElement.id)
                        .then(treatment => {
                            cartList
                                .prepend(cartListItem(treatment, cartCookieElement.quantity));
                            total += treatment.price * cartCookieElement.quantity
                            totalPrice.html(`Total: ${total}<i>ћ
                            </i>`)
                        }
                        )
                } else {
                    console.warn('error')
                }
            })
        cartList
            .append(totalPrice)
            .append(`
            <div class="buttons">
                <button id="summary-button" class="btn">Summary</button>
                <button class="btn" id="clear-cart"><i class="material-icons icon">remove_shopping_cart</i> Clear</button>
            </div>
            `)

    } else {
        cartList.append($('<li>Your basket is empty</li>'))
    }

    // ==EVENT HANDLERS== //

    // button id and database element id are the same
    $(cartList).on('click', '.delete', function () {
        const buttonId = $(this).attr('id').slice(0, 3);
        cart.removeFromCart({ "id": buttonId });
        reloadSummary();
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

    $(cartList).on('click', '#clear-cart', function () {
        cart.empty();
        customAlert('Cart cleared!')
    });



    return cartList
}

