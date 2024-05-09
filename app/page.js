import { Issuecard } from "@/components/Issuecard";
import { MainPageWithData } from "@/components/MainPageWithData";
import { Map } from "@/components/Map";
import { Navbar } from "@/components/Navbar";
import { Sidecard } from "@/components/Sidecard";
import  Potholes  from "@/public/PotHoles.png"
import  Clogged  from "@/public/clogged.png"
import Contamination from "@/public/contamination.png"
import Leak from "@/public/leak.png"

export default function Home() {
  // const location = { latitude: 23.4733, longitude: 77.947998 };

  return (
    <main>
      <MainPageWithData/>
    </main>
  );
}
