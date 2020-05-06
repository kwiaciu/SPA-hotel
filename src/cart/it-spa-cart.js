import $ from 'jquery';
import { Cart } from './cart-cookie-handler';
import { cartList } from './cart-list';
import { customAlert } from '../common/custom-alert';

export const itSpaCart = () => {
    const cart = new Cart();
    const cartComponent = $(`
    <aside id="cart">
    <button id="show-cart" class="btn"><i class="icon">Cart</i></button>
    </aside>
    `)
    const cartContainer = $('<div id="cart-container" class="cart"></div>')
    cartContainer
        .append('<button class="btn" id="clear-cart">Clear</button>')
        .append(cartList())
    cartComponent.append(cartContainer)

    
    // ==EVENT HANDLERS== //
    $(cartComponent).on({
        mouseenter: function () { $('#cart-container').slideDown() },
        mouseleave: function () { $('#cart-container').slideUp() },
    });

    $(document).on('custom', () => {
        $('#cart').remove();
        $(document).off('custom')
        $('main').before(itSpaCart());
        console.log('custom')
    });

    $(cartComponent).on('click', '#clear-cart', function () {
        cart.empty();
        customAlert('Cart cleared!')
    });

    // $(cartComponent).on('custom', () => {
    //     // console.log('Your custom event was heard indeed.')
    //     $('#cart').remove();
    //     $('main').before(itSpaCart());
    // })



    return cartComponent
}