import $ from 'jquery';

export const cartSummary = () => {
    const cartSummary = $('<section id="cart-summary"></section>')
    cartSummary
        .append('<p>coming soon</p>')
    return  cartSummary
}