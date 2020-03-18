import $ from 'jquery';
import { databaseAccess } from '../common/databaseAccess';
import { roomsListItem } from './rooms-list-item';

export const roomsList = () => {
  const ul = $('<ul class="list-group"></ul>');

  // doczepia liste pokoi, gdy tylko przyjdzie z serwera
  databaseAccess.getRooms()
    .then(rooms => rooms.map(room => roomsListItem(room)))
    .then(roomsListItems => ul.append(roomsListItems));

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
