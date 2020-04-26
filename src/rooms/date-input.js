import $ from 'jquery';
import { DateManagement } from './date-management';
import { databaseAccess } from '../common/database-access'

export const dateInput = () => {
    const dateInput = $('<div id="date-picker"></div>')
    const date = new DateManagement()
    const today = date.today;

    const dateInput1 = $(`<div class="date-input">
    <label for="arrival-date">Date of arrival:</label>
    <input type="date" id="arrival-date" min="${today}" max="${date.addYears(today, 1)}"></input>
    </div>`)
    const dateInput2 = $(`<div class="date-input">
    <label for="departure-date">Date of departure:</label>
    <input type="date" id="departure-date" min="${date.addDays(today, 1)}" max="${date.addYears(today, 1)}" disabled></input>
    </div>`)

    // handling changes of date input
    $(dateInput).on('change', function () {
        // first reset rooms order and styles by id
        $('#rooms-list').find("li").each(function () {
            const id = $(this).attr('id').slice(0, 3);
            $(this).css('order', id);
            $(this).css('background-color', '');
            $(this).find('button').prop('disabled', false);
        });

        const dateOfArrival = $('#arrival-date').val()
        const dateOfDeparture = $('#departure-date').val()
        // handle changes to picker, departure cannot be earlier than arrival etc
        $('#departure-date').attr('min', date.addDays(dateOfArrival, 1)).attr('disabled', false)
        if (date.dateDifference(dateOfDeparture, dateOfArrival) <= 0) {
            $('#departure-date').val(date.addDays(dateOfArrival, 1))
        }

        // check if rooms are available between selected dates
        const dateDifference = date.listDateDifference(dateOfArrival, dateOfDeparture)
        const occupiedRooms = databaseAccess.checkRooms(dateDifference);
        occupiedRooms.then(occRooms => {
            occRooms.map(room => {
                const li = $(`#${room}-add`).parent();
                console.log(room)
                console.log(li)
                $(li).css('background-color', '#302d258a');
                $(li).css('order', `1${room}`);
                $(li).find('button').prop('disabled', true);
            })

        })
    })
    dateInput.append(dateInput1);
    dateInput.append(dateInput2);
    return dateInput
}