import React from "react";

const TablaPagos = ({ mostrarDatosEnTabla }) => {
  // Aca se capturan los datos del formulario
  const datosForm = "Aca van los datos del formulario";

  return (
    <>
      <div className="mx-auto bg-slate-200 p-2">
        <button onClick={() => mostrarDatosEnTabla(datosForm)}>
          Este boton envia los datos del formulario a la componente de la tabla
        </button>
      </div>
      <section className="relative overflow-x-auto border rounded-md mt-4 mx-auto w-4/5">
        <table className="w-full text-sm text-left text-gray-500">
          {/* Titulos */}
          <thead className="text-xs text-gray-700 uppercase">
            <tr>
              <th scope="col" className="px-6 py-3 bg-gray-50 font-extrabold">
                N° de factura
              </th>
              <th scope="col" className="px-6 py-3 font-extrabold">
                Cuenta
              </th>
              <th scope="col" className="px-6 py-3 bg-gray-50 font-extrabold">
                Motivo
              </th>
              <th scope="col" className="px-6 py-3 font-extrabold">
                Vencimiento
              </th>
              <th scope="col" className="px-6 py-3 bg-gray-50 font-extrabold">
                Importe a abonar
              </th>
            </tr>
          </thead>
          {/* Datos */}
          <tbody>
            <tr className="border-b border-gray-200 ">
              <td className="px-6 py-4 font-medium bg-gray-50">
                FCC-0000000001
              </td>
              <td className="px-6 py-4">ITBA</td>
              <td className="px-6 py-4 bg-gray-50 ">
                Cuota Full Stack Developer
              </td>
              <td className="px-6 py-4">15/10/23</td>
              <td className="px-6 py-4 bg-gray-50 ">$40.000</td>
            </tr>
            <tr className="border-b border-gray-200 ">
              <td className="px-6 py-4 font-medium bg-gray-50">
                FCC-0000000002
              </td>
              <td className="px-6 py-4">Edenor</td>
              <td className="px-6 py-4 bg-gray-50 ">Luz mes septiembre</td>
              <td className="px-6 py-4">30/10/23</td>
              <td className="px-6 py-4 bg-gray-50">$32.000</td>
            </tr>
            <tr className="border-b border-gray-200 ">
              <td className="px-6 py-4 font-medium bg-gray-50">
                FCB-0034521413
              </td>
              <td className="px-6 py-4">Adidas</td>
              <td className="px-6 py-4 bg-gray-50 ">
                Cuota n°4 compra #34521413
              </td>
              <td className="px-6 py-4">06/11/23</td>
              <td className="px-6 py-4 bg-gray-50">$17.500</td>
            </tr>
            <tr className="border-b border-gray-200 ">
              <td className="px-6 py-4 font-medium bg-gray-50">
                FCC-0000000004
              </td>
              <td className="px-6 py-4">ITBA</td>
              <td className="px-6 py-4 bg-gray-50 ">
                Cuota Full Stack Developer
              </td>
              <td className="px-6 py-4">15/11/23</td>
              <td className="px-6 py-4 bg-gray-50">$40.000</td>
            </tr>
          </tbody>
        </table>
      </section>
    </>
  );
};

export default TablaPagos;
