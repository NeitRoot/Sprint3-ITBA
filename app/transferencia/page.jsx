import Footer from "@/app/components/Footer";
import Header from "@/app/components/Header";
import SideBar from "@/app/components/Sidebar";
import Link from "next/link"

const Transferencias = () => {
  return (
    <>
      <Header />
      <SideBar />
      <h1 className="flex justify-center my-6 text-4xl">Transferencias</h1>
      <div className="flex justify-center my-6 text-1xl">
        <Link href="/transferir" >
          <button className="bg-orange-400 p-4 rounded-2xl text-white">Realizar una transferencia</button>
        </Link>  
      </div>
      <section className="relative overflow-x-auto border rounded-md mt-4 mx-auto w-4/5">
        <table className="w-full text-sm text-left text-gray-500 ">
          {/* Titulos */}
          <thead className="text-xs text-gray-700 uppercase">
            <tr>
              <th scope="col" className="px-6 py-3 bg-gray-50 font-extrabold">
                N° de transacción
              </th>
              <th scope="col" className="px-6 py-3 font-extrabold">
                Cuenta
              </th>
              <th scope="col" className="px-6 py-3 bg-gray-50 font-extrabold">
                Motivo
              </th>
              <th scope="col" className="px-6 py-3 font-extrabold">
                Fecha
              </th>
              <th scope="col" className="px-6 py-3 bg-gray-50 font-extrabold">
                Importe
              </th>
            </tr>
          </thead>
          {/* Datos */}
          <tbody>
            <tr className="border-b border-gray-200 ">
              <td className="px-6 py-4 font-medium bg-gray-50">00000000001</td>
              <td className="px-6 py-4">Trabajo</td>
              <td className="px-6 py-4 bg-gray-50 ">Sueldo</td>
              <td className="px-6 py-4">5/8/23</td>
              <td className="px-6 py-4 bg-gray-50">$300.000</td>
            </tr>
            <tr className="border-b border-gray-200 ">
              <td className="px-6 py-4 font-medium bg-gray-50">00000000001</td>
              <td className="px-6 py-4">Trabajo</td>
              <td className="px-6 py-4 bg-gray-50 ">Sueldo</td>
              <td className="px-6 py-4">5/9/23</td>
              <td className="px-6 py-4 bg-gray-50">$300.000</td>
            </tr>
            <tr className="border-b border-gray-200 ">
              <td className="px-6 py-4 font-medium bg-gray-50">00000000001</td>
              <td className="px-6 py-4">Trabajo</td>
              <td className="px-6 py-4 bg-gray-50 ">Sueldo</td>
              <td className="px-6 py-4">5/10/23</td>
              <td className="px-6 py-4 bg-gray-50">$300.000</td>
            </tr>
            <tr className="border-b border-gray-200 ">
              <td className="px-6 py-4 font-medium bg-gray-50">00000000001</td>
              <td className="px-6 py-4">Trabajo</td>
              <td className="px-6 py-4 bg-gray-50 ">Sueldo</td>
              <td className="px-6 py-4">5/11/23</td>
              <td className="px-6 py-4 bg-gray-50">$300.000</td>
            </tr>
          </tbody>
        </table>
      </section>
      <Footer />
    </>
  );
};

export default Transferencias;
