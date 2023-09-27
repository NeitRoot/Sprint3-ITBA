import Link from "next/link";

const fetchCuentas = () => {
  return fetch(`https://651449b58e505cebc2eb14a2.mockapi.io/cuentas`, {
    next: {
      revalidate: 60,
    },
  }).then((res) => res.json());
};

export default async function Cuentas() {
  const cuentas = await fetchCuentas();
  return (
    <div className="flex justify-center gap-10">
      {cuentas.map((cuenta) => (
        <div
          key={cuenta.id}
          className={
            cuenta.id == 1
              ? "bg-primary-blue border-l-4 border-orange-400 shadow-md shadow-primary-blue w-96 rounded-md text-xl p-3 sm:w-80 hover:scale-105 transition-all"
              : "bg-primary-blue border-l-4 border-slate-700 shadow-md shadow-primary-blue w-96 rounded-md text-xl p-3 sm:w-80 hover:scale-105 transition-all"
          }
        >
          <h5 className="text-white font-bold text-center text-lg uppercase">
            Caja ahorro - {cuenta.tipo_cuenta}
          </h5>
          <div className="py-4 px-2">
            <ul>
              <li>
                <p className="text-white">
                  <span className="font-bold">N° de cuenta:</span>{" "}
                  {cuenta.numero_cuenta}
                </p>
              </li>
              <li>
                <p className="text-white">
                  <span className="font-bold">Saldo: </span>$ {cuenta.saldo}
                </p>
              </li>
            </ul>
          </div>
          <div className="text-center">
            <Link href={`/cuentas/${cuenta.id}`}>
              <button className="hover:text-orange-400 hover:bg-primary-blue transition-colors bg-primary-blue text-white py-1 px-2 rounded my-1 text-lg font-semibold">
                Ver detalle de la cuenta
              </button>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}
