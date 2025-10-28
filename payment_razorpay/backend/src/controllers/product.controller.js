const ProductModel = require("../models/product.model");

// Controller: Create a new product
async function createProduct(req, res) {
  try {
    const { title, imaGEUrl, description, price, category } = req.body;

    // Validate required fields
    if (!title || !description || !price?.amount) {
      return res.status(400).json({ message: "Missing required fields" });
    }

    const newProduct = await ProductModel.create({
      title,
      imaGEUrl,
      description,
      price,
      category,
    });

    return res.status(201).json({
      success: true,
      message: "Product created successfully",
      product: newProduct,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Server Error",
      error: error.message,
    });
  }
}

// Controller: Get all products
async function getProducts(req, res) {
  try {
    const products = await ProductModel.findOne();
    res.status(200).json({
      message: "Products fetched successfully",
      products
    });
  } catch (error) {
    res.status(500).json({
      message: "Internal Server Error",
      error: error.message,
    });
  }
}

module.exports = { createProduct, getProducts };
