"use client";
import { useState } from "react";
import Header from "@/app/components/Header";
import SideBar from "@/app/components/Sidebar";
import Footer from "@/app/components/Footer";
import TablaPagos from "./TablaPagos";
import FormPagos from "./FormPagos";

const Pagos = () => {
  const [datos, estableceDatos] = useState("");

  // funcion para capturar los datos del formulario
  const mostrarDatosEnTabla = (datosDelForm) => {
    estableceDatos(datosDelForm);
  };

  return (
    <>
      <Header />
      <SideBar />
      <h1 className="flex justify-center my-6 text-4xl">Pagos</h1>
      <div className="flex justify-center my-6 text-1xl">
        <button className="bg-orange-400 p-4 rounded-2xl text-white">
          Realizar un pago
        </button>
      </div>
      <div>
        <p>Estos son los datos que sacas del formulario</p>
        {datos}
      </div>
      <TablaPagos mostrarDatosEnTabla={mostrarDatosEnTabla} />
      <FormPagos />
      <Footer />
    </>
  );
};

export default Pagos;
