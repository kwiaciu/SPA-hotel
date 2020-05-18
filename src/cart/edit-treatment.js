import $ from 'jquery'

export const editTreatment = (treatment, quantity) => {

    const editTreatment = $(`<li class="treatment-li"></li>`);
    editTreatment.append(`
        <article class="treatment-container">
        <figure class="treatment-photo">
            <img src="${treatment.imgsrc}" alt="">
        </figure>
        <h3 class="treatment-header">${treatment.name}</h3>
            <div class="treatment-data">
                <ul class="treatment-info">
                    <li>                  
                        <p>Time:</p>
                        <p>${treatment.time}</p>
                    </li>
                    <li>
                        <p>Area:</p>
                        <p>${treatment.area}</p>
                    </li>
                </ul>
                <p class="treatment-desc">${treatment.desc}</p>
                <div class="price">
                        <h3><i>Price: </i>${treatment.price}<i>ћ</i></h3>
                    </div>
            </div>
        </article>
        `)
        // .append(`<p class="unavailable">Room not available on selected dates</p>`)
        .append(`<input id="change-treatment-quantity" type="number" min="1" max="5" value="${parseInt(quantity)}">`)
        .append(`<p id='price'>Total price for treatment: ${parseInt(treatment.price) * parseInt(quantity)} </p>`)
        .append(`<button id="${treatment.id}-add-edit" class="btn cart-add edit" disabled>Save</button>`)
        .append(`<button id="${treatment.id}-delete" class="btn delete">Delete from cart</button>`)
        .append('<button class="btn cancel">Cancel</button>')

    $(editTreatment).on('change', () => {
        $(`#${treatment.id}-add-edit`).prop('disabled', false)
        $('#price').text(`Total price for treatment: ${parseInt(treatment.price) * parseInt($('#change-treatment-quantity').val())}`)
    })
    return editTreatment
}