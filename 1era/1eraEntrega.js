class ProductManager {
    constructor() {
        this.products = [];
        this.newId = 0;
    }

    addProduct(title, description, price, thumbnail, code, stock) {
        const product ={
            id: this.generateId(),
            title: title,
            description: description,
            price: price,
            thumbnail: thumbnail,
            code: code,
            stock: stock
        }
        let prodId = product.id
        const found = this.foundProduct(prodId)
        if(found === undefined){
            this.products.push(product)
            console.log("Not found")
        } else{
            console.log( `${product.id} Id already exists`)
        }
    }

    generateId() {
        return ++this.newId;
    }
    foundProduct(prodId){
        return this.products.find((prodIterated) => prodIterated.id === prodId);
    }
}

const getProducts = new ProductManager();
console.log(getProducts.products);

getProducts.addProduct("Gorra", "Polo RL", 5000, "https://res.cloudinary.com/dsdicaf5h/image/upload/v1678451446/cenicero/54_vpuz2h.png", "2812023GPRLBE", 3);
getProducts.addProduct("Gorra", "Polo RL", 5000, "https://res.cloudinary.com/dsdicaf5h/image/upload/v1678451446/cenicero/54_vpuz2h.png", "2812023GPRLBE", 3);
getProducts.addProduct("Chomba", "Nike Golf", 7000, "https://res.cloudinary.com/dsdicaf5h/image/upload/v1678451438/cenicero/94_ea9ghh.png", "02012022CNGBE", 5);
getProducts.addProduct("Chomba", "Chaps RL", 7000, "https://res.cloudinary.com/dsdicaf5h/image/upload/v1678451430/cenicero/131_extbeh.png", "04122022CCRLBE", 6);

console.log(getProducts.products); 