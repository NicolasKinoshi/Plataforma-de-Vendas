document.addEventListener('DOMContentLoaded', function () {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    const cartItems = document.getElementById('cart-items');
    const totalValue = document.getElementById('total-value');
    let total = 0;

    cart.forEach(item => {
        const itemDiv = document.createElement('div');
        itemDiv.className = 'cart-item';
        itemDiv.innerHTML = `
            <p>${item.title} - R$${item.price}</p>
            <button class="remove-from-cart">Remover</button>
        `;
        itemDiv.querySelector('.remove-from-cart').addEventListener('click', () => {
            removeFromCart(item);
        });
        cartItems.appendChild(itemDiv);
        total += item.price;
    });

    totalValue.textContent = (total + 10.00).toFixed(2);
});

function removeFromCart(product) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart = cart.filter(item => item.id !== product.id);
    localStorage.setItem('cart', JSON.stringify(cart));
    window.location.reload();
}
