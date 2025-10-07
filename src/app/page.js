import Image from "next/image";
import Nav from "./components/header";
import Hero from "./components/hero";
import Tech from "./components/tech";
import Why from "./components/why";
import Table from "./components/table";
import About from "./components/about";
import { News } from "./components/news";
import Footer from "./components/footer";

export default function Home() {
  
  return (
    <div className="bg-[#FFFDEA] min-h-dvh text-[#626262]">
      <Nav />
      <Hero />
      <Tech />
      <div className="bg-gradient-to-br from-[#F1FCBC]/40 via-[#FFFDEA] to-[#F1FCBC]">
        <Why />
        <Table />
      </div>
      <About />
      <News />
      <Footer />
    </div>
  );
}
