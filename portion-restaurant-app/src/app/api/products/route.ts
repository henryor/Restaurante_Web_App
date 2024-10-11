// src/app/api/products/route.ts
import { NextResponse } from "next/server";
import connectMongo from "@/libs/db"; // Asegúrate de que la ruta sea correcta
import Product from "@/models/products"; // Asegúrate de que esta ruta sea correcta

// Manejar solicitudes GET
export async function GET() {
  await connectMongo(); // Conectar a MongoDB
  try {
    const products = await Product.find(); // Obtener todos los productos
    return NextResponse.json(products); // Devolver los productos en formato JSON
  } catch (error) {
    console.error("Error fetching products:", error);
    return NextResponse.json(
      { message: "Error fetching products" },
      { status: 500 }
    );
  }
}

// Manejar solicitudes POST
export async function POST(request: Request) {
  await connectMongo(); // Conectar a MongoDB
  const body = await request.json(); // Obtener el cuerpo de la solicitud

  console.log("Cuerpo de la solicitud:", body);

  try {
    const newProduct = new Product(body); // Crear una nueva instancia de Product
    await newProduct.save(); // Guardar el producto en la base de datos
    return NextResponse.json(newProduct, { status: 201 }); // Devolver el nuevo producto con código 201
  } catch (error) {
    console.error(`Error creando el producto: ${error}`); // Log de error para la consola
    return NextResponse.json(
      { message: "Error creando el producto" },
      { status: 500 }
    );
  }
}

// Manejar solicitudes PUT
export async function PUT(request: Request) {
  await connectMongo(); // Conectar a MongoDB
  const body = await request.json(); // Obtener el cuerpo de la solicitud
  const { id, ...updateData } = body; // Extraer el ID y los datos a actualizar

  try {
    const updatedProduct = await Product.findByIdAndUpdate(id, updateData, {
      new: true, // Devuelve el producto actualizado
      runValidators: true, // Ejecuta validaciones
    });

    if (!updatedProduct) {
      return NextResponse.json(
        { message: "Product not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(updatedProduct); // Devolver el producto actualizado
  } catch (error) {
    console.error(`Error updating the product: ${error}`); // Log de error para la consola
    return NextResponse.json(
      { message: "Error updating the product" },
      { status: 500 }
    );
  }
}

// Manejar solicitudes DELETE
export async function DELETE(request: Request) {
  await connectMongo(); // Conectar a MongoDB
  const { id } = await request.json(); // Obtener el ID del cuerpo de la solicitud

  try {
    const deletedProduct = await Product.findByIdAndDelete(id); // Eliminar el producto

    if (!deletedProduct) {
      return NextResponse.json(
        { message: "Product not found" },
        { status: 404 }
      );
    }

    return NextResponse.json({ message: "Product deleted successfully" }); // Devolver un mensaje de éxito
  } catch (error) {
    console.error(`Error deleting the product: ${error}`); // Log de error para la consola
    return NextResponse.json(
      { message: "Error deleting the product" },
      { status: 500 }
    );
  }
}
