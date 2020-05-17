import $ from 'jquery';
import { cartList } from './cart-list';
import { Cart } from './cart-cookie-handler';

export const orderSummary = (data) => {
    const cart = new Cart();
    const orderSummary = $('<section></section>')
    orderSummary.append(`
    <h2>Order confirmation</h2>
    <article>
        <h3>Your data</h3>
        <ul>
            <li>
                <p>E-mail:</p>
                <p><i>${data.mail}</i></p>
            </li>
            <li>
                <p>Phone number:</p>
                <p><i>${data.phone}</i></p>
            </li>
            <li>
                <p>City:</p>
                <p><i>${data.city}</i></p>
            </li>
            <li>
                <p>Street:</p>
                <p><i>${data.street}</i></p>
            </li>
            <li>
                <p>Code:</p>
                <p><i>${data.code}</i></p>
            </li>
        </ul>
    </article>
        `)

    const orderedItems = cartList()
    const button = (`<button class="btn go-back")">Go back to home page</button>`)

    orderSummary.append(`<h3> Your items</h3 > `, orderedItems)
    $(orderSummary).find('button').remove();
    orderSummary.append(button)
    cart.empty()

    $(orderSummary).on('click', 'button', () => {
        console.log('clicked')
        orderSummary.trigger('routechange', { path: '/' })
        location.reload();
    })

    return orderSummary
}