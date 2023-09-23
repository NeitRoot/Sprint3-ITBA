import Footer from "@/app/components/Footer";
import Header from "@/app/components/Header";
import SideBar from "@/app/components/Sidebar";

const Cuentas = () => {
  return (
    <>
      <Header />
      <SideBar />
      <div className="flex justify-center items-center gap-6 sm:flex-col">
        <div className="flex justify-center">
          <div className="bg-orange-400 w-96 m-5 rounded-lg text-xl text-orange-900 sm:w-80">
            <h5 className="font-bold ml-3 mt-2">Cuenta</h5>
            <div className="m-5 mt-0">
              <ul className="text-orange-100 ml-5">
                <li>
                  <span className="font-bold"> Titular:</span> NOMBRE
                </li>
                <li>TIPO DE CUENTA</li>
                <li>
                  {" "}
                  <span className="font-bold"> Saldo:</span> SALDO
                </li>
                <li>
                  {" "}
                  <span className="font-bold"> C.B.U:</span> CBU
                </li>
                <li>
                  <span className="font-bold"> Alias:</span> ALIAS
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="flex justify-center">
          <div className="bg-orange-400 w-96 rounded-lg text-xl text-orange-900 sm:w-80">
            <h5 className="font-bold ml-3 mt-2">Tarjetas</h5>
            <div className="m-5 mt-0">
              <ul className="text-orange-100 ml-3">
                <li>TIPO DE TARJETA</li>
                <li>
                  <span className="font-bold"> N° de tarjeta:</span> N° DE
                  TARJETA
                </li>
                <li>
                  <span className="font-bold"> Titular:</span> TITULAR
                </li>
                <li>
                  <span className="font-bold"> Vencimiento:</span> VENCIMIENTO
                </li>
                <li>
                  <span className="font-bold"> Código de seguridad:</span> COD.
                  DE SEGURIDAD
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Cuentas;
