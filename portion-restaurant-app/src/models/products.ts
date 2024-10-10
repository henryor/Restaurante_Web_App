// src/models/Product.ts
import mongoose from "mongoose";

// Definir el esquema de producto
const ProductSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  description: { type: String, required: true },
  portionFull: { type: Number, required: true },
  portionHalf: { type: Number, required: true },
  pricePerGram: { type: Number, required: true },
  image: { type: String, required: true }, // Asumiendo que es una URL
});

// Crear el modelo de producto
const Product = mongoose.model("Product", ProductSchema);

export default Product; // Exportar el modelo
