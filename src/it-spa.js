import './it-spa.scss';
import $ from 'jquery';
import { Router } from './router/router';
import { nav } from './navigation/nav';
import { changeBackground } from './views/changeBackground';
import { itSpaCart } from './cart/it-spa-cart';

const main = $('main');

const router = new Router();

router.mount(main);

router.init();

main.before(nav());



const images = ['url(../dist/main02.jpg)','url(../dist/main03.jpg)','url(../dist/main01.jpg)'];
// changeBackground('#home', ...images);


const cart = itSpaCart();
// cart.empty();
cart.addToCart({'id':'01', 'quantity':'5'});
cart.addToCart({'id':'21', 'quantity':'6'});

console.log(cart.getValue());
