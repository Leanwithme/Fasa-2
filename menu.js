function increaseQuantity(item) {
    const qty = document.getElementById(`${item}-qty`);
    let currentQty = parseInt(qty.textContent);
    qty.textContent = currentQty + 1;
}

function decreaseQuantity(item) {
    const qty = document.getElementById(`${item}-qty`);
    let currentQty = parseInt(qty.textContent);
    if (currentQty > 1) {
        qty.textContent = currentQty - 1;
    }
}