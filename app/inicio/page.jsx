"use client";
import { useState } from "react";
import { AiOutlineEye } from "react-icons/ai";
import Banner from "@/app/assets/images/banner.png";
import BannerA from "@/app/assets/images/bannerA.png";
import BannerB from "@/app/assets/images/bannerB.png";
import Footer from "@/app/components/Footer";
import Header from "@/app/components/Header";
import Image from "next/image";
import Link from "next/link";
import SideBar from "@/app/components/Sidebar";

const Inicio = () => {
  const [mostrarNum, setMostrarNum] = useState(true);
  return (
    <>
      <Header />
      <SideBar />
      <section>
        <h1 className="flex justify-center font-bold text-4xl text-blue-600 sm:text-2xl mt-6 mb-0">
          Hola, NOMBRE!
        </h1>
        <div className="flex justify-center sm:flex-col items-center gap-8 sm:gap-1 mb-10">
          <div className="bg-orange-400 w-80 rounded-md text-xl text-orange-900 my-4 min-h-[8rem]">
            <h2 className="font-bold ml-2">Cuentas</h2>
            <p className="text-white ml-3">CUENTA</p>
            <p className="text-white ml-5">SALDO</p>
            <Link
              href={"/cuenta"}
              className="flex justify-center hover:text-white transition-colors"
            >
              Ver todo
            </Link>
          </div>

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
        </div>
        <div className="flex justify-center mb-20">
          <div className="w-80 sm:hidden">
            <Image src={BannerA} alt="Banner A" priority />
          </div>
          <div className="w-80 items-center sm:w-[65%] mb-2 mt-0">
            <Image src={Banner} alt="Banner" priority />
          </div>
          <div className="w-80 sm:hidden">
            <Image src={BannerB} alt="Banner B" priority />
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Inicio;
