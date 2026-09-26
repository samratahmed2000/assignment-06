import Navbar from "@/components/shared/Navbar";
import { Inter, Oswald } from "next/font/google";
import "./globals.css";
import Footer from "@/components/shared/Footer";
import { Analytics } from "@vercel/analytics/next";
import WorkoutProvider from "@/context/WorkoutsContext";
import { ToastContainer } from "react-toastify";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const oswald = Oswald({
  subsets: ["latin"],
  variable: "--font-oswald",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${oswald.variable}`}>
      <body className={`${inter.className} bg-[#0C0D10]`}>
        <WorkoutProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
          <Analytics />
          <ToastContainer />
        </WorkoutProvider>
      </body>
    </html>
  );
}
