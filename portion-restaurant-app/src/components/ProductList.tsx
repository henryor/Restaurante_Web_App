// src/components/ProductList.tsx
"use client"; // Marca este componente como un componente cliente

import React, { useEffect, useState } from "react";
import ProductCard from "@/components/ProductCard";
import { MenuProduct } from "@/types/Product";

const ProductList: React.FC = () => {
  const [products, setProducts] = useState<MenuProduct[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("/api/products");
        if (!response.ok) throw new Error("Error fetching products");
        const data = await response.json();
        setProducts(data);
      } catch (err) {
        setError("Error fetching products");
      }
    };

    fetchProducts();
  }, []);

  if (error) return <div>{error}</div>;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          selectedPortion="full"
          onAddToCart={() => {}}
          onPortionChange={() => {}}
        />
      ))}
    </div>
  );
};

export default ProductList;
