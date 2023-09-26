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
        className="bg-orange-400 w-80 rounded-md text-xl text-orange-900 my-4 min-h-[8rem]"
      >
        <h2 className="text-orange-900 font-bold">
          Caja de ahorro en {cuentas.tipo_cuenta}
        </h2>
        <p className="text-white">Saldo: $ {cuentas.saldo}</p>
        <Link
          href={"/cuentas"}
          className="flex justify-center pt-4 hover:text-white transition-colors"
        >
          Ver todo
        </Link>
      </div>
    </>
  );
}
