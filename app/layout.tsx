import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/Nav/NavBar";
import Footer from "@/components/Footer";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ['400', '500', '600', '700'],
});

export const metadata: Metadata = {
  title: "Michael Collins - Your next(js) best developer.",
  description: "Quality Web Design",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <><html lang="en">
      <body>
        <div
          className={`${poppins.variable} relative h-full min-h-screen bg-background antialiased`}
        >
          <NavBar />
          {children}
        </div>
        <Footer />
      </body>
    </html></>
  );
}
