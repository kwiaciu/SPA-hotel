import $ from 'jquery';

export const dateInput = () => {
    const dateInput = $('<div id="date-picker"></div>')
    const today = new Date().toISOString().slice(0,10);
    function addYear(dateString) {
        const split = dateString.split('-')
        const plusYear = String(Number(split[0])+1)
        const newDate = [plusYear,split[1],split[2]]
        return (newDate.join('-'))
    }

    function addDay(dateString) {
        const split = dateString.split('-')
        const plusDay = String(Number(split[2])+1)
        const newDate = [split[0],split[1],plusDay]
        return (newDate.join('-'))
    }

    const dateInput1 = $(`<label for="arrival-date">Date of arrival:</label><input type="date" id="arrival-date" min="${today}" max="${addYear(today)}"></input>`)
    const dateInput2 = $(`<label for="departure-date">Date of departure:</label><input type="date" id="departure-date" min="${addDay(today)}" max="${addYear(today)}"></input>`)
    
    console.log(today)
    $('main').on('change','#arrival-date', function () {
        const dateOfArrival = $('#arrival-date').val()
        $('#departure-date').attr('min',addDay(dateOfArrival))
    })

    dateInput.append(dateInput1);
    dateInput.append(dateInput2);
    return dateInput
}