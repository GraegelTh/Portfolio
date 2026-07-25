import { MotionConfig } from "framer-motion";
import Navbar from "./components/layout/Navbar";
import Hero from "./components/hero/Hero";
import About from "./components/about/About";
import StackMatrix from "./components/stack/StackMatrix";
import Projects from "./components/projects/Projects";
import AgenticFooter from "./components/footer/AgenticFooter";

function App() {
  return (
    <MotionConfig reducedMotion="user">
      <Navbar />
      <main>
        <Hero />
        <About />
        <StackMatrix />
        <Projects />
      </main>
      <AgenticFooter />
    </MotionConfig>
  );
}

export default App;
