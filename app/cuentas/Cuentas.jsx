import Link from "next/link";

const fetchCuentas = () => {
  return fetch("https://65121923b8c6ce52b39556eb.mockapi.io/cuentas").then(
    (res) => res.json()
  );
};

export default async function Cuentas() {
  const cuentas = await fetchCuentas();
  return (
    <div className="flex justify-center">
      {cuentas.map((cuenta) => (
        <div
          key={cuenta.id}
          className="bg-orange-400 w-96 m-5 rounded-lg text-xl sm:w-80"
        >
          <h5 className="font-bold ml-3 mt-2 text-orange-900">Cuenta</h5>
          <div className="m-5 mt-0">
            <ul>
              <li>
                <p className="text-white">
                  <span className="font-bold">Nombre:</span> {cuenta.titular}
                </p>
              </li>
              <li>
                <p className="text-white">
                  <span className="font-bold">Cuenta:</span>{" "}
                  {cuenta.tipo_cuenta}
                </p>
              </li>
              <li>
                <p className="text-white">
                  <span className="font-bold">Saldo: </span>$ {cuenta.saldo}
                </p>
              </li>
            </ul>
          </div>
          <Link
            href={`cuentas/${cuenta.id}`}
            className="text-white flex justify-center"
          >
            Ver detalle de cuenta
          </Link>
        </div>
      ))}
    </div>
  );
}
