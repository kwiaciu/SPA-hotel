import $ from 'jquery';
import { databaseAccess } from '../common/database-access';
import { roomsListItem } from './rooms-list-item';
import { Cart } from '../cart/cart-cookie-handler';
import { customAlert } from '../common/custom-alert';

export const roomsList = () => {
  const cart = new Cart();

  const roomsList = $('<ul id="rooms-list" class="rooms-list"></ul>');
  // doczepia liste pokoi, gdy tylko przyjdzie z serwera
  databaseAccess.getRooms()
    .then(rooms => rooms.map(room => roomsListItem(room)))
    .then(roomsListItems => roomsList.append(roomsListItems));


  // ==EVENT HANDLERS==
  $(roomsList).on('click', '.cart-add', function () {
    const buttonId = $(this).attr('id').slice(0, 3);
    const quantity = $('#departure-date').attr('data-quantity')
    const dates = $('#departure-date').attr('data-dates')
    cart.addRoom({
      "id": buttonId,
      "quantity": quantity,
      "dates": dates
    });
    customAlert('Room added to cart!')
  });

  return roomsList;
};