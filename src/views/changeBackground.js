import $ from 'jquery';

export function changeBackground(elementHTML, ...images) {
    const elementToChange = $(elementHTML);

    for (let index = 0; index < images.length; index++) {
        let oneImageTimeout = index * 3000;
        const url = images[index];
        setTimeout(() => {
            elementToChange.css('background-image', url);
        }, oneImageTimeout)

    }

    let timeout = images.length * 3000
    console.log(timeout)
    setTimeout(() => {
        changeBackground(elementHTML, ...images)
    }, timeout);

}
