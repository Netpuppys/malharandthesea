import "./globals.css";
import { Overpass } from "next/font/google";
const inter = Overpass({ subsets: ["latin"] });
export const metadata = {
  title:
    "Malhar & The Sea: A Mesmerizing Musical and Cultural Extravaganza in Goa",
  description:
    "Join us for Malhar & The Sea, a unique event from August 30 to September 1, 2024, at ITC Grand Goa. Enjoy performances by renowned artists, culinary delights, mixology masterclasses, and more. Experience the magic of monsoon, music, and art in a spectacular seaside setting.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <script>
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-M62PZ53J');
          `}
        </script>
        <link rel="icon" href="/favicon.png" />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Pathway+Gothic+One&display=swap"
          rel="stylesheet"
        ></link>
        <script async src="https://www.googletagmanager.com/gtag/js?id=AW-671252312"></script>
        <script>
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-671252312');
          `}
        </script>
      </head>
      <body className={inter.className}>
        <noscript>
          <iframe 
            src="https://www.googletagmanager.com/ns.html?id=GTM-M62PZ53J"
            height="0" 
            width="0" 
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>

        {children}
      </body>
    </html>
  );
}
