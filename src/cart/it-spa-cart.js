import $ from 'jquery';
import { Cart } from './cart-cookie-handler';
import { cartList } from './cart-list';
import { customAlert } from '../common/custom-alert';

export const itSpaCart = () => {
    const cart = new Cart();
    const cartComponent = $(`
    <aside id="cart">
        <button id="show-cart" class="btn"><i class="material-icons icon">shopping_cart</i> Cart</button>
    </aside>
    `)
    const cartContainer = $('<div id="cart-container" class="cart"></div>')
    cartContainer
        .append(cartList())
        .append('<button class="btn" id="clear-cart"><i class="material-icons icon">clear</i> Clear</button>')
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

    return cartComponent
}