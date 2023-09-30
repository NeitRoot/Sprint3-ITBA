"use client";
import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";

const Pagar = ({ empresa, factura, monto }) => {
  const [show, setShow] = useState(true);
  const [inputEmpresa, setInputEmpresa] = useState("");
  const [inputFactura, setInputFactura] = useState("");
  const [inputMonto, setInputMonto] = useState("");

  // Captura datos y oculta el formulario
  const datosForm = () => {
    empresa(inputEmpresa);
    factura(inputFactura);
    monto(inputMonto);
    setShow(false);
  };

  return (
    <>
      {show ? (
        <section className="absolute top-0 left-0 bottom-0 right-0 mx-auto">
          <div className="w-[100%] flex flex-col items-center justify-center sm:w-full">
            <form className="relative flex flex-col items-center bg-white shadow-md rounded p-8 mx-auto sm:w-[85%]">
              <AiOutlineClose
                onClick={() => setShow(false)}
                className="cursor-pointer absolute top-3 right-3"
              />
              <h2 className="text-2xl font-inter font-bold tracking-wider mt-[1rem] mb-2">
                REALIZAR UN PAGO
              </h2>
              <div className="mb-4 flex flex-col w-full">
                <label
                  className="flex text-gray-400 text-sm font-bold mb-2"
                  htmlFor="cbulogin"
                >
                  Empresa
                </label>
                <input
                  className="border-b-2 w-full text-gray-700 leading-tight focus:outline-none"
                  id="cbulogin"
                  type="text"
                  placeholder="Ejemplo"
                  value={inputEmpresa}
                  onChange={(e) => setInputEmpresa(e.target.value)}
                />
              </div>

              <div className="mb-6 flex flex-col w-full">
                <label
                  className="flex text-gray-400 text-sm font-bold mb-2"
                  htmlFor="factura"
                >
                  N° de Factura
                </label>
                <input
                  className="border-b-2 w-full  text-gray-700 leading-tight focus:outline-none"
                  id="factura"
                  type="text"
                  placeholder="FCA-0000000001"
                  value={inputFactura}
                  onChange={(e) => setInputFactura(e.target.value)}
                />
              </div>

              <div className="mb-6 flex flex-col w-full">
                <label
                  className="flex text-gray-400 text-sm font-bold mb-2"
                  htmlFor="monto"
                >
                  Monto a abonar
                </label>
                <div className="flex">
                  <p className=" text-gray-400 mr-1 ">$</p>
                  <input
                    className="border-b-2 w-full  text-gray-700 leading-tight focus:outline-none"
                    id="monto"
                    type="number"
                    placeholder="0"
                    value={inputMonto}
                    onChange={(e) => setInputMonto(e.target.value)}
                  />
                </div>
              </div>
              <div>
                <div
                  className="w-72 flex justify-center bg-blue-800 hover:bg-blue-700 text-white font-bold mt-4 py-2 px-16 rounded focus:outline-none focus:shadow-outline uppercase sm:w-48"
                  onClick={() => datosForm()}
                >
                  Pagar
                </div>
              </div>
            </form>
          </div>
        </section>
      ) : null}
    </>
  );
};

export default Pagar;
