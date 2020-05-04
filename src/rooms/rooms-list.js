import $ from 'jquery';
import { databaseAccess } from '../common/database-access';
import { roomsListItem } from './rooms-list-item';
import { Cart } from '../cart/cart-cookie-handler';

export const roomsList = () => {
  const cart = new Cart();

  const ul = $('<ul id="rooms-list" class="list-group"></ul>');
  // doczepia liste pokoi, gdy tylko przyjdzie z serwera
  databaseAccess.getRooms()
    .then(rooms => rooms.map(room => roomsListItem(room)))
    .then(roomsListItems => ul.append(roomsListItems));

  // add button handler
  $(ul).on('click', 'button', function () {
    const buttonId = $(this).attr('id').slice(0,3);
    const quantity = $('#departure-date').attr('data-quantity')
    const dates = $('#departure-date').attr('data-dates')
    const add = cart.addRoom({ "id": buttonId,
                      "quantity": quantity,
                      "dates": dates
   });
   console.log(add);

  });

  return ul;


};






// import $ from 'jquery';

// export const roomsList = (pokoje) => {
//   const ul = $('<ul></ul>');

//   const rooms = pokoje.map(pokoj => {
//     const li = $('<li></li>');
//     li.text(pokoj.name);
//     return li;
//   });

//   ul.append(rooms);

//   return ul;
// };

// cookieStore
