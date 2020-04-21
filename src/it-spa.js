import './it-spa.scss';
import $ from 'jquery';
import { Router } from './router/router';
import { nav } from './navigation/nav';
import { itSpaCart } from './cart/it-spa-cart';
import { cartHandlers } from './cart/cart-handlers';
import { profileSidebar } from './profile/profile-sidebar';

const main = $('main');

const router = new Router();

router.mount(main);
router.init();

main.before(nav());
// navHandler();

main.before(profileSidebar());
// profileSidebarHandler();

main.before(itSpaCart());
cartHandlers();



const images = ['url(../dist/main02.jpg)', 'url(../dist/main03.jpg)', 'url(../dist/main01.jpg)'];
// changeBackground('#home', ...images);


