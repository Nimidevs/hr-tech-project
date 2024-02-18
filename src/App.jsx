import "./App.css";
import { Header } from "./components/Header";
import { Herosection } from "./components/Hero-section";
import { Services } from "./components/Services";
import { Getstarted } from "./components/Getstarted";
import { About } from "./components/About";
import { Solutions } from "./components/Solutions";
import { Platform } from "./components/Platform";
import { Why } from "./components/Why";
import { Usersfeedback } from "./components/Usersfeedback";
import { Conversion } from "./components/Conversion";
import { Footer } from "./components/Footer";
import { Faq } from "./components/Faq";
function App() {
  return (
    <>
      <Header />
      <Services />
      <Getstarted />
      <About />
      <Solutions />
      <Platform />
      <Why />
      <Usersfeedback />
      <Conversion />
      <Faq />
      <Footer />
    </>
  );
}

export default App;
