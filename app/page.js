import HeroSecation from "./_components/HeroSection";
import Rouatna from "./_components/Rouatna";
import Resaltna from "./_components/Resaltna";
import Contact from "./_components/Contact";
import Test from "./_components/Test";
import Ahdfna from "./_components/Ahdfna";
import TeamWork from "./_components/TeamWork";
import Cv from "./_components/Cv";
import Secatin from "./_components/Secation";
import 'bootstrap/dist/css/bootstrap.min.css';
export default function Home() {
  return (
    <>
      <Resaltna />
      <Rouatna />
      <Cv />
      <Ahdfna />
      <Secatin />
      <Test />
      <TeamWork />
      <Contact />
    </>
  );
}
