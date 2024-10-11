import connectMongo from "@/libs/db"; // Conectar a MongoDB
import Product from "@/models/products"; // Importar el modelo del producto
import { NextRequest, NextResponse } from "next/server";

export async function PUT(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  await connectMongo(); // Asegurarte de que la base de datos está conectada
  const { id } = params; // Obtener el ID del producto de los parámetros

  try {
    // Extraer los datos actualizados del cuerpo de la solicitud
    const updatedData = await req.json();

    // Buscar y actualizar el producto
    const product = await Product.findByIdAndUpdate(id, updatedData, {
      new: true, // Devuelve el producto actualizado
      runValidators: true, // Valida los datos antes de la actualización
    });

    if (!product) {
      return NextResponse.json(
        { message: "Producto no encontrado" },
        { status: 404 }
      );
    }

    return NextResponse.json({
      message: "Producto actualizado con éxito",
      product,
    });
  } catch (error) {
    console.error("Error actualizando el producto:", error);
    return NextResponse.json(
      { message: "Error al actualizar el producto" },
      { status: 500 }
    );
  }
}

export async function DELETE(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  await connectMongo(); // Asegurarte de que la base de datos está conectada
  const { id } = params; // Obtener el ID del producto de los parámetros

  try {
    // Buscar y eliminar el producto
    const product = await Product.findByIdAndDelete(id);

    if (!product) {
      return NextResponse.json(
        { message: "Producto no encontrado" },
        { status: 404 }
      );
    }

    return NextResponse.json({ message: "Producto eliminado con éxito" });
  } catch (error) {
    console.error("Error eliminando el producto:", error);
    return NextResponse.json(
      { message: "Error al eliminar el producto" },
      { status: 500 }
    );
  }
}
