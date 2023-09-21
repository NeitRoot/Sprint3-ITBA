import Image from "next/image";
import Logo from "@/app/assets/images/logo.png";
import React from "react";

const Header = () => {
  return (
    <>
      <nav className="bg-gradient-to-b from-orange-400 w-screen fixed top-0">
        <div className="w-24 h-20 ml-24">
          <Image src={Logo} alt="LOGO ITBANK" />
        </div>
      </nav>
    </>
  );
};

export default Header;
