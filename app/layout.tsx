'use client';
import BannerSlider from "./components/banner";
import Footer from "./components/Footer";
import Header from "./components/Header";
import "./globals.css";
import { ThemeProvider } from "./ThemeProvider";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning>
         <ThemeProvider>
          <Header />
          <BannerSlider/>
          {children}
          {/* <Toaster /> */} 
          <Footer/>
        </ThemeProvider>
      </body>
    </html>
  );
}
