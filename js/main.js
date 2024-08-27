// main.js
document.addEventListener('DOMContentLoaded', function () {

    fetch('https://fakestoreapi.com/products')
        .then(response => response.json())
        .then(products => {
            const productList = document.getElementById('product-list');
            products.forEach(product => {
                const productDiv = document.createElement('div');
                productDiv.className = 'product';
                productDiv.innerHTML = `
                    <img src="${product.image}" alt="${product.title}">
                    <h2>${product.title}</h2>
                    <p>${product.price}</p>
                    <button class="add-to-cart">Adicionar ao Carrinho</button>
                `;
                productDiv.querySelector('.add-to-cart').addEventListener('click', () => {

                    addToCart(product);
                });
                productList.appendChild(productDiv);
            });
        });
});

function addToCart(product) {

    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push(product);
    localStorage.setItem('cart', JSON.stringify(cart));
    alert('Produto adicionado ao carrinho!');
}
