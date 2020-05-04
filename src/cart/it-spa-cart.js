import $ from 'jquery';
import { Cart } from './cart-cookie-handler';
import { cartList } from './cart-list';

export const itSpaCart = () => {
    // const cart = new Cart();
    const cartComponent = $(`
    <aside id="cart">
    <button id="show-cart" class="btn"><i class="icon">Cart</i></button>
    </aside>
    `)
    const cartContainer = $('<div id="cart-container" class="cart"></div>')
    cartContainer
        .append(cartList())
    cartComponent.append(cartContainer)

    
    // ==EVENT HANDLERS== //
    $(cartComponent).on({
        mouseenter: function () { $('#cart-container').slideDown() },
        mouseleave: function () { $('#cart-container').slideUp() },
    });

    document.addEventListener('custom', () => {
        $('#cart').remove();
        $('main').before(itSpaCart());
    });


    // $(cartComponent).on('custom', () => {
    //     // console.log('Your custom event was heard indeed.')
    //     $('#cart').remove();
    //     $('main').before(itSpaCart());
    // })



    return cartComponent
}