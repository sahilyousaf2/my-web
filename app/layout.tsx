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
  title: "Chris Tect Solution - Digital Innovation & Web Development",
  description: "Transform your vision into reality with Chris Tect Solution. We deliver innovative digital solutions including web development, UI/UX design, mobile apps, and AI solutions.",
  keywords: "web development, UI/UX design, mobile app development, AI solutions, cloud services, digital marketing",
  authors: [{ name: "Chris Tect Solution" }],
  openGraph: {
    title: "Chris Tect Solution - Digital Innovation & Web Development",
    description: "Transform your vision into reality with cutting-edge technology and expert solutions.",
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
