import $ from 'jquery';

export const registerPageHandler = () => {
    $('main').on("click", "#register", function (event) {
        if (!document.getElementById('register-page').contains(event.target)) {
            $('#register').remove();
            $('main').off("click", "#register");
            $('main').off("submit", "#register-form");
        } else {
            console.log('else')
        }
    })
}