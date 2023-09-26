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
      <div className="flex justify-center items-center gap-6 flex-col">
        <Cuentas />
        <Tarjetas />
      </div>
      <Footer />
    </>
  );
}
