import $ from 'jquery';
import { databaseAccess } from '../common/databaseAccess';
import { cartListItem } from './cart-list-item';
import { Cart } from './cart';


export const cartList = () => {
    const cart = new Cart();

    const cartValue = cart.getValue(); // value of cookies
    const isCartNotEmpty = cart.isNotEmpty();
    const cartList = $('<ul id="cart-list" class="list-group"></ul>')

    if (isCartNotEmpty) {
        cartValue         // value of cookies
            .map((cartCookieElement) => {
                if (cartCookieElement.id.charAt(0) === "1") {
                    databaseAccess.getRoom(cartCookieElement.id)
                    .then(room => cartList
                        .append(cartListItem(room, cartCookieElement.quantity)
                        ))
                } else if (cartCookieElement.id.charAt(0) === "5"){
                    databaseAccess.getTreatment(cartCookieElement.id)
                    .then(treatment => cartList
                        .append(cartListItem(treatment, cartCookieElement.quantity)
                        ))
                } else {
                    console.log('error')
                }

            })
    } else {
        cartList.append($('<li>Your basket is empty</li>'))
    }

    // button id and database element id are the same
    $(cartList).on('click', 'button', function () {
        const buttonId = $(this).attr('id');
        cart.removeFromCart({"id":buttonId});

    });


    return cartList
}

