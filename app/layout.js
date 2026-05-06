import { GoogleTagManager } from "@next/third-parties/google";
import { Raleway, Onest, JetBrains_Mono } from "next/font/google";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "./components/footer";
import ScrollToTop from "./components/helper/scroll-to-top";
import ScrollProgress from "./components/helper/scroll-progress";
import Spotlight from "./components/helper/spotlight";
import Navbar from "./components/navbar";
import "./css/card.scss";
import "./css/globals.scss";

// Display font — Raleway: elegant, thin-to-bold contrast, refined
const raleway = Raleway({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

// Body font — Onest: humanist, warm, readable
const onest = Onest({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["300", "400", "500", "600"],
});

// Mono — for code blocks
const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400", "500"],
});

export const metadata = {
  title: "Smit Patne — Software Engineer",
  description:
    "Portfolio of Smit Patne. Software engineer specialising in full-stack development, AI systems, and cloud infrastructure.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning
      className={`${raleway.variable} ${onest.variable} ${mono.variable}`}>
      <body suppressHydrationWarning>
        <ScrollProgress />
        <Spotlight />
        <ToastContainer />
        <main className="min-h-screen relative mx-auto px-6 sm:px-12 lg:max-w-[70rem] xl:max-w-[76rem] 2xl:max-w-[92rem] text-white">
          <Navbar />
          {children}
          <ScrollToTop />
        </main>
        <Footer />
      </body>
      <GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GTM} />
    </html>
  );
}
