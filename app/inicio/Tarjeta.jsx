import NumeroTarjeta from "./NumeroTarjeta";

const Tarjeta = () => {
  return (
    <div className="bg-orange-400 w-80 rounded-md text-xl text-orange-900 my-4 min-h-[8rem]">
      <h2 className="font-bold ml-2">Tarjetas</h2>
      <div>
        <p className="text-white ml-3">Número de tarjeta</p>
        <NumeroTarjeta />
      </div>
    </div>
  );
};

export default Tarjeta;
