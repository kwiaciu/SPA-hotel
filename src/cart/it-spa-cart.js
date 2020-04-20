import $ from 'jquery';
import { Cart } from './cart-cookie-handler';
import { cartList } from './cart-list';
import { cartHandlers } from './cart-handlers';

export const itSpaCart = () => {
    const cart = new Cart();

    //jak się dowiedzieć że nastąpiła zmiana w cookies


    // document.addEventListener('click', event => {
    //     console.log(event);

    //     // jeśli zaistniała zmiana w cookies, ponownie pobieram zawartość kosza
    //     const newContent = cart.getValue();
    //     setTimeout(() => console.log(cart.getValue()), 1000)
    //     // i poprawiam wyświetlane przez kosz informacje
    // });

    const cartComponent = $(`
    <aside id="cart">
    <button id="show-cart" class="btn"><i class="icon">Cart</i></button>
    </aside>
    `)
    const cartContainer = $('<div id="cart-container" class="cart"></div>')
    cartContainer
        .append(cartList())
        .append($('<div><h2>Summary</h2></div>'));
    cartComponent.append(cartContainer)
    cartHandlers();
    return cartComponent
}