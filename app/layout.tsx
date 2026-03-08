import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";


const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Chris Tech Solution | Web Development & Digital Solutions",
  description: "Transform your business with innovative technology solutions. Web development, mobile apps, UI/UX design, and cloud solutions from Chris Tech Solution.",
  keywords: "web development, mobile apps, UI/UX design, cloud solutions, digital transformation",
  authors: [{ name: "Chris Tech Solution" }],
  openGraph: {
    title: "Chris Tech Solution | Innovative Tech Solutions",
    description: "Expert web development and digital solutions for your business growth.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
          <Header/>
          {children}
<Footer/>
      </body>
    </html>
  );
}
