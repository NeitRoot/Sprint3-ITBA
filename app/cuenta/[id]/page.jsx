import Footer from "@/app/components/Footer";
import Header from "@/app/components/Header";
import SideBar from "@/app/components/Sidebar";
import { cuentas } from "@/app/utils/data";

const fetchCuentaSeleccionada = () => {
  return cuentas;
};
export default async function PageCuenta({ params }) {
  const { id } = params;
  const cuenta = await fetchCuentaSeleccionada();
  return (
    <>
      <Header />
      <SideBar />
      <h1>ID seleccionado: {id}</h1>
      {cuenta.map((item) => (
        <div key={item.id}>
          <p>{item.titular}</p>
          <p>{item.tipo_cuenta}</p>
          <p>{item.saldo}</p>
        </div>
      ))}
      <Footer />
    </>
  );
}
