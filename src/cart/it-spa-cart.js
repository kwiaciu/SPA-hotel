import $ from 'jquery';
import { Cart } from './cart-cookie-handler';
import { cartList } from './cart-list';

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
    cartComponent.append(cartContainer)


    // == EVENT HANDLERS == //
    $(cartComponent).on({
        mouseenter: function () {
            $('#cart-container').slideDown()
            $('#show-cart').addClass('cart-visible')
        },
        mouseleave: function () {
            $('#cart-container').slideUp()
            $('#show-cart').removeClass('cart-visible')

        },
    });

    $(document).on('custom', () => {
        $('#cart').remove();
        $(document).off('custom')
        $('main').before(itSpaCart());
        console.log('custom')
    });



    return cartComponent
}