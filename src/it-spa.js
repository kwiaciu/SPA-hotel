import './it-spa.scss';
import $ from 'jquery';
import { Router } from './router/router';
import { nav } from './navigation/nav';
import { itSpaCart } from './cart/it-spa-cart';
import { profile } from './profile/profile';
import { formSubmitHandler } from './profile/form-submit-handler';
// import { changeBackground } from './views/changeBackground';
// import { Cart } from './cart/cart-cookie-handler';
// import { checkPassword } from './profile/check-password';

const main = $('main');

const router = new Router();

router.mount(main);

router.init();

main.before(nav());
main.before(itSpaCart());


// EVENT HANDLERS



$(document).on({
  mouseenter: function () { $('#cart-container').slideDown() },
  mouseleave: function () { $('#cart-container').slideUp() },
},("#cart"));

$(document).on('click','button', () => {
  $('#cart').detach();
  main.before(itSpaCart());
  
  console.log('dis is fine')
});

$('.navbar').on('click', '#show-profile', () => {
  main.before(profile());
  // document.getElementById('login-page').addEventListener()

formSubmitHandler();

  document.getElementById('login').addEventListener('click', (event) => {
    if (!document.getElementById('login-page').contains(event.target)) {
      $('#login').remove();
      console.log('if')

    } else {
      console.log('else')
    }
  })
  console.log('dis')
});






const images = ['url(../dist/main02.jpg)', 'url(../dist/main03.jpg)', 'url(../dist/main01.jpg)'];
// changeBackground('#home', ...images);


