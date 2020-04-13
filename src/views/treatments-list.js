import $ from 'jquery';
import { databaseAccess } from '../common/databaseAccess';
import { treatmentsListItem } from './treatments-list-item';
import { Cart } from '../cart/cart';


export const treatmentsList = () => {
  const cart = new Cart();
  const ul = $('<ul class="list-group"></ul>');

  // doczepia liste pokoi, gdy tylko przyjdzie z serwera
  databaseAccess.getTreatments()
    .then(treatments => treatments.map(treatment => treatmentsListItem(treatment)))
    .then(treatmentsListItem => ul.append(treatmentsListItem));

  // add button handler
  $(ul).on('click', 'button', function () {
    const buttonId = $(this).attr('id');
    cart.addToCart({ "id": buttonId });
  });

  return ul;
};


