import { Overpass } from "next/font/google";
import "./globals.css";

const inter = Overpass({ subsets: ["latin"] });

export const metadata = {
  title: "Malhaar and the Sea",
  description: "Showhouse India presents",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link href="https://fonts.googleapis.com/css2?family=Pathway+Gothic+One&display=swap" rel="stylesheet"></link>
      </head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}
