import $ from 'jquery';
import { Cart } from './cart-cookie-handler';
import { cartList } from './cart-list';

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

    // form to add things to basket -> for testing 
    // const form = $(`<form id="add"><input type="text" id="field" value="add"></input><input id="sub" type="submit" value="submit"></input></form>`);
    // $(form).on('submit', (e) => {
    //     e.preventDefault();
    //     cart.addToCart({ 'id': $('#field').val(), 'quantity': '5352' })
    // });

    cartContainer
        // .append(form)
        .append(cartList())
        .append($('<div><h2>Summary</h2></div>'));

        cartComponent.append(cartContainer)
    return cartComponent


}