import "./App.css";
import Carousel from "./components/ExperienceCarousel";
import Hero from "./components/Hero";
import Nav from "./components/Nav";

function App() {
  return (
    <div className="App">
      <Nav />
      <Hero />
      <Carousel />
    </div>
  );
}

export default App;
