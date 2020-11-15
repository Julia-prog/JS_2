const products = [
    { id: 1, title: 'Notebook', price: 20000 },
    { id: 2, title: 'Mouse', price: 1500 },
    { id: 3, title: 'Keyboard', price: 5000 },
    { id: 4, title: 'Gamepad', price: 4500 },
];

const renderProduct = (title, price) => {
    return `
    <div class="product-item">
        <h3 class="product-item-title">${title}</h3>
        <p class="product-item-price">${price}</p>
        <button class="by-btn"> Добавить в корзину</button>
    </div>`;
}

const catalogInit = (list = products) => {
    list.map((item) => document.querySelector('.products').innerHTML += renderProduct(item.title, item.price));
}

catalogInit();