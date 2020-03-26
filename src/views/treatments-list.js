import $ from 'jquery';
import { databaseAccess } from '../common/databaseAccess';
import { treatmentsListItem } from './treatments-list-item';
import { treatments } from './treatments';

export const treatmentsList = () => {
  const ul = $('<ul class="list-group"></ul>');

  // doczepia liste pokoi, gdy tylko przyjdzie z serwera
  databaseAccess.getTreatments()
    .then(treatments => treatments.map(treatment => treatmentsListItem(treatment)))
    .then(treatmentsListItem => ul.append(treatmentsListItem));

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
