import { Box } from "@mui/material";
import "./App.css";
import Contact from "./client/module/contact";
import Home from "./client/module/home";
import Projects from "./client/module/projects";
import Skills from "./client/module/skills";
import Footer from "./client/shared/components/footer";
import ParticlesBg from "./component/ParticlesBg";

function App() {
  return (
    <div>
      <ParticlesBg />
      <Box>
        <Home />
        <Projects />
        <Skills />
        <Contact />
        <Footer />
      </Box>
    </div>
  );
}

export default App;
