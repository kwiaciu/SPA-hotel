import $ from 'jquery';
import { registerFormHandler } from './register-form-handler';
import { passwordStrength } from './password-strength';
import { circle } from './circle';

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
    const judgment = $('<div id="judgement" class="hidden"></div>')
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
    judgment.append(circle)
    judgment.append('<p id="comment"></p>')
    $('#password-input').append(judgment)
    registerForm.append(mail, password, judgment, confirmPassword, phone, city, street, postcode)
    registerForm
        .append('<button class="btn" type="submit">Submit</button>');
    registerPage.append(registerForm);
    registerFormHandler(registerPage);
    $(registerPage).on('change', '#password-input', () => {
        $('#part1').removeClass('green yellow red')
        $('#part2').removeClass('green yellow red')
        $('#part3').removeClass('green yellow red')
        $('#part4').removeClass('green yellow red')
        const val = $('#password-input').val()
        const verdict = passwordStrength(val)
        $('#judgement').removeClass('hidden')
        if (verdict == 4) {
            $('#part1').addClass('green')
            $('#part2').addClass('green')
            $('#part3').addClass('green')
            $('#part4').addClass('green')
            $('#comment').text('Great password!')
        } else if (verdict == 3) {
            $('#part1').addClass('green')
            $('#part2').addClass('green')
            $('#part3').addClass('green')
            $('#comment').text('Good password')
        } else if (verdict == 2) {
            $('#part1').addClass('yellow')
            $('#part2').addClass('yellow')
            $('#comment').text('You can do better than this')
        } else {
            $('#part1').addClass('red')
            $('#comment').text("Just don't")
        }
    })


    return registerPage
}