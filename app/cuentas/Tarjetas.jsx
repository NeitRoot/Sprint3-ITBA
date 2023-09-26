const fetchTarjetas = () => {
  return fetch("https://65121923b8c6ce52b39556eb.mockapi.io/tarjetas").then(
    (res) => res.json()
  );
};

export default async function Tarjetas() {
  const tarjetas = await fetchTarjetas();

  return (
    <div className="flex justify-center gap-4">
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
                <span className="font-bold"> Titular:</span> {tarjeta.titular}
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
  );
}
