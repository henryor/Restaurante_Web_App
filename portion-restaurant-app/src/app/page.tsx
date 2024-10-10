import Image from "next/image";
import Link from "next/link";
import "./globals.css";

const HomePage = () => {
  return (
    <div>
      {/* Navbar */}
      <nav className="bg-gray-800 text-white py-4">
        <div className="container mx-auto flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold hover:text-orange-300">
            Restaurante App
          </Link>
          <div className="space-x-4">
            <Link href="#about" className="hover:text-orange-300">
              ¿Quiénes Somos?
            </Link>
            <Link href="#features" className="hover:text-orange-300">
              ¿Cómo Funciona?
            </Link>
            <Link href="#contact" className="hover:text-orange-300">
              Contáctanos
            </Link>
            <Link href="#login" className="hover:text-orange-300">
              Iniciar Sesión
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gray-700 text-white py-20">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl font-bold mb-6">
            Bienvenido a Restaurante App
          </h1>
          <p className="text-lg mb-8">
            Gestiona tu inventario de manera eficiente y ofrece a tus clientes
            la libertad de elegir sus porciones de comida.
          </p>
          <div className="flex justify-center">
            <a
              href="#features"
              className="bg-black text-white px-8 py-3 rounded-full hover:bg-orange-500 transition duration-300"
            >
              Ver Cómo Funciona
            </a>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="py-16 bg-white">
        <div className="container mx-auto text-center">
          <h3 className="text-4xl font-bold mb-8">¿Quiénes Somos?</h3>
          <p className="text-lg mb-6 text-gray-700">
            En Restaurante App, brindamos a los restaurantes una herramienta
            innovadora para gestionar su inventario de manera eficiente. Nuestra
            plataforma permite a los chefs ofrecer porciones personalizadas,
            ayudando a reducir el desperdicio de alimentos y mejorando la
            satisfacción del cliente.
          </p>
          <Image
            src=""
            alt="Sobre Nosotros"
            width={600}
            height={400}
            className="rounded-lg shadow-lg mx-auto"
          />
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16 bg-gray-100">
        <div className="container mx-auto text-center">
          <h3 className="text-4xl font-bold mb-8">¿Cómo Funciona?</h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <h4 className="text-xl font-semibold mb-4">
                Paso 1: Registro del Restaurante
              </h4>
              <p>
                Los restaurantes se registran en nuestra app y crean su perfil
                para comenzar a gestionar su inventario.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <h4 className="text-xl font-semibold mb-4">
                Paso 2: Gestión de Inventario
              </h4>
              <p>
                Los restaurantes pueden actualizar su inventario y establecer
                porciones para cada platillo, permitiendo pedidos más flexibles.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <h4 className="text-xl font-semibold mb-4">
                Paso 3: Pedidos Personalizados
              </h4>
              <p>
                Los clientes pueden realizar pedidos según sus preferencias,
                eligiendo las porciones que desean, evitando desperdicios.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-white">
        <div className="container mx-auto text-center">
          <h3 className="text-4xl font-bold mb-8">Contáctanos</h3>
          <p className="text-lg mb-6 text-gray-700">
            ¿Tienes alguna pregunta o sugerencia? ¡Nos encantaría escucharte!
          </p>
          <form className="max-w-md mx-auto space-y-4">
            <input
              type="text"
              placeholder="Nombre"
              className="w-full p-3 border border-gray-300 rounded-lg"
            />
            <input
              type="email"
              placeholder="Correo Electrónico"
              className="w-full p-3 border border-gray-300 rounded-lg"
            />
            <textarea
              placeholder="Mensaje"
              rows ="5"
              className="w-full p-3 border border-gray-300 rounded-lg"
            ></textarea>
            <button
              type="submit"
              className="bg-black text-white px-8 py-3 rounded-full hover:bg-orange-500 transition duration-300"
            >
              Enviar Mensaje
            </button>
          </form>
        </div>
      </section>

      {/* Login Section */}
      <section id="login" className="py-16 bg-gray-100">
        <div className="container mx-auto text-center">
          <h3 className="text-4xl font-bold mb-8">Iniciar Sesión</h3>
          <form className="max-w-md mx-auto space-y-4">
            <input
              type="email"
              placeholder="Correo Electrónico"
              className="w-full p-3 border border-gray-300 rounded-lg"
            />
            <input
              type="password"
              placeholder="Contraseña"
              className="w-full p-3 border border-gray-300 rounded-lg"
            />
            <button
              type="submit"
              className="bg-black text-white px-8 py-3 rounded-full hover:bg-orange-500 transition duration-300"
            >
              Entrar
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white text-gray-800 py-4">
        <div className="container mx-auto text-center">
          <p className="text-sm">
            &copy; 2024 Restaurante App. Todos los derechos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
