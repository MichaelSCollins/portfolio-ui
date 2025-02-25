import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import NavBar from "@/components/nav/NavBar";
import Footer from "@/components/Footer";
import GoogleAnalytics from "@/lib/analytics/google";
import "./globals.css";
const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ['400', '500', '600', '700'],
});

export const metadata: Metadata = {
  title: "Michael Collins - Your next(js) best developer.",
  description: "Quality Web Design",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  GoogleAnalytics.send("pageview");
  return (
    <html lang="en">
      <body>
        <div
          className={`${poppins.variable} 
          h-full bg-background antialiased`}
        >
          <NavBar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}