import Topbar from "./components/topbar/Topbar";
import Intro from "./components/intro/Intro";
import Cv from "./components/cv/Cv";
import Projects from "./components/projects/Projects";
import Footer from "./components/footer/Footer";
import "./app.scss";
import { useState } from "react";
import Menu from "./components/menu/Menu";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="app">
      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <div className="sections">
        <Intro />
        <Cv />
        <Projects />
      </div>
      <Footer />
    </div>
  );
}

export default App;
