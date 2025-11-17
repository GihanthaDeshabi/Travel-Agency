import { Unbounded, Sora } from "next/font/google";
import "./globals.css";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import Nav from "./Components/Nav";
import Footer from "./Components/Footer";
config.autoAddCss = false;

const unbounded = Unbounded({
  variable: "--font-unbounded",
  subsets: ["latin"],
  weight: ["400","500","600", "700"],
});

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  weight: ["400","500","600", "700"],
});

export const metadata = {
  title: "Travel Agency",
  description: "Dream travel plan with us",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body
        className={`${sora.variable} ${unbounded.variable} antialiased`}
      >
         <Nav/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
