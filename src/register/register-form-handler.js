import $ from 'jquery';
import { checkRegisterForm } from './check-register-form';
import { customAlert } from '../common/custom-alert';


export const registerFormHandler = (container) => {
    $(container).on("submit", "#register-form", function (event) {
        event.preventDefault();
        const mail = $('#mail-input').val();
        const password = $('#password-input').val();
        const confirmPassword = $('#confirm-password-input').val();
        const phone = $('#phone-input').val();
        const city = $('#city-input').val();
        const street = $('#street-input').val();
        const code = $('#code-input').val();
        // checkPassword(login, pass);
        if (!(password === confirmPassword)) {
            customAlert('Password fields are not the same')
        } else {
            const data = {
                "id": mail,
                "password": password,
                "mail": mail,
                "city": city,
                "street": street,
                "code": code,
                "phone": phone,
                "previousOrders": []
            };
            checkRegisterForm(data)

            // console.log('submit')
        }
    });
}