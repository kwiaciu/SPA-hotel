import $ from 'jquery';

export const cartListItem = (item, quantity, stringDates) => {
    const listItem = $(`<li class="cart-item"></li>`)
    listItem
        .append(`<header class="cart-item-header"><img class="img" src="${item.imgsrc}" alt="Photo of cart item"><h3 class="cart-header">${item.name}</h3></header>`)
    if (stringDates !== undefined) {
        const dates = JSON.parse(stringDates)
        const firstDay = dates[0]
        const lastDay = dates[dates.length - 1]
        listItem
            .append(`
            <div class="center">
                <p>${firstDay} &#8594; ${lastDay}</p>
            </div>`)
    } else {
        listItem
            .append(`<p class="center">Quantity: ${quantity}</p>`)
    }
    listItem.append(`
    <footer class="cart-item-footer">
        <div class="">Price: <h4>${item.price * quantity}<i>ћ</i></h4></div>
        <div>
        <button data-id='${item.id}' data-dates='${stringDates}' data-price='${item.price}' data-quantity='${quantity}'     class="edit btn">Edit</button>
        <button id="${item.id}-delete" class="delete btn">Delete</button>
        </div>
    </footer>
    `)

    return listItem
}

