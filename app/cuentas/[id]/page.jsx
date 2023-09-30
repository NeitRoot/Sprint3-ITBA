import Footer from "@/app/components/Footer";
import Header from "@/app/components/Header";
import SideBar from "@/app/components/Sidebar";
import Link from "next/link";
import { RiArrowDownSFill, RiArrowLeftSFill } from "react-icons/ri";

// Obtener los datos de la cuenta seleccionada segun el id
const fetchCuentaSeleccionada = (id) => {
  return fetch(`https://651449b58e505cebc2eb14a2.mockapi.io/cuentas/${id}`, {
    next: {
      revalidate: 60,
    },
  }).then((res) => res.json());
};

// Muetra la info detallada en la cuenta seleccionada
export default async function DetalleCuenta({ params }) {
  const { id } = params;
  const cuentas = await fetchCuentaSeleccionada(id);

  return (
    <>
      <Header />
      <SideBar />
      <section className="min-h-[calc(100vh-208px)] flex items-center">
        <div className="flex flex-col mx-auto w-3/4 bg-slate-50 p-4 rounded-md border-l-4 border-orange-400 shadow-lg cursor-default sm:mt-3 sm:mb-3">
          <div className="flex justify-between">
            <Link
              href="/cuentas"
              className="flex items-center gap-1 hover:text-orange-400 transition-colors"
            >
              <RiArrowLeftSFill />
              Volver atrás
            </Link>
            <p className="flex items-center gap-1 hover:text-orange-400 transition-colors cursor-pointer">
              Más opciones <RiArrowDownSFill />
            </p>
          </div>
          <div className="text-center">
            <p className="uppercase text-4xl font-semibold border-b-2 border-orange-400 w-1/2 mx-auto">
              C.A {cuentas.tipo_cuenta}
            </p>
            <p className="text-3xl py-3">$ {cuentas.saldo}</p>
            <p className="text-base">N° de cuenta: {cuentas.numero_cuenta}</p>
          </div>
          <div className="flex justify-between px-4 pt-6 sm:flex-col">
            <p className="flex flex-col items-center text-slate-700">
              Titular:{" "}
              <span className="text-black font-semibold">
                {cuentas.titular}
              </span>
            </p>
            <p className="flex flex-col items-center text-slate-700">
              Alias:{" "}
              <span className="text-black font-semibold">{cuentas.alias}</span>
            </p>
            <p className="flex flex-col items-center text-slate-700">
              C.B.U:{" "}
              <span className="text-black font-semibold">{cuentas.cbu}</span>
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
