import mongoose from "mongoose";
import dotenv from "dotenv";

// Cargar las variables de entorno desde el archivo .env
dotenv.config();

// Obtener la URI de MongoDB desde las variables de entorno
const MONGODB_URI = process.env.MONGODB_URI;

console.log("MONGODB_URI:", MONGODB_URI);

// Verificar si la URI está definida
if (!MONGODB_URI) {
  throw new Error(
    "La variable MONGODB_URI no está definida en el archivo .env"
  );
}

// Función para conectar a la base de datos MongoDB
const connectMongo = async () => {
  try {
    await mongoose.connect(MONGODB_URI); // Eliminadas las opciones obsoletas
    console.log("Conectado a MongoDB");
  } catch (error) {
    console.error("Error al conectar a MongoDB:", error);
    throw new Error("MongoDB connection failed");
  }
};

export default connectMongo; // Exportar como default
