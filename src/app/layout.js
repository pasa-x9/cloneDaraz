import { Roboto } from 'next/font/google'
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
})

export const metadata = {
  title: "Daraz",
  description: "",
  icons: {
    icon: '/favicon.png', // /public path
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <Header/>
        {children}
        <Footer/>
        </body>
    </html>
  );
}
