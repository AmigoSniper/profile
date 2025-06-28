import Nav from "./Components/Navbar";
import Footer from "./Components/Footer";
import Home from "./Components/Home";
import About from "./Components/About";
import Project from "./Components/Projects";
import Contact from "./Components/Contact";
import MoveToTop from "./Components/MoveToTop";
import "./App.css";

function App() {

  return (
    <div>
      <>
        <Nav />
        <MoveToTop />
        <Home />
        <About />
        <Project />
        {/* <Contact /> */}
        <Footer />
      </>
    </div>
  );
}

export default App;
