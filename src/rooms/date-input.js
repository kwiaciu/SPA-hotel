import $ from 'jquery';
import { DateManagement } from './date-management';
import { databaseAccess } from '../common/database-access'

export const dateInput = () => {
    const dateInput = $('<div id="date-picker"></div>')
    const date = new DateManagement()
    const today = date.today;
    console.log(today);
    // const today = new Date().toISOString().slice(0,10);
    // function addYear(dateString) {
    //     const date = new Date(dateString)
    //     const newDate = new Date(date.setFullYear(date.getFullYear() + 1));
    //     return (newDate.toISOString().slice(0,10))
    // }

    // function addDay(dateString) {
    //     const date = new Date(dateString)
    //     const newDate = new Date(date.setDate(date.getDate() + 1));
    //     return (newDate.toISOString().slice(0,10))
    // }

    // function differance(firstDateString, secondDateString) {

    // }

    const dateInput1 = $(`<label for="arrival-date">Date of arrival:</label><input type="date" id="arrival-date" min="${today}" max="${date.addYears(today, 1)}"></input>`)
    const dateInput2 = $(`<label for="departure-date">Date of departure:</label><input type="date" id="departure-date" min="${date.addDays(today, 1)}" max="${date.addYears(today, 1)}" disabled></input>`)

    console.log(today)
    $('main').on('change', 'input[type="date"]', function () {
        
            console.log($('#rooms-list').children())
            $('#rooms-list').find( "li" ).each( function() {
                const id = $( this ).attr('id').slice(0,3);
                $( this ).css('order', id);
                $( this ).css('background-color', '');
                $( this ).find('button').prop('disabled', false);

            });
        
        const dateOfArrival = $('#arrival-date').val()
        const dateOfDeparture = $('#departure-date').val()
        $('#departure-date').attr('min', date.addDays(dateOfArrival, 1)).attr('disabled', false)
        if (date.dateDifference(dateOfDeparture, dateOfArrival) <= 0) {
            $('#departure-date').val(date.addDays(dateOfArrival, 1))
        }
        const dateDifference = date.listDateDifference(dateOfArrival, dateOfDeparture)
        const occupiedRooms = databaseAccess.checkRooms(dateDifference);
        occupiedRooms.then(occRooms => {
            occRooms.map(room => {
                const li = $(`#${room}-add`).parent();
                console.log(room)
                console.log(li)
                $(li).css('background-color', '#302d258a');
                $(li).css('order', `1${room}`);
                $(li).find('button').prop('disabled',true);
            })
            
        })
    })


    dateInput.append(dateInput1);
    dateInput.append(dateInput2);
    return dateInput
}