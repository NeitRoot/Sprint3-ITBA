import Footer from "@/app/components/Footer";
import Header from "@/app/components/Header";
import SideBar from "@/app/components/Sidebar";
import Link from "next/link";

const Transferir = () => {
  return (
    <>
        <Header />
        <SideBar />
        <section className="flex h-screen">
            <div className="w-[100%] flex flex-col items-center justify-center sm:w-full">
                <div className=" flex flex-col items-center">
                    <h2 className="text-2xl font-inter font-bold tracking-wider mt-[1rem] mb-2">
                        TRANSFERIR DINERO
                    </h2>
                </div>
                <form className="flex flex-col items-center bg-white shadow-md rounded p-8 mx-auto sm:w-[95%]">
                    <div className="mb-4 flex flex-col w-full">
                        <label
                            className="flex text-gray-400 text-sm font-bold mb-2"
                            htmlFor="cbulogin"
                        >
                            Agregá una cuenta
                        </label>
                        <input
                            className="border-b-2 w-full text-gray-700 leading-tight focus:outline-none"
                            id="cbulogin"
                            type="text"
                            placeholder="CBU, CVU o alias"
                        />
                    </div>

                    <div className="mb-6 flex flex-col w-full">
                        <label
                            className="flex text-gray-400 text-sm font-bold mb-2"
                            htmlFor="factura"
                        >
                            Motivo
                        </label>
                        <input
                            className="border-b-2 w-full  text-gray-700 leading-tight focus:outline-none"
                            id="factura"
                            type="text"
                            placeholder="Alquiler"
                        />
                    </div>

                    <div className="mb-6 flex flex-col w-full">
                        <label
                            className="flex text-gray-400 text-sm font-bold mb-2"
                            htmlFor="monto"
                        >
                            Agregar un monto
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

                    <Link href={"/transferencia"}>
                        <button
                            className="w-72 flex justify-center bg-blue-800 hover:bg-blue-700 text-white font-bold mt-4 py-2 px-16 rounded focus:outline-none focus:shadow-outline"
                            type="button"
                        >
                            Transferir
                        </button>
                    </Link>
                </form>
            </div>
        </section>
        <Footer />
    </>
  );
};

export default Transferir;