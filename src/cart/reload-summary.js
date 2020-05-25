import $ from 'jquery';
import { cartSummary } from './cart-summary';


export const reloadSummary = () => {
    if ($('#cart-summary').length && $('#cart-summary-overlay').length && $('#profile-page').length) {
        const hidden = $('#profile-page').find('#cart-summary').hasClass('hidden')
        $('#cart-summary').remove()
        $('#cart-summary').remove()
        $('#profile-page').append(cartSummary());
        if (hidden) { $('#cart-summary').addClass('hidden') }
        $('#cart-summary-overlay').append(cartSummary());

    } else if ($('#cart-summary').length && $('#cart-summary-overlay').length) {
        $('#cart-summary').remove()
        $('#cart-summary-overlay').append(cartSummary());
    } else if ($('#cart-summary').length && $('#profile-page').length) {
        const hidden = $('#profile-page').find('#cart-summary').hasClass('hidden')
        $('#cart-summary').remove()
        $('#profile-page').append(cartSummary());
        if (hidden) { $('#cart-summary').addClass('hidden') }

    } else {
        console.log('else')
    }
}