// src/app/api/admin/route.ts
import { NextResponse } from "next/server";
import connectMongo from "../../../libs/db"; // Asegúrate de que la ruta es correcta
import Product from "../../../models/products"; // Ajusta la ruta según la ubicación de tu modelo

export async function POST(request: Request) {
  const body = await request.formData();
  const name = body.get("name") as string;
  const price = parseFloat(body.get("price") as string);
  const description = body.get("description") as string;
  const portionFull = parseInt(body.get("portionFull") as string);
  const portionHalf = parseInt(body.get("portionHalf") as string);
  const pricePerGram = parseFloat(body.get("pricePerGram") as string);
  const image = body.get("image") as string;

  await connectMongo(); // Conectar a la base de datos

  const newProduct = {
    name,
    price,
    description,
    portionFull,
    portionHalf,
    pricePerGram,
    image,
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

