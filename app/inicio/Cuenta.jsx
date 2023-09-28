import Link from "next/link";

const fetchCuentas = () => {
  return fetch(`https://651449b58e505cebc2eb14a2.mockapi.io/cuentas/1`, {
    next: {
      revalidate: 60,
    },
  }).then((res) => res.json());
};

export default async function Cuenta() {
  const cuentas = await fetchCuentas();

  return (
    <>
      <div
        key={cuentas.id}
        className="bg-slate-50 w-80 rounded-md my-4 min-h-[10rem] border-l-4 border-orange-400 shadow-md shadow-slate-700"
      >
        <h2 className="text-black font-bold text-center text-lg uppercase pt-2">
          Caja de ahorro - {cuentas.tipo_cuenta}
        </h2>
        <div className="flex py-5 px-2 items-center">
          <p className="text-slate-800 text-3xl font-medium mx-auto">
            $ {cuentas.saldo}
          </p>
        </div>
        <div className="text-center">
          <Link href={"/cuentas"}>
            <button className="hover:text-orange-400 transition-colors bg-slate-50 text-black py-1 px-2 rounded my-1 text-lg font-semibold">
              Ver más cuentas
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}
