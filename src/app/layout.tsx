import type { Metadata } from "next";
import "./globals.css";
import {Instrument_Sans} from 'next/font/google'


const fontInstrumentSans = Instrument_Sans({
  subsets: ["latin"],
  variable: "--font-instrument",
});

export const metadata: Metadata = {
  title: "Mapa Sonoro de Picos",
  description: "Mapa Sonoro de Picos - décadas de 1980",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${fontInstrumentSans.variable}  font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
