import $ from 'jquery';

export const treatmentsListItem = (treatment) => {

    const li = $(`<li class="treatment-li" style="background-image: url(${treatment.imgsrc})"></li>`);
    li
        .append(`
        <article class="treatment-container">
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
                <button id="${treatment.id}-add" class="btn cart-add">Add</button>
                        <h3><i>Price: </i>${treatment.price}<i>ћ</i></h3>
                    </div>
            </div>
        </article>
        `);

    return li;
};
