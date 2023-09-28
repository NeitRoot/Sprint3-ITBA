import Footer from "@/app/components/Footer";
import Header from "@/app/components/Header";
import SideBar from "@/app/components/Sidebar";
import Link from "next/link";

const Pagar = () => {
  return (
    <>
      <Header />
      <SideBar />
      <section className="flex h-screen">
        <div className="w-[100%] flex flex-col items-center justify-center sm:w-full">
          <div className=" flex flex-col items-center">
            <h2 className="text-2xl font-inter font-bold tracking-wider mt-[1rem] mb-2">
              REALIZAR UN PAGO
            </h2>
          </div>
          <form className="flex flex-col items-center bg-white shadow-md rounded p-8 mx-auto sm:w-[95%]">
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
                />
              </div>
            </div>

            <div>
              <Link href={"/pago"}>
                <button
                  className="w-72 flex justify-center bg-blue-800 hover:bg-blue-700 text-white font-bold mt-4 py-2 px-16 rounded focus:outline-none focus:shadow-outline"
                  type="button"
                >
                  Pagar
                </button>
              </Link>
            </div>
          </form>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Pagar;
