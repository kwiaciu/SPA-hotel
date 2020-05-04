import $ from 'jquery';
import { checkRegisterForm } from './check-register-form';


export const registerFormHandler = (container) => {
    $(container).on("change", "#register-form", function (event) {
        //TODO 
        // 1. Password strength
        // 2. Confirming password while writing
        // 3. 
    });

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
            console.log('password fields are not equal')
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
            
            console.log('submit')
        }
    });
}