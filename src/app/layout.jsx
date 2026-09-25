import Navbar from "@/components/shared/Navbar";
import { Inter, Oswald } from "next/font/google";
import "./globals.css";

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
      <body className={`${inter.className} bg-black`}>
        <Navbar />
        <main> {children}</main>
      </body>
    </html>
  );
}
