import Footer from "@/app/components/Footer";
import Header from "@/app/components/Header";
import SideBar from "@/app/components/Sidebar";
import Cuentas from "./Cuentas";
import Tarjetas from "./Tarjetas";

export default async function Cuenta() {
  return (
    <>
      <Header />
      <SideBar />
      <div className="flex flex-col justify-center items-center gap-6">
        <h1 className="text-center text-2xl font-semibold uppercase">
          Tus cuentas
        </h1>
        <Cuentas />
        <h2 className="text-center text-2xl font-semibold uppercase">
          Tus tarjetas
        </h2>
        <Tarjetas />
      </div>
      <Footer />
    </>
  );
}
