import $ from 'jquery';
import { registerFormHandler } from './register-form-handler';

export const registerPage = () => {
    const registerPage = $('<div id="register-page"></div>');
    const registerForm = $('<form action="" id="register-form"></form>');
    const mail = $(`
    <label for="mail-input">E-mail</label>
    <input type="email" id="mail-input" required>
    `)
    const password = $(`
    <label for="password-input">Password</label>
    <input type="password" id="password-input" required>
    `)
    const confirmPassword = $(`
    <label for="confirm-password-input">Confirm password</label>
    <input type="password" id="confirm-password-input" required>
    `)
    const phone = $(`
    <label for="phone-input">Phone</label>
    <input type="tel" id="phone-input" pattern="[0-9]{9}" placeholder="123456789" required>
    `)
    const city = $(`
    <label for="city-input">City</label>
    <input type="text" id="city-input" required>
    `)
    const street = $(`
    <label for="street-input">Street</label>
    <input type="text" id="street-input" required>
    `)
    const postcode = $(`
    <label for="code-input">Postcode</label>
    <input type="text" id="postcode-input" required>
    `)

    registerForm.append(mail, password, confirmPassword, phone, city, street, postcode)
    registerForm
        .append('<button class="btn" type="submit">Submit</button>');
    registerPage.append(registerForm);
    registerFormHandler(registerPage);

    return registerPage
}