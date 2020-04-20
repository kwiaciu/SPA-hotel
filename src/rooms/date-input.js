import $ from 'jquery';

export const dateInput = () => {
    const today = new Date().toISOString().slice(0,10);
    function addYear(dateString) {
        const split = dateString.split('-')
        const plusYear = String(Number(split[0])+1)
        const newDate = [plusYear,split[1],split[2]]
        return (newDate.join('-'))
    }

    const dateInput = $(`<input type="date" id="date" min="${today}" max="${addYear(today)}"></input>`)
    console.log(today)
    $('main').on('change','#date', function () {
        console.log($('#date').val())
    })
    return dateInput
}