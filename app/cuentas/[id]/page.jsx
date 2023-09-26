import Footer from "@/app/components/Footer";
import Header from "@/app/components/Header";
import SideBar from "@/app/components/Sidebar";

const fetchCuentaSeleccionada = (id) => {
  return fetch(
    `https://65121923b8c6ce52b39556eb.mockapi.io/cuentas/${id}`
  ).then((res) => res.json());
};

export default async function DetalleCuenta({ params }) {
  const { id } = params;
  const cuentas = await fetchCuentaSeleccionada(id);

  return (
    <>
      <Header />
      <SideBar />
      <div className="flex flex-col items-center">
      <h1>ID seleccionado: {id}</h1>
        <p>Titular: {cuentas.titular}</p>
        <p>Tipo de cuenta: {cuentas.tipo_cuenta}</p>
        <p>Saldo de cuenta: {cuentas.saldo}</p>
        <p>Alias: {cuentas.alias}</p>
        <p>C.B.U: {cuentas.cbu}</p>
      </div>
      <Footer />
    </>
  );
}
