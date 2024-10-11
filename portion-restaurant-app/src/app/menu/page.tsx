// src/app/menu/page.tsx
import React from "react";
import ProductList from "@/components/ProductList";

const MenuPage: React.FC = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Menú</h1>
      <ProductList />{" "}
      {/* Aquí renderizas el componente de lista de productos */}
    </div>
  );
};

export default MenuPage;
