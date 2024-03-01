import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Intro from "./Components/Intro";
import ProjectSection from "./Components/ProjectSection";
import About from "./Components/About";
import Contact from "./Components/Contact";

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
