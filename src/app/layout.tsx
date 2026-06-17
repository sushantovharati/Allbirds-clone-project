import type { Metadata } from "next";
import "./globals.css";
import { CartProvider } from "@/lib/cartContext";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import AnnouncementBar from "@/components/layout/AnnouncementBar";

export const metadata: Metadata = {
  title: "Allbirds: Comfortable, Sustainable Shoes & Apparel",
  description:
    "The world's most comfortable shoes, made with natural materials like merino wool, eucalyptus tree fiber, and sugar cane. FREE shipping & returns.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <CartProvider>
          <AnnouncementBar />
          <Header />
          <main>{children}</main>
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
