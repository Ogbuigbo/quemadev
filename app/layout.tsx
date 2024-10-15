import type { Metadata } from "next";
import { Playfair_Display, Open_Sans } from "next/font/google";
import "./globals.css";
import Header from "./_components/Header";
import Footer from "./_components/Footer";
import "react-toastify/dist/ReactToastify.css"
import { ToastContainer } from "react-toastify"

// Fonts
const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["400", "600"],
});

export const metadata: Metadata = {
  title: {
    default: "Quema Consulting",
    template: "%s | Quema Consulting"
  },
  description: "Quema Consulting is an organizational development and HR business advisory firm that provides organizational solution for companies and institutions to ensure that their corporate concern are thriving through strategic planning.",
  twitter: {
    card: 'summary_large_image'
  },
  openGraph: {
    images: 'https://tinypic.host/images/2024/10/16/opengraph-image.png'
  }

};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={openSans.className}>
        <div className="sticky top-0 z-50">
          <Header />
        </div>
        <div>
          {children}
          <ToastContainer
						position="top-right"
						autoClose={5000}
						hideProgressBar
						newestOnTop
						closeOnClick
						rtl={false}
						pauseOnFocusLoss
						draggable
						pauseOnHover
						theme="dark"
					/>
        </div>
        <Footer />
      </body>
    </html>
  );
}
