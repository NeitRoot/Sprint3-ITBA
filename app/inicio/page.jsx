import Banner from "@/app/assets/images/banner.png";
import BannerLg from "@/app/assets/images/bannerUnificado.jpg";
import Footer from "@/app/components/Footer";
import Header from "@/app/components/Header";
import SideBar from "@/app/components/Sidebar";
import Image from "next/image";
import Link from "next/link";
import { BiTransferAlt } from "react-icons/bi";
import { BsCalculator, BsCurrencyExchange } from "react-icons/bs";
import { GiPayMoney } from "react-icons/gi";
import Cuenta from "./Cuenta";
import Tarjeta from "./Tarjeta";

const fetchCuentas = () => {
  return fetch(`https://651449b58e505cebc2eb14a2.mockapi.io/cuentas/1`, {
    next: {
      revalidate: 60,
    },
  }).then((res) => res.json());
};

export default async function Inicio() {
  const cuenta = await fetchCuentas();

  return (
    <>
      <Header />
      <SideBar />
      <section>
        <h1 className="flex justify-center font-semibold text-4xl text-primary-blue sm:text-2xl mt-6 mb-0">
          Hola, {cuenta.titular}!
        </h1>
        <div className="flex justify-center sm:flex-col items-center gap-12 sm:gap-1">
          <Cuenta />
          <Tarjeta />
        </div>
        <div className="flex justify-center gap-6 my-4">
          <Link
            href="/pago"
            className="flex items-center gap-2 bg-slate-100 px-2 py-3 rounded-md shadow-md shadow-slate-700 transition-colors hover:text-white hover:bg-primary-blue"
          >
            <GiPayMoney /> Pagos
          </Link>
          <Link
            href="/transferencia"
            className="flex items-center gap-2 bg-slate-100 px-2 py-3 rounded-md shadow-md shadow-slate-700 transition-colors hover:text-white hover:bg-primary-blue"
          >
            <BiTransferAlt /> Tranferencias
          </Link>
          <Link
            href="/prestamos"
            className="flex items-center gap-2 bg-slate-100 px-2 py-3 rounded-md shadow-md shadow-slate-700 transition-colors hover:text-white hover:bg-primary-blue"
          >
            <BsCalculator /> Préstamos
          </Link>
          <Link
            href="/conversor"
            className="flex items-center gap-2 bg-slate-100 px-4 py-3 rounded-md shadow-md shadow-slate-700 transition-colors hover:text-white hover:bg-primary-blue"
          >
            <BsCurrencyExchange /> Conversor
          </Link>
        </div>
        <div className="flex justify-center py-5">
          <div className="w-80 items-center sm:w-[65%] md:hidden lg:hidden">
            <Image src={Banner} alt="Banner" priority />
          </div>
          <div className="w-4/5 mx-auto items-center sm:hidden">
            <Image src={BannerLg} alt="Banner" priority />
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
