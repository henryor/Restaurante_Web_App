import { NextResponse } from "next/server";
import connectMongo from "@/libs/db"; // Asegúrate de que la ruta es correcta
import Product from "@/models/products"; // Ajusta la ruta según la ubicación de tu modelo

export async function POST(request: Request) {
  const body = await request.formData();

  // Obtener los datos del formulario y convertir los tipos apropiadamente
  const name = body.get("name") as string;
  const description = body.get("description") as string;
  const price = parseFloat(body.get("price") as string);
  const portions = parseInt(body.get("portions") as string); // Cambiado de portionFull a portions
  const grams = parseInt(body.get("grams") as string); // Cambiado de portionHalf a grams
  const pricePerPortion = parseFloat(body.get("pricePerPortion") as string); // Cambiado de pricePerGram a pricePerPortion
  const image = body.get("image") as string;

  await connectMongo(); // Conectar a la base de datos

  // Crear el nuevo producto según el modelo
  const newProduct = {
    name,
    description,
    price,
    portions,
    grams,
    pricePerPortion,
    image,
    createdAt: new Date(), // Añadir la fecha de creación
  };

  try {
    const result = await Product.create(newProduct); // Usar el modelo para crear el nuevo producto
    return NextResponse.json(result, { status: 201 });
  } catch (error) {
    console.error("Error inserting product:", error);
    return NextResponse.json(
      { message: "Error inserting product" },
      { status: 500 }
    );
  }
}

export async function GET(request: Request) {
  await connectMongo(); // Conectar a la base de datos

  try {
    const products = await Product.find(); // Obtener todos los productos
    return NextResponse.json(products);
  } catch (error) {
    console.error("Error fetching products:", error);
    return NextResponse.json(
      { message: "Error fetching products" },
      { status: 500 }
    );
  }
}
