import Banner from "@/app/assets/images/banner.png";
import Footer from "@/app/components/Footer";
import Header from "@/app/components/Header";
import Image from "next/image";
import SideBar from "@/app/components/Sidebar";
import BannerLg from "@/app/assets/images/bannerUnificado.jpg";
import Tarjeta from "./Tarjeta";
import Cuenta from "./Cuenta";

const fetchCuentas = () => {
  return fetch("https://65121923b8c6ce52b39556eb.mockapi.io/cuentas/1").then(
    (res) => res.json()
  );
};

export default async function Inicio() {
  const cuenta = await fetchCuentas();

  return (
    <>
      <Header />
      <SideBar />
      <section>
        <h1 className="flex justify-center font-bold text-4xl text-blue-600 sm:text-2xl mt-6 mb-0">
          Hola, {cuenta.titular}!
        </h1>
        <div className="flex justify-center sm:flex-col items-center gap-8 sm:gap-1 mb-10">
          <Cuenta />
          <Tarjeta />
        </div>
        <div className="flex justify-center mb-20">
          <div className="w-80 items-center sm:w-[65%] md:hidden lg:hidden mb-2 mt-0">
            <Image src={Banner} alt="Banner" priority />
          </div>
          <div className="w-4/5 mx-auto items-center sm:hidden mb-2 mt-0">
            <Image src={BannerLg} alt="Banner" priority />
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
