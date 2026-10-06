import Image from "next/image";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";


export default function Home() {
  return (
    <>
    <Navbar/>
    <div className="flex flex-col flex-1">
      Home
    </div>
    <Footer/>
    </>
  );
}
