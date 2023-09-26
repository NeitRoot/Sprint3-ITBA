"use client";
import { useState, useEffect } from "react";
import { AiOutlineEye } from "react-icons/ai";

export default function NumeroTarjeta() {
  const [mostrarNum, setMostrarNum] = useState(true);
  const [numeroTarjeta, setNumeroTarjeta] = useState("");

  useEffect(() => {
    fetch("https://65121923b8c6ce52b39556eb.mockapi.io/tarjetas/1")
      .then((res) => res.json())
      .then((data) => setNumeroTarjeta(data.numero));
  }, [numeroTarjeta]);

  return (
    <div className="flex items-center justify-between">
      {mostrarNum ? (
        <p className="text-white ml-5">*** *** ***</p>
      ) : (
        <p className="text-white ml-5">{numeroTarjeta}</p>
      )}
      <button
        type="button"
        className="text-orange-900 text-center mx-6"
        onClick={() => {
          setMostrarNum(!mostrarNum);
        }}
      >
        <AiOutlineEye
          className="text-orange-700 hover:text-white transition-colors"
          name="ojito"
        />
      </button>
    </div>
  );
}
