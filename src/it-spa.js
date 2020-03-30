import './it-spa.scss';
import $ from 'jquery';
import { Router } from './router/router';
import { nav } from './navigation/nav';
import { changeBackground } from './views/changeBackground';

const main = $('main');

const router = new Router();

router.mount(main);

router.init();

main.before(nav());



const images = ['url(../dist/main02.jpg)','url(../dist/main03.jpg)','url(../dist/main01.jpg)'];
changeBackground('#home', ...images);
