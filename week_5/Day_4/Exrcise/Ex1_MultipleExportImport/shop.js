const { products } = require('./product')

function Products(name) {
    const findProduct = products.filter(product => name == product.name)
    return findProduct
}

console.log(Products('product 1'))
// [ { name: 'product 1', price: '10', category: 'category 1' } ]
console.log(Products('product 2'))
// [ { name: 'product 2', price: '20', category: 'category 2' } ]
console.log(Products('product 3'))
// [ { name: 'product 3', price: '30', category: 'category 3' } ]
