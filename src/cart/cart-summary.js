import $ from 'jquery';
import { cartList } from './cart-list';
import { Login } from '../login/login-cookie-handler';
import { databaseAccess } from '../common/database-access';
import { order } from './order';
import { Cart } from './cart-cookie-handler';

export const cartSummary = () => {
    // logged user handling 
    const cartCookie = new Cart();
    const userCookie = new Login();
    const loggedIn = userCookie.exists() && userCookie.isNotEmpty();

    let userData = null
    if (loggedIn) {
        databaseAccess.getUser(userCookie.getValue().login).then(response => userData = response.data);
    }
    //

    // cart summary
    const cartSummary = $('<section id="cart-summary"></section>')
    if (cartCookie.isNotEmpty()) {
        cartSummary
            .append('<button class="close-summary" class="btn">back</button>')
            .append(cartList())
            .append('<button id="order" class="big-btn">Confirm order</button>')
            .append('<button class="close-summary" class="btn">back</button>')
        $(cartSummary).find('#summary-button').remove();
    } else {
        cartSummary.append('<h3>Your cart is empty</h3>')
    }
    // ==EVENT HANDLERS== //

    $(cartSummary).on('click', '#order', function () {
        $(cartSummary).empty();
        $(cartSummary).append(order(userData))
    })


    return cartSummary
}