"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Logo from "@/app/assets/images/logo-removebg.png";

const SideBar = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="py-3 fixed top-0 left-0 right-0 text-blue-900 z-10">
      <button
        className="ml-8 mt-3"
        onClick={() => setOpen(true)}
        name="menu-hamburguesa"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-7 h-7 text-white hover:text-orange-400 transition-colors"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
      </button>

      <div
        className={`${
          open ? "w-80" : "w-0"
        } bg-primary-blue min-h-screen fixed top-0 left-0 transition-all shadow-md shadow-black`}
      >
        <div className={`${!open && "hidden"}`}>
          <div className="flex items-center justify-start gap-x-20">
            <button
              className="pl-4 text-white hover:text-orange-400 transition-colors"
              onClick={() => setOpen(false)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            <Image src={Logo} alt="Logo ITBANK" className="w-24" />
          </div>
          <div className="py-6">
            <div>
              <Link href={"/inicio"}>
                <div className="text-center text-white text-xl hover:bg-orange-400 transition-colors cursor-pointer py-3">
                  Inicio
                </div>
              </Link>
              <Link href={"/cuentas"}>
                <div className="text-center text-white text-xl hover:bg-orange-400 transition-colors cursor-pointer py-3">
                  Cuentas
                </div>
              </Link>
              <Link href={"/pago"}>
                <div className="text-center text-white text-xl hover:bg-orange-400 transition-colors cursor-pointer py-3">
                  Pagos
                </div>
              </Link>
              <Link href={"/transferencia"}>
                <div className="text-center text-white text-xl hover:bg-orange-400 transition-colors cursor-pointer py-3">
                  Transferencias
                </div>
              </Link>
              <Link href={"/prestamos"}>
                <div className="text-center text-white text-xl hover:bg-orange-400 transition-colors cursor-pointer py-3 mb-2">
                  Préstamos
                </div>
              </Link>
              <Link href={"/conversor"}>
                <div className="text-center text-white text-xl hover:bg-orange-400 transition-colors cursor-pointer py-3 mb-2">
                  Conversor de moneda
                </div>
              </Link>
            </div>
            <div className="lg:mt-72 sm:mt-72 md:mt-72">
              <Link href={"/"}>
                <div className="text-center text-white text-xl hover:bg-orange-400 transition-colors cursor-pointer py-3 mb-2">
                  Cerrar sesión
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
