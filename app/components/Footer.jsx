import {
  FaFacebookSquare,
  FaInstagram,
  FaWhatsappSquare,
} from "react-icons/fa";
import Link from "next/link";

const Footer = () => {
  return (
    <>
      <footer className="w-screen fixed bottom-0">
        <div className="bg-gradient-to-t from-orange-400 h-50 w-screen">
          <div className="w-80 ">
            <ul className="text-orange-800 text-xl ml-10 sm:mb-5 mt-5">
              <li>
                <Link href={"/terminos"}>|| Términos y condiciones</Link>
              </li>
              <li>
                <Link href={"/privacidad"}>|| Políticas de privacidad</Link>
              </li>
              <li>
                <Link href={"/contacto"}>|| Contacto</Link>
              </li>
            </ul>
            <div className="text-orange-800 w-screen text-center ">
              <Link
                href={"https://www.facebook.com"}
                target="blank"
                name="link Facebook"
              >
                <button className="m-2 text-3xl" name="facebook">
                  <FaFacebookSquare></FaFacebookSquare>
                </button>
              </Link>
              <Link
                href={"https://www.instagram.com"}
                target="blank"
                name="link Instagram"
              >
                <button className="m-2 text-3xl" name="instagram">
                  <FaInstagram></FaInstagram>
                </button>
              </Link>
              <Link
                href={"https://www.whatsapp.com"}
                target="blank"
                name="link Whatsapp"
              >
                <button className="m-2 text-3xl" name="whatsapp">
                  <FaWhatsappSquare></FaWhatsappSquare>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
