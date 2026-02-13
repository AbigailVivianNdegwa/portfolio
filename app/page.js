 import Image from "next/image";
import Home from '@/Components/Home';
import About from '@/Components/About';
import Services from '@/Components/Services';
import Portfolio from '@/Components/Portfolio';


export default function Page() {
  return (
    <div>
      <Home/>
      <About/>
      <Services/>
      <Portfolio/>

    </div>
  )
}
