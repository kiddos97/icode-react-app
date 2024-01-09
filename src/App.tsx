import { useEffect } from "react";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
//import Search from "./components/Search";
import Testimonial from "./components/Testimonial";
import NewsLetter from "./components/NewsLetter";
import Cards from "./components/Cards";
import Footer from "./components/Footer";

function App() {
  useEffect(() => {
    document.title = "icode.";
  });
  return (
    <div>
      <NavBar />
      <Hero />
      <Testimonial />
      <NewsLetter />
      <Cards />
      <Footer />
    </div>
  );
}

export default App;
