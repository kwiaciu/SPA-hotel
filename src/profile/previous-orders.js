import $ from 'jquery';

export const previousOrders = () => {
    const previousOrders = $('<section id="previous-orders"></section>')
    previousOrders
    .append('<p>this is a page where I would show you previous orders. If you had any...</p>')
    return previousOrders
}