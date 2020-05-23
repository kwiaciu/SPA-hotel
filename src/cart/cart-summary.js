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
            .append('<button class="close-summary" class="btn"><i class="material-icons icon">clear</i> Back</button>')
            .append(cartList())

        $(cartSummary).find('#summary-button').remove();
        $(cartSummary).find('#clear-cart').remove();
        cartSummary

            .append(`
            <div class="buttons">
                <button id="order" class="big-btn"><i class="material-icons icon">publish
                </i> Confirm order</button>
                <button class="btn" id="clear-cart"><i class="material-icons icon">remove_shopping_cart
                </i> Clear</button>
                <button class="close-summary" class="btn"><i class="material-icons icon">clear</i> Back</button>
            </div>`)


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