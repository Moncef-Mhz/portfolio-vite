import About from "./components/About";
import Contact from "./components/Contact";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Project from "./components/Project";
import Tech from "./components/Tech";

function App() {
  return (
    <main className="bg-background  bg-pattern bg-repeat  h-screen w-full ">
      <Navbar />
      <Hero />
      <About />
      <Tech />
      <Project />
      <Contact />
    </main>
  );
}

export default App;
