import InfoTarjeta from "./InfoTarjeta";
import Link from "next/link";

const Tarjeta = () => {
  return (
    <div className="bg-primary-blue w-80 rounded-md my-4 min-h-[10rem] border-l-4 border-orange-400 shadow-md shadow-primary-blue">
      <h2 className="text-white font-bold text-center text-lg uppercase pt-2">
        Tarjetas
      </h2>
      <InfoTarjeta />
      <div className="text-center">
        <Link href={"/cuentas"}>
          <button className="hover:text-orange-400 hover:bg-primary-blue transition-colors bg-primary-blue text-white py-1 px-2 rounded my-1 text-lg font-semibold">
            Ver más tarjetas
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Tarjeta;
