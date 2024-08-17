import "./globals.css";
import { Overpass } from "next/font/google";
const inter = Overpass({ subsets: ["latin"] });

export const metadata = {
  title: "Malhar & The Sea: A Mesmerizing Musical and Cultural Extravaganza in Goa",
  description: "Join us for Malhar & The Sea, a unique event from August 30 to September 1, 2024, at ITC Grand Goa. Enjoy performances by renowned artists, culinary delights, mixology masterclasses, and more. Experience the magic of monsoon, music, and art in a spectacular seaside setting.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
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
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '1775436869466195');
            fbq('track', 'PageView');
            `,
          }}
        />
        <noscript>
          <img 
            height="1" 
            width="1" 
            style="display:none"
            src="https://www.facebook.com/tr?id=1775436869466195&ev=PageView&noscript=1"
          />
        </noscript>
      </head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}