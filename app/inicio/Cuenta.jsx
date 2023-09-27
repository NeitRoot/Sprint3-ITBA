import Link from "next/link";

const fetchCuentas = () => {
  return fetch("https://65121923b8c6ce52b39556eb.mockapi.io/cuentas/1").then(
    (res) => res.json()
  );
};

export default async function Cuenta() {
  const cuentas = await fetchCuentas();

  return (
    <>
      <div
        key={cuentas.id}
        className="bg-primary-blue w-80 rounded-md my-4 min-h-[10rem] border-l-4 border-orange-400"
      >
        <h2 className="text-white font-bold text-center text-lg uppercase">
          Caja de ahorro en {cuentas.tipo_cuenta}
        </h2>
        <div className="flex py-6 px-2 items-center gap-x-6">
          <p className="text-white">Saldo:</p>
          <p className="text-white text-2xl font-semibold">$ {cuentas.saldo}</p>
        </div>
        <div className="text-center">
          <Link href={"/cuentas"}>
            <button className="hover:text-orange-400 hover:bg-primary-blue transition-colors bg-primary-blue text-white py-1 px-2 rounded my-1 text-lg font-semibold">
              Ver más cuentas
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}
