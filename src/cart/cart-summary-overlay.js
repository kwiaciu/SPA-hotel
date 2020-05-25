import $ from 'jquery';
import { cartSummary } from './cart-summary';


export const cartSummaryOverlay = () => {
    const cartSummaryOverlay = $(`<aside class="overlay" id="cart-summary-overlay"></aside>`);
    cartSummaryOverlay.append(cartSummary())

    // ==EVENT HANDLERS== //
    $('main').on("click", "#cart-summary-overlay", function (event) {
        if (!($(event.target).is("button"))) {
            if (!document.getElementById('cart-summary').contains(event.target)) {
                $("#cart-summary-overlay").remove();
                $('main').off("click", "#cart-summary-overlay");
                $('main').off("click", ".close-summary");
            }
        }
    })


    $(cartSummaryOverlay).on('click', '.close-summary', function () {
        $('#cart-summary-overlay').remove();
        $(cartSummaryOverlay).off('click', '.close-summary')
    })

    $(document).keyup(function (e) {
        if (e.key === "Escape") { $('.close-summary').trigger("click") };   // esc
    });

    return cartSummaryOverlay
}