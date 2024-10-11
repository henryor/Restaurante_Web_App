// src/server.ts
import express, { Request, Response } from "express";
import next from "next";
import connectMongo from "./libs/db.ts";

const port = parseInt(process.env.PORT || "3000", 10);
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

const server = express();

const startApp = async (): Promise<void> => {
  try {
    await connectMongo(); // Conexión a la base de datos
    console.log("Conexión a MongoDB exitosa");

    // Esperamos que Next.js esté listo antes de levantar el servidor
    await app.prepare();

    // Usamos el handler de Next.js para todas las rutas
    server.all("*", (req: Request, res: Response) => {
      return handle(req, res);
    });

    // Iniciamos el servidor en el puerto indicado
    server.listen(port, (err?: any) => {
      if (err) throw err;
      console.log(`Servidor corriendo en http://localhost:${port}`);
    });
  } catch (error) {
    console.error("Error al conectar a MongoDB o iniciar Next.js:", error);
  }
};

startApp();
