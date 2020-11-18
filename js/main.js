class ProductList{
    constructor(container = '.products') {
        this.container = container
        this._goods = []
        this._allProducts = []
        this._fetchGoods()
        this._render()
    }

    _fetchGoods(){
        this._goods = 
        [
            { id: 1, title: 'Notebook', price: 20000 },
            { id: 2, title: 'Mouse', price: 1500 },
            { id: 3, title: 'Keyboard', price: 5000 },
            { id: 4, title: 'Gamepad', price: 4500 },
        ];
    }

    _render() {
        const container = document.querySelector(this.container);
        for (let product of this._goods){
            const productObj = new ProductItem(product)
            this._allProducts.push(productObj);
            container.insertAdjacentHTML("afterbegin", productObj.getHTMLstring())
        }
    }

}

class ProductItem{
    constructor(product, img = 'https://placehold.it/200x150'){
    this.title = product.title
    this.price = product.price
    this.id  = product.id
    this.img = img
}
getHTMLstring(){
    return `<div class="product-item" data-id="${this.id}">
        <h3 class="product-item-title">${this.title}</h3>
        <img src="${this.img}" alt="Some img"></img>
        <p class="product-item-price">${this.price}</p>
        <button class="by-btn"> Добавить в корзину</button>
    </div>`
}


}

/// Корзина
// class Cart{    
//     constructor(items = []){
//         this.items = [] //Товары в корзине
//         this._addItem(cartItem) //Добавить товар
//         this._removeItem(id) //Удалить товар

//         this._computeTotalValue() //Подсчитать общую стоимость
//         this.clear() //Очисить корзину
//         this.Order() //Оформить заказ
//     }
// }

/// Товар в корзине
// class cartItem{
//     constructor(productItem, id){
//         this.id = id
//         this.title = productItem.title
//         this.price = productItem.price
//         this.img = productItem.img
//         this.count = 1
//         this._checkStatus() //Проверить наличие на складе
//     }       
// }

new ProductList()
