import $ from 'jquery';



export const cartListItem= (item, quantity) => {
    
    const listItem = $(`<li class="cart-item list-group-item"></li>`)
    listItem
    .append(`<img class="img" src="${item.imgsrc}" alt="Photo of cart item">`)
    .append(`<h3 class="cart-header">${item.name}</h3>`)
    .append(`<p class="cart-item">Price: ${item.price}</p>`)
    .append(`<button id="${item.id}" class="delete">Delete</button>`)

    
    return listItem
}

