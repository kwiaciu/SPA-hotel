import $ from 'jquery';

export const registerPageHandler = (register) => {
    $(register).on("click", function (event) {
        if (!document.getElementById('register-page').contains(event.target)) {
            $('#register').remove();
            $('main').off("click", "#register");
            $('main').off("submit", "#register-form");
        } else {
            console.log('else')
        }
    })
}