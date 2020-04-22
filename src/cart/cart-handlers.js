import $ from 'jquery';
import { itSpaCart } from './it-spa-cart';

export const cartHandlers = () => {
  $(document).on({
    mouseenter: function () { $('#cart-container').slideDown() },
    mouseleave: function () { $('#cart-container').slideUp() },
  }, ("#cart"));

  $(document).on('click', 'button', () => {
    $('#cart').detach();
    $('main').before(itSpaCart());
  });

}