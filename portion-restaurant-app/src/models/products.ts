import mongoose from "mongoose";

// Definir la interfaz para los datos del producto
interface IProduct {
  name: string;
  description: string;
  price: number; // Total calculado
  portions: number; // Gramos por porción
  grams: number; // Gramos disponibles
  pricePerPortion: number; // Precio por porción
  image?: string; // URL de la imagen (opcional)
  createdAt: Date; // Fecha de creación
}

// Definir el esquema del producto
const productSchema = new mongoose.Schema<IProduct>({
  name: { type: String, required: true }, // Nombre del producto
  description: { type: String, required: true }, // Descripción del producto
  price: { type: Number, required: true, min: 0 }, // Precio total del producto, debe ser mayor o igual a 0
  portions: { type: Number, required: true, min: 0 }, // Gramos por porción, debe ser mayor o igual a 0
  grams: { type: Number, required: true, min: 0 }, // Gramos disponibles, debe ser mayor o igual a 0
  pricePerPortion: { type: Number, required: true, min: 0 }, // Precio por porción, debe ser mayor o igual a 0
  image: { type: String, required: false }, // URL de la imagen (opcional)
  createdAt: { type: Date, default: Date.now }, // Fecha de creación por defecto
});

// Verificar si el modelo ya está definido para evitar el error de sobrescritura
const Product =
  mongoose.models.Product || mongoose.model<IProduct>("Product", productSchema);

export default Product;
