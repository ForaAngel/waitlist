"use client";
import { useState } from "react";
import Image from "next/image";

export default function LandingPage() {
  const [registeredCount, setRegisteredCount] = useState(42); // Comenzando con un número arbitrario

  return (
    <div className="min-h-screen bg-white">
      <header className="flex justify-between items-center p-4 md:p-6">
        <div className="flex items-center space-x-2">
          <span className="text-xl font-bold text-black">Proyecto Perron</span>
        </div>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <a href="#faqs" className="text-gray-600 hover:text-gray-900">
                FAQs
              </a>
            </li>
          </ul>
        </nav>
      </header>

      <main className="flex flex-col md:flex-row justify-between items-center px-4 md:px-6 py-12 gap-8">
        <div className="flex flex-col items-center justify-center text-center space-y-6 md:w-1/2">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight text-black mt-24">
            ¡Únete a la aventura! Conoce, Conecta y Descubre Artistas en la
            Nueva App Furry
          </h1>
          <p className="text-xl text-black">
            Nuestra app está creada para la comunidad furry, ofreciendo un
            espacio donde ustedes puedan sentirse seguros, conectarse con otros,
            y descubrir artistas talentosos. Aquí podrás conocer nuevas personas
            y disfrutar de una convivencia respetuosa y divertida. Nuestro
            objetivo es que te sientas cómodo siendo tú mismo, mientras te
            sumerges en una comunidad que valora la creatividad, la amistad y el
            respeto mutuo.
          </p>

          <button
            className="bg-black text-white px-6 py-3 rounded-md text-lg font-semibold hover:bg-gray-800 transition duration-300"
            onClick={() => setRegisteredCount((prev) => prev + 1)}
            aria-label="Registrarse"
          >
            Registrarme
          </button>
          <p className="text-gray-600">
            Registros: <span className="font-bold">{registeredCount}</span>
          </p>
        </div>

        <div className="md:w-1/2">
          <Image
            src="/waitlistimg.jpg"
            alt="Imagen de espera"
            width={1000}
            height={1000}
            className="rounded-lg object-cover w-full h-[600px] shadow-lg"
            priority
          />
        </div>
      </main>
    </div>
  );
}
