import $ from 'jquery';
import { register } from './register';

export const loginPageHandler = () => {
  $('main').on("click", "#login", function (event) {
    if (!document.getElementById('login-page').contains(event.target)) {
      $('#login').remove();
      $('main').off("click","#login");
      $('main').off("submit","#login-form");
    }
  })
  $('main').on("click", "#link-register", function (event) {
    $('main').append(register());
    $('#login').remove();
    $('main').off("click","#login");
    $('main').off("submit","#login-form");
  })
}
