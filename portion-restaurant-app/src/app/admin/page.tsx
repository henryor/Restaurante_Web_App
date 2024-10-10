"use client";
import ProductForm from "../../components/ProductForm"; // Asegúrate de que la ruta sea correcta
import "../globals.css"; // Asegúrate de que la ruta sea correcta

const AdminProducts = () => {
  return (
    <div className="admin-page">
      {/* Contenedor del título */}
      <div className="header-container">
        <h1 className="text-center text-3xl font-bold mb-8">
          Gestionar Productos
        </h1>
      </div>

      {/* Contenedor del formulario */}
      <div className="form-container">
        <ProductForm />
      </div>
    </div>
  );
};

export default AdminProducts;
