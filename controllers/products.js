const products = require('../data/products');
let numberOfProducts = products.length;

const allProducts = (req, res) => {
    res.json(products);
};

const byId = (req, res) => {
    let product = products.find(product => product._id == req.params.id);
    res.json(product);
};

const create = (req, res) => {
    numberOfProducts++
    let body = req.body;
    body._id = numberOfProducts;
    products.push(body)
    res.json(body);
};

module.exports = {
    allProducts,
    byId,
    create
};