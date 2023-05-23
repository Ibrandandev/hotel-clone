import "./globals.css";
import { Montserrat, Great_Vibes } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  weight: "400",
});
const greatVibes = Great_Vibes({
  subsets: ["latin"],
  variable: "--font-great-vibes",
  weight: "400",
});

export const metadata = {
  title: "The Harbor Rose",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es" className={`${montserrat.variable} ${greatVibes.variable}`}>
      <body>{children}</body>
    </html>
  );
}
