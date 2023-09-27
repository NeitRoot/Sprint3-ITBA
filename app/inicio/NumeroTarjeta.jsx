"use client";
import { useState, useEffect } from "react";
import { AiOutlineEye } from "react-icons/ai";

export default function NumeroTarjeta() {
  const [mostrarNum, setMostrarNum] = useState(true);
  const [numeroTarjeta, setNumeroTarjeta] = useState("");

  useEffect(() => {
    fetch("https://65121923b8c6ce52b39556eb.mockapi.io/tarjetas/1")
      .then((res) => res.json())
      .then((data) => setNumeroTarjeta(data));
  }, [numeroTarjeta]);

  return (
    <>
      <div className="p-2">
        <p className="text-lg text-white">
          {numeroTarjeta.tipo_tarjeta} - {numeroTarjeta.titular}
        </p>
        <div className="flex items-center justify-between">
          {mostrarNum ? (
            <p className="text-white text-sm">**** **** **** ****</p>
          ) : (
            <p className="text-white text-sm">{numeroTarjeta.numero}</p>
          )}
          <span
            onClick={() => {
              setMostrarNum(!mostrarNum);
            }}
          >
            <AiOutlineEye
              className="text-white hover:text-orange-400 transition-colors text-xl cursor-pointer"
              name="Mostrar/Ocultar numeros"
            />
          </span>
        </div>
        <div className="flex text-xs text-white">
          <p>Venc. {numeroTarjeta.fecha_expiracion}</p>
        </div>
      </div>
    </>
  );
}
