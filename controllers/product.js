const Product = require('../models/product');
function getProducts(req, res) {
    Product.find((err, products_list) => {
        if (err) {
            res.json(err);
        } else {
            res.json(products_list);
        }
    });
}
function addProduct(req, res) {
    productObj = new Product(req.body);
    productObj.save((err) => {
        if (err) {
            res.json(err);
        } else {
            res.json('Product Added');
        }
    });
}
function updateProduct(req, res) {
    const updatedProduct = req.body;
    Product.findByIdAndUpdate(req.params._id, updatedProduct, (err) => {
        if (err) {
            res.json(err);
        } else {
            res.json('product updated');
        }
    });
}
function getProductById(req, res) {
    Product.findById(req.params._id).exec((err, product) => {
        if (err) {
            res.json(err);
        } else {
            res.json(product);
        }
    });
}
function deleteProductById(req, res) {
    Product.findByIdAndDelete(req.params._id).exec((err) => {
        if (err) {
            res.json(err);
        } else {
            res.json('Product Deleted');
        }
    });
}
function getProductByName(req, res) {
    Product.find({ name: req.params.name }).exec((err, product) => {
        if (err) {
            res.json(err);
        } else {
            res.json(product);
        }
    });
}
function getProductByAvailability(req, res) {
    Product.find({ availability: req.params.availability }).exec(
        (err, product) => {
            if (err) {
                res.json(err);
            } else {
                res.json(product);
            }
        }
    );
}
function getProductByPrice(req, res) {
    Product.find({ price: { $gt: req.params.price } }).exec(
        (err, products_list) => {
            if (err) {
                res.json(err);
            } else {
                res.json(products_list);
            }
        }
    );
}
module.exports = {
    getProducts,
    addProduct,
    updateProduct,
    getProductById,
    deleteProductById,
    getProductByName,
    getProductByAvailability,
    getProductByPrice,
};
