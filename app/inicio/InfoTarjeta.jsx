"use client";
import { useState, useEffect } from "react";
import { AiOutlineEye } from "react-icons/ai";

export default function InfoTarjeta() {
  const [mostrarNum, setMostrarNum] = useState(true);
  const [numeroTarjeta, setNumeroTarjeta] = useState("");

  useEffect(() => {
    fetch("https://651449b58e505cebc2eb14a2.mockapi.io/tarjetas/1")
      .then((res) => res.json())
      .then((data) => setNumeroTarjeta(data));
  }, []);

  return (
    <>
      <div className="py-3 px-3 items-center gap-x-6">
        <p className="text-lg text-black uppercase">
          {numeroTarjeta.tipo_tarjeta} - {numeroTarjeta.titular}
        </p>
        <div className="flex items-center justify-between">
          {mostrarNum ? (
            <p className="text-slate-700 text-sm">**** **** **** ****</p>
          ) : (
            <p className="text-slate-700 text-sm">{numeroTarjeta.numero}</p>
          )}
          <span
            onClick={() => {
              setMostrarNum(!mostrarNum);
            }}
          >
            <AiOutlineEye
              className="text-slate-700 hover:text-orange-400 transition-colors text-xl cursor-pointer"
              name="Mostrar/Ocultar numeros"
            />
          </span>
        </div>
      </div>
    </>
  );
}
