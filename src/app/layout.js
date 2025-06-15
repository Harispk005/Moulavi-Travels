import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Moulavi Travels",
  description: "JOURNEY WITH FAITH, EXPLORE WITH WONDER",
  openGraph: {
    title: "Moulavi Travels",
    description: "JOURNEY WITH FAITH, EXPLORE WITH WONDER",
    url: "https://www.moulavitravels.com/", 
    siteName: "Moulavi Travels",
    images: [
      {
        url: "https://www.moulavitravels.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Moulavi Travels OG Image",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="https://www.moulavitravels.com/moulavi-icon.png" sizes="any" type="image/png" />
      </head>

      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
