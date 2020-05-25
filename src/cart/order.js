import $ from 'jquery';
import { orderFormHandler } from './order-handler';
import { cartSummary } from './cart-summary';

export const order = (userData) => {
    if (userData === null) {
        userData = {
            mail: '',
            phone: '',
            city: '',
            street: '',
            code: '',
        }
    }
    const orderPage = $('<div id="order-page"></div>');
    const orderForm = $('<form action="" id="order-form"></form>');
    const mail = $(`
    <label for="mail-input">E-mail</label>
    <input type="email" id="mail-input" value="${userData.mail}" required>
    `)
    const phone = $(`
    <label for="phone-input">Phone</label>
    <input type="tel" id="phone-input" pattern="[0-9]{9}" placeholder="123456789" value="${userData.phone}" required>
    `)
    const city = $(`
    <label for="city-input">City</label>
    <input type="text" id="city-input" value="${userData.city}" required>
    `)
    const street = $(`
    <label for="street-input">Street</label>
    <input type="text" id="street-input" value="${userData.street}" required>
    `)
    const postcode = $(`
    <label for="code-input">Postcode</label>
    <input type="text" id="code-input" value="${userData.code}" required>
    `)

    orderForm
        .append(mail, phone, city, street, postcode)
        .append(`<div class="buttons">
        <button class="btn" class="submit" type="submit">Submit</button>
        <button class="btn cancel" type="button">Cancel</button>
        </div>`);
    orderPage.append(orderForm);
    orderFormHandler(orderPage)

    return orderPage
}