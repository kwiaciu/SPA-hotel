import $ from 'jquery';
import { cartSummary } from './cart-summary';


export const cartSummaryOverlay = () => {
    const cartSummaryOverlay = $(`<aside class="overlay" id="cart-summary-overlay"></aside>`);
    cartSummaryOverlay.append(cartSummary())

    // ==EVENT HANDLERS== //
    $(cartSummaryOverlay).on('click', '.close-summary', function () {
        $('#cart-summary-overlay').remove();
        $(cartSummaryOverlay).off('click', '.close-summary')
    })

    return cartSummaryOverlay
}