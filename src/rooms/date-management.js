export class DateManagement {
    constructor() {
        this.today = new Date().toISOString().slice(0, 10);
    }

    // function are expecting to get dateString in format YYYY-MM-DD and return the same
    addYears(dateString, years) {
        const date = new Date(dateString)
        const newDate = new Date(date.setFullYear(date.getFullYear() + years));
        return (newDate.toISOString().slice(0, 10))
    }
    // since I may have some use for this one in the future, might as well write month now
    addMonths(dateString, months) {
        const date = new Date(dateString)
        const newDate = new Date(date.setMonth(date.getMonth() + months));
        return (newDate.toISOString().slice(0, 10))
    }

    addDays(dateString, days) {
        const date = new Date(dateString)
        const newDate = new Date(date.setDate(date.getDate() + days));
        return (newDate.toISOString().slice(0, 10))
    }

    //in days
    dateDifference(dateStringOne, dateStringTwo) {
        return Math.floor((Date.parse(dateStringOne) - Date.parse(dateStringTwo)) / 86400000);
    }

    listDateDifference(dateStringOne, dateStringTwo) {
        const numberOfDays = this.dateDifference(dateStringTwo, dateStringOne)
        const listDates = [dateStringOne];
        for (let index = 0; index < numberOfDays; index++) {
            listDates.push(this.addDays(listDates[index], 1))
        }
        return listDates;
    }

}