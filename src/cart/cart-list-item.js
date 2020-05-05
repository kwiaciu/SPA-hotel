import $ from 'jquery';

export const cartListItem = (item, quantity, stringDates) => {
    const listItem = $(`<li class="cart-item list-group-item"></li>`)
    listItem
        .append(`<img class="img" src="${item.imgsrc}" alt="Photo of cart item">`)
        .append(`<h3 class="cart-header">${item.name}</h3>`)
    if (stringDates !== undefined) {
        const dates = JSON.parse(stringDates)
        const firstDay = dates[0]
        const lastDay = dates[dates.length - 1]
        listItem
            .append(`
            <div>
                <div>
                    <p class="cart-item">From:</p><p>${firstDay}</p>
                </div>
                <div>
                    <p class="cart-item">To:</p><p>${lastDay}</p>
                </div>
            </div>`)
            .append(`<p class="cart-item">Price: ${item.price * quantity}</p>`)
    } else {
        listItem
            .append(`<p class="cart-item">Quantity: ${quantity}</p>`)
            .append(`<p class="cart-item">Price: ${item.price}</p>`)
    }
    listItem.append(`
    <button data-id='${item.id}' data-dates='${stringDates}' data-price='${item.price}' data-quantity='${quantity}' class="edit">Edit</button>
    <button id="${item.id}-delete" class="delete">Delete</button>`)

    return listItem
}

