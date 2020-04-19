import './it-spa.scss';
import $ from 'jquery';
import { Router } from './router/router';
import { nav } from './navigation/nav';
import { itSpaCart } from './cart/it-spa-cart';
import { profile } from './profile/profile';
import { formSubmitHandler } from './profile/login-form-handler';
import { loginPageHandler } from './profile/login-page-handler';
import { Login } from './profile/login-cookie-handler';
import { cartHandlers } from './cart/cart-handlers';
import { profileSidebar } from './profile/profile-sidebar';
import { profileSidebarHandler } from './profile/profile-sidebar-handler';
import { navHandler } from './navigation/nav-handler';


// import { changeBackground } from './views/changeBackground';
// import { Cart } from './cart/cart-cookie-handler';
// import { checkPassword } from './profile/check-password';

const main = $('main');

const router = new Router();

router.mount(main);
router.init();

main.before(nav());
navHandler();

main.before(profileSidebar());
profileSidebarHandler();

main.before(itSpaCart());
cartHandlers();


// EVENT HANDLERS
// formSubmitHandler();
// loginPageHandler();



// $('.navbar').on('click', '#show-profile', () => {
//   main.before(profile());
//   // document.getElementById('login-page').addEventListener()
// });

// document.getElementById('login').addEventListener('click', (event) => {
//   if (!document.getElementById('login-page').contains(event.target)) {
//     $('#login').hide();
//     console.log('if')

//   } else {
//     console.log('else')
//   }
// })


// $('.navbar').on('click', '#logout', () => {
//   const login = new Login();
//   login.empty();
// });





const images = ['url(../dist/main02.jpg)', 'url(../dist/main03.jpg)', 'url(../dist/main01.jpg)'];
// changeBackground('#home', ...images);


