import $ from 'jquery';
import { cartSummary } from './cart-summary';

export const cartSummaryOverlay = () => {
    const cartSummaryOverlay = $(`<aside class="overlay" id="cart-summary-overlay"></aside>`);

    cartSummaryOverlay.append(cartSummary())


    // ==EVENT HANDLERS== //

    $('main').on("click", ".overlay", function (event) {
        if (!document.getElementById('cart-summary').contains(event.target)) {
            $('.overlay').remove();
            $('main').off("click", ".overlay");
            // $('main').off("submit", "#login-form");
            // $('main').off("click", "#link-register")
        }
    })

    return cartSummaryOverlay
}