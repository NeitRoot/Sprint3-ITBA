import Link from "next/link";

const Cuenta = () => {
  return (
    <div className="bg-orange-400 w-80 rounded-md text-xl text-orange-900 my-4 min-h-[8rem]">
      <h2 className="font-bold ml-2">Cuentas</h2>
      <p className="text-white ml-3">CUENTA</p>
      <p className="text-white ml-5">SALDO</p>
      <Link
        href={"/cuenta"}
        className="flex justify-center hover:text-white transition-colors"
      >
        Ver todo
      </Link>
    </div>
  );
};

export default Cuenta;
