import "./globals.css";
import type { Metadata } from "next";
import { Roboto, Lato, Raleway } from "next/font/google";
import localFont from 'next/font/local';

const roboto = Roboto({ subsets: ["latin"], weight: ["900"], variable: '--font-roboto' });
const lato = Lato({ subsets: ["latin"], weight: ["300", "700", "900"], variable: '--font-lato' });
const raleway = Raleway({ subsets: ["latin"], weight: ["800"], variable: '--font-raleway' });

const runic = localFont({
  src: [
    {
      path: '../../public/fonts/runic/futha.ttf',
      weight: '500',
      style: 'normal'
    },
    // {
    //   path: '../../public/fonts/runic/futhai.ttf',
    //   weight: '500',
    //   style: 'normal'
    // },
  ],
  variable: '--font-runic'
})

export const metadata: Metadata = {
  title: "Runicat",
  description:
    "[BETA] Runicat is a react web app created for people who want to understand the present and the future through runes. Type your birthdate and let universe works for you!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${roboto.variable} ${lato.variable} ${raleway.variable} ${runic.variable}`}>{children}</body>
    </html>
  );
}
