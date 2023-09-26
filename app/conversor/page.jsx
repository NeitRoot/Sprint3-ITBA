import Footer from "@/app/components/Footer";
import Header from "@/app/components/Header";
import SideBar from "@/app/components/Sidebar";
import FormConversor from "./FormConversor";

const Conversor = () => {
  return (
    <>
      <Header />
      <SideBar />
      <section className="flex flex-col items-center">
        <div>
          <h1 className="flex justify-center my-6 text-4xl text-center">
            Conversor de moneda
          </h1>
          <h2 className="flex justify-center my-6 text-2xl text-center">
            Elegí la moneda e ingresá la cantidad a convertir
          </h2>
        </div>
        <FormConversor />
      </section>
      <Footer />
    </>
  );
};

export default Conversor;
