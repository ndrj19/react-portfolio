import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Intro from "./Components/Intro";
import ProjectSection from "./Components/ProjectSection";
import About from "./Components/About";
import Contact from "./Components/Contact";
import TestCards from "./Components/TestCards";
import ProjectSectionClone from "./Components/ProjectSectionClone";
import ProjectSectionNew from "./Components/ProjectSectionNew";

function App() {
  return (
    <>
      <Intro />
      {/* <ProjectSection /> */}
      <ProjectSectionNew />
      <About />
      <Contact />
      {/* <TestCards /> */}
      {/* <ProjectSectionClone /> */}
    </>
  );
}

export default App;
