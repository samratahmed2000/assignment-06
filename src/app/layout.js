import Navbar from "@/components/shared/Navbar";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="dark" className={inter.className}>
      <body>
        <Navbar />
        <main> {children}</main>
      </body>
    </html>
  );
}
