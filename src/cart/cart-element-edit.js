import $ from 'jquery';
import { databaseAccess } from '../common/database-access';
import { Cart } from './cart-cookie-handler';
import { customAlert } from '../common/custom-alert';
import { editRoom } from './edit-room';
import { editTreatment } from './edit-treatment';
import { cartSummary } from './cart-summary';
import { reloadSummary } from './reload-summary';

export const cartElementEdit = (cartElementId, quantity, stringDates) => {
    const cart = new Cart();
    const cartEditContainer = $(`<aside class="overlay" id="cart-room-edit"></aside>`);
    const cartEdit = $(`<div id="edit-cart"></div>`)
    console.log(cartElementId)
    console.log(quantity)
    console.log(stringDates)
    if (cartElementId.charAt(0) === "1") {
        databaseAccess.getRoom(cartElementId)
            .then(room => cartEdit.append(editRoom(room, quantity, stringDates)))
    } else if (cartElementId.charAt(0) === "5") {
        databaseAccess.getTreatment(cartElementId)
            .then(treatment => cartEdit.append(editTreatment(treatment, quantity)))
    }

    cartEditContainer.append(cartEdit)


    // ==EVENT HANDLERS== //

    // click outside div to close
    $('main').on("click", "#cart-room-edit", function (event) {
        if (!($(event.target).is("button"))) {
            if (!document.getElementById('edit-cart').contains(event.target)) {
                $("#cart-room-edit").remove();
                $('main').off("click", "#cart-room-edit");
                $('main').off("click", ".save");
            }
        }
    })

    $(cartEditContainer).on("click", ".delete", function () {
        const buttonId = $(this).attr('id').slice(0, 3);
        cart.removeFromCart({ "id": buttonId });
        $(cartEditContainer).remove();
        $(cartEditContainer).off("click", cartEditContainer);
        $('main').off("click", "#cart-room-edit");
        $('main').off("click", ".save");
        reloadSummary();
        customAlert('Removed from cart');
    })

    $('main').on("click", ".cancel", function (event) {
        $("#cart-room-edit").remove();
        $('main').off("click", "#cart-room-edit");
        $('main').off("click", ".save");

    })

    //saving changes
    $('main').on('click', '.save', function () {
        const buttonId = $(this).attr('id').slice(0, 3);
        if (cartElementId.charAt(0) === "1") {
            const quantity = $('#departure-date-cart').attr('data-quantity')
            const dates = $('#departure-date-cart').attr('data-dates')
            cart.removeFromCart({ "id": buttonId });
            cart.addRoom({
                "id": buttonId,
                "quantity": quantity,
                "dates": dates
            });
            customAlert('Room was updated')
        } else if (cartElementId.charAt(0) === "5") {
            cart.removeFromCart({ "id": buttonId })
            const newQuantity = $('#change-treatment-quantity').val();
            cart.addToCart({ "id": buttonId, "quantity": newQuantity });
            customAlert('Treatment was updated')
        }

        $("#cart-room-edit").remove();
        $('.cancel').trigger('click');
        $('main').off('click', '.save');
        $('main').off('click', "#cart-room-edit");
        reloadSummary();
    });

    $(document).keyup(function (e) {
        if (e.key === "Escape") { $('.cancel').trigger("click") };   // esc
    });


    return cartEditContainer



}