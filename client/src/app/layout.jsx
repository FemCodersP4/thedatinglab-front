"use client";
import "./globals.css";
import { Nunito_Sans, Ms_Madi } from "next/font/google";
import { ThemeProvider } from "@/app/providers/MaterialProvider.jsx";
import Footer from "@/app/components/common/Footer.jsx";
import NavigationBar from "@/app/components/common/NavBar.jsx";
import UserProvider from "@/app/providers/UserProvider.jsx";

const nunito = Nunito_Sans({
  subsets: ["latin"],
  weight: ["400", "600", "800", "1000"],
  variable: "--font-nunito",
  display: "swap",
});

const madi = Ms_Madi({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-madi",
  display: "swap",
});

// export const metadata = {
//   title: "Dating Lab",
//   description: "Dating Lab",
// };

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={`${nunito.variable} ${madi.variable}`}>
        <ThemeProvider>
          <UserProvider>
            <NavigationBar />
            {children}
            <Footer />
          </UserProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}