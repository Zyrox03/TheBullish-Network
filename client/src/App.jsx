import { CallToAction } from "./components/landingPage/CallToAction";
import { Community } from "./components/landingPage/Community";
import { Events } from "./components/landingPage/Events";
import { Faq } from "./components/landingPage/Faq";
import { Footer } from "./components/landingPage/Footer";
import { Hero } from "./components/landingPage/Hero";
import { NavBar } from "./components/landingPage/NavBar";
import { Network } from "./components/landingPage/Network";

function App() {
  return (
    <div className="bg-main_bg min-h-screen flex flex-col items-center gap-12">
      <NavBar />
      <Hero />
      <Community />
      <Network />
      <CallToAction />
      <Events />
      <Faq />
      <CallToAction />
      <Footer />
    </div>
  );
}

export default App;
