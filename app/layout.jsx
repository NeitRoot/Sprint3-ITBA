import "./globals.css";

import Head from "next/head";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata = {
  title: "ITBANK",
  description: "Home banking ITBANK - Sprint 3",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <body className={poppins.className}>{children}</body>
    </html>
  );
}
