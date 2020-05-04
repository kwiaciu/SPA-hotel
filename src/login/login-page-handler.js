import $ from 'jquery';
import { register } from '../register/register';

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
    $('#login').remove();
    $('main').off("click", "#link-register");
    $('main').off("click", "#login");
    $('main').off("submit", "#login-form");
  })
}
