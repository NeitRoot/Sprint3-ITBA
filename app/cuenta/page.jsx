import Footer from "@/app/components/Footer";
import Header from "@/app/components/Header";
import SideBar from "@/app/components/Sidebar";
import { cuentas, tarjetas } from "@/app/utils/data";
import Link from "next/link";

const fetchCuentas = () => {
  return cuentas;
};

const fetchTarjetas = () => {
  return tarjetas;
};

export default async function Cuenta() {
  const cuentas = await fetchCuentas();
  const tarjetas = await fetchTarjetas();

  return (
    <>
      <Header />
      <SideBar />
      <div className="flex justify-center items-center gap-6 sm:flex-col">
        <div className="flex justify-center flex-col">
          {cuentas.map((cuenta) => (
            <div
              key={cuenta.id}
              className="bg-orange-400 w-96 m-5 rounded-lg text-xl text-orange-900 sm:w-80"
            >
              <h5 className="font-bold ml-3 mt-2">Cuenta</h5>
              <div className="m-5 mt-0">
                <ul>
                  <li>
                    <p className="font-bold">Nombre: {cuenta.titular}</p>
                  </li>
                  <li>
                    <p className="font-bold">Cuenta: {cuenta.tipo_cuenta}</p>
                  </li>
                  <li>
                    <p className="font-bold">Saldo: {cuenta.saldo}</p>
                  </li>
                </ul>
              </div>
              <Link href="cuenta/[id]" as={`cuenta/${cuenta.id}`}>
                <button className="flex mx-auto text-white">Ver detalle</button>
              </Link>
            </div>
          ))}
        </div>

        <div className="flex justify-center flex-col gap-4">
          {tarjetas.map((tarjeta) => (
            <div
              key={tarjeta.id}
              className="bg-orange-400 w-full rounded-lg text-xl text-orange-900 sm:w-80"
            >
              <h5 className="font-bold ml-3 mt-2">Tarjetas</h5>
              <div className="m-5 mt-0">
                <ul className="text-orange-100 ml-3">
                  <li>{tarjeta.tipo_tarjeta}</li>
                  <li>
                    <span className="font-bold"> N° de tarjeta:</span>{" "}
                    {tarjeta.numero}
                  </li>
                  <li>
                    <span className="font-bold"> Titular:</span>{" "}
                    {tarjeta.titular}
                  </li>
                  <li>
                    <span className="font-bold"> Vencimiento:</span>{" "}
                    {tarjeta.fecha_expiracion}
                  </li>
                  <li>
                    <span className="font-bold"> Código de seguridad:</span>{" "}
                    {tarjeta.cvv}
                  </li>
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}
