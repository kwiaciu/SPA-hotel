import $ from 'jquery';

export const previousOrders = () => {
    const previousOrders = $('<section id="previous-orders"></section>')
    previousOrders
        .append('<h3>This is a page where I would show you previous orders. If you had any...</h3>')
        .append('<p>This feature was not implemented by the way</p>')
    return previousOrders
}