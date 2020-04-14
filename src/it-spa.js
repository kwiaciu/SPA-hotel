import './it-spa.scss';
import $ from 'jquery';
import { Router } from './router/router';
import { nav } from './navigation/nav';
// import { changeBackground } from './views/changeBackground';
import { itSpaCart } from './cart/it-spa-cart';
import { Cart } from './cart/cart';

const main = $('main');

const router = new Router();

router.mount(main);

router.init();

main.before(nav());
main.before(itSpaCart());

$(document).on({
  mouseenter: function () { $('#cart-container').slideDown() },
  mouseleave: function () { $('#cart-container').slideUp() },
},("#cart"));

$(document).on('click','button', ()=> {
  $('#cart').detach();
  main.before(itSpaCart());
  
  console.log('dis is fine')
});



const images = ['url(../dist/main02.jpg)', 'url(../dist/main03.jpg)', 'url(../dist/main01.jpg)'];
// changeBackground('#home', ...images);


