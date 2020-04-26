import $ from 'jquery';
import { register } from './register';

export const loginPageHandler = () => {
  $('main').on("click", "#login", function (event) {
    if ($(event.target).attr("id") !== 'link-register') {  // workaround so contain doenst throw error 
      if (!document.getElementById('login-page').contains(event.target)) {
        $('#login').remove();
        $('main').off("click", "#login");
        $('main').off("submit", "#login-form");
        $('main').off("click", "#link-register")
      }
    } 
  })
  $('main').on("click", "#link-register", function (event) {
    $('main').append(register());
    $('#register-form').find('#mail-input').attr("type", "email");
    $('#register-form').find('#password-input').attr("type", "password");
    $('#register-form').find('#confirm-password-input').attr("type", "password");
    $('#register-form').find('#phone-input').attr("type", "tel").attr("pattern", "[0-9]{9}").attr("placeholder", "123456789");
    $('#login').remove();
    $('main').off("click", "#link-register");
    $('main').off("click", "#login");
    $('main').off("submit", "#login-form");
  })
}
