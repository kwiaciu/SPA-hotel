import $ from 'jquery';
import { cartList } from './cart-list';

export const cartSummary = () => {
    const cartSummary = $('<section id="cart-summary"></section>')
    cartSummary
        .append(cartList)
        .append('<h2>Confirm order</h2>')
    $(cartSummary).find('#summary-button').remove();
    return  cartSummary
}