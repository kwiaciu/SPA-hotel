export const carousel = (selector) => {
    const photos = document.querySelectorAll(selector)
    const visiblePhotoIndex = Array.from(photos).findIndex(element => !element.classList.contains('invisible'))
    photos[visiblePhotoIndex].classList.add('invisible')
    if (visiblePhotoIndex < photos.length - 1) {
        photos[visiblePhotoIndex + 1].classList.remove('invisible')
    } else {
        photos[0].classList.remove('invisible')
    }
}