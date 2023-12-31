import Link from "next/link";

// Obtener los datos de las cuentas disponibles
const fetchCuentas = () => {
  return fetch(`https://651449b58e505cebc2eb14a2.mockapi.io/cuentas`, {
    next: {
      revalidate: 60,
    },
  }).then((res) => res.json());
};

// Componente con las cuentas disponibles
export default async function Cuentas() {
  const cuentas = await fetchCuentas();
  return (
    <div className="flex gap-14 md:flex-wrap md:justify-center sm:flex-wrap sm:justify-center">
      {cuentas.map((cuenta) => (
        <div
          key={cuenta.id}
          className={
            cuenta.id == 1
              ? "bg-slate-50 border-l-4 border-y-4 border-y-slate-50 border-orange-400 shadow-md shadow-slate-700 w-96 rounded-md text-xl p-3 sm:w-80 transition-all hover:border-orange-400 hover:border-4"
              : "bg-slate-50 border-l-4 border-y-4 border-y-slate-50 border-slate-700 shadow-md shadow-slate-700 w-96 rounded-md text-xl p-3 sm:w-80 transition-all hover:border-slate-700 hover:border-4"
          }
        >
          <h5 className="text-black font-bold text-center text-lg uppercase">
            Caja ahorro - {cuenta.tipo_cuenta}
          </h5>
          <div className="py-4 px-2">
            <ul>
              <li>
                <p className="text-slate-800">
                  <span className="font-bold">N° de cuenta:</span>{" "}
                  {cuenta.numero_cuenta}
                </p>
              </li>
              <li>
                <p className="text-slate-800">
                  <span className="font-bold">Saldo: </span>$ {cuenta.saldo}
                </p>
              </li>
            </ul>
          </div>
          <div className="text-center">
            <Link href={`/cuentas/${cuenta.id}`}>
              <button className="hover:text-orange-400 transition-colors bg-slate-50 text-black py-1 px-2 rounded my-1 text-lg font-semibold">
                Ver detalle de la cuenta
              </button>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}
