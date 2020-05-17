import $ from 'jquery';
import { databaseAccess } from '../common/database-access';
import { treatmentsListItem } from './treatments-list-item';
import { Cart } from '../cart/cart-cookie-handler';


export const treatmentsList = () => {
  const cart = new Cart();
  const ul = $('<ul class="treatments-list"></ul>');

  // doczepia liste pokoi, gdy tylko przyjdzie z serwera
  databaseAccess.getTreatments()
    .then(treatments => treatments.map(treatment => treatmentsListItem(treatment)))
    .then(treatmentsListItem => ul.append(treatmentsListItem));

  // Event handlers
  $(ul).on('click', 'button', function () {
    const buttonId = $(this).attr('id').slice(0, 3);
    cart.addToCart({ "id": buttonId, "quantity": 1 });
  });

  $(ul).on({
    mouseenter: function (event) {
      $(event.target).find('.treatment-data').slideDown()
    },
    mouseleave: function (event) {
      $(event.target).find('.treatment-data').slideUp()
    },
  }, '.treatment-li');

  return ul;
};


