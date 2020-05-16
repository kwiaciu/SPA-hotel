import './it-spa.scss';
import $ from 'jquery';
import { Router } from './router/router';
import { nav } from './navigation/nav';
import { itSpaCart } from './cart/it-spa-cart';
import { profileSidebar } from './profile/profile-sidebar';

const main = $('main');

const router = new Router();

router.mount(main);
router.init();

main.before(nav());

main.before(profileSidebar());

main.before(itSpaCart());

window.addEventListener('load', (event) => {
    console.log('DOM fully loaded and parsed');
});

window.addEventListener('popstate', () => { router.navigate(location.pathname, false) })



// const images = ['url(../dist/main02.jpg)', 'url(../dist/main03.jpg)', 'url(../dist/main01.jpg)'];
// changeBackground('#home', ...images);


