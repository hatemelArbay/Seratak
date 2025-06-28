import "./globals.css";
import Header from "./_components/Header";
import { Tajawal } from "next/font/google";
import Footer from "./_components/Footer";
import Labul from "./_components/Labul";
import HeroSection from "./_components/HeroSection";

const tajawal = Tajawal({
  subsets: ["arabic"],
  weight: ["400", "700"],
  display: "swap",
  variable: "--font-tajawal",
});
export const metadata = {
  title: "Seratak",
  description:
    "في سيرتك، نُحول خبراتك وإنجازاتك إلى سيرة ذاتية احترافية تُعبّر عنك بأفضل صورة",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ar" className={tajawal.variable}>
      <link rel="icon" href="/favicon.ico" />

      <body>
        <Header />
        <HeroSection />
        <Labul />
        {children}
        <Footer />
      </body>
    </html>
  );
}
