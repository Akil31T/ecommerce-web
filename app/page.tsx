import Image from "next/image";
import Header from "./components/Header";
import Hero from "./components/Hero";
import ProductGrid from "./components/ProductGrid";
import ProductCard from "./components/ProductCard";
import Footer from "./components/Footer";

export default function Home() {
  return (
   <>
   <Header/>
   <Hero/>
   <ProductGrid/>
   {/* <ProductCard product={}/> */}
   <Footer/>
   </>
  );
}
