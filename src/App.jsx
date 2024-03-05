import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Intro from "./Components/Intro";
import About from "./Components/About";
import Contact from "./Components/Contact";
import ProjectSection from "./Components/ProjectSection";

function App() {
  return (
    <>
      <Intro />
      <ProjectSection />
      <About />
      <Contact />
    </>
  );
}

export default App;
