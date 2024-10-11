import "./globals.css";
import { ReactNode } from "react"; // Importar ReactNode

interface LayoutProps {
  children: ReactNode; // Definir el tipo para children
}

export default function Layout({ children }: LayoutProps) {
  return (
    <html lang="es">
      <head>
        <title>Restaurante App</title>
      </head>
      <body>
        <header></header>
        <main>{children}</main>
      </body>
    </html>
  );
}
