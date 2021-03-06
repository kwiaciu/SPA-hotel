import $ from 'jquery';
import { customAlert } from '../common/custom-alert';
import { Cart } from './cart-cookie-handler';
import { cartSummary } from './cart-summary'
import { orderSummary } from './order-summary';

export const orderFormHandler = (container) => {
    const cart = new Cart();
    $(container).on("submit", "#order-form", function (event) {
        event.preventDefault();
        const mail = $('#mail-input').val();
        const phone = $('#phone-input').val();
        const city = $('#city-input').val();
        const street = $('#street-input').val();
        const code = $('#code-input').val();
        const cartValue = cart.getValue();
        const data = {
            "id": mail,
            "mail": mail,
            "city": city,
            "street": street,
            "code": code,
            "phone": phone,
            "previousOrders": [JSON.stringify(cartValue)],
        };
        setTimeout(() => {
            customAlert('New order created. Nothing more happened.')
        }, 2250)
        $('#cart-summary').remove();
        $('#cart-summary-overlay').remove();
        $('#cart-summary').off();
        $('#cart-summary-overlay').off();
        $('main').empty();
        $('main').append(orderSummary(data))
        console.log(data)
    });


    $(container).on('click', '.cancel', function () {
        $('#cart-summary').remove();
        $(container).off('click');
        $(container).off('submit');
        if (document.getElementById('cart-summary-overlay')) {
            $('#cart-summary-overlay').append(cartSummary())
        } else {
            $('#profile-page').append(cartSummary())
        }

    })
}