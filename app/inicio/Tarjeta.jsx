"use client";
import { useState } from "react";
import { AiOutlineEye } from "react-icons/ai";
const Tarjeta = () => {
  const [mostrarNum, setMostrarNum] = useState(true);

  return (
    <div className="bg-orange-400 w-80 rounded-md text-xl text-orange-900 my-4 min-h-[8rem]">
      <h2 className="font-bold ml-2">Tarjetas</h2>
      <div>
        <p className="text-white ml-3">Número de tarjeta</p>
        <div className="flex items-center justify-between">
          {mostrarNum ? (
            <p className="text-white ml-5">*** *** ***</p>
          ) : (
            <p className="text-white ml-5">N° DE LA TARJETA</p>
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
      </div>
    </div>
  );
};

export default Tarjeta;
