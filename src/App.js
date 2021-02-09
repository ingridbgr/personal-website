import "./App.css";
import AboutMe from "./pages/aboutMe/aboutme";
import Home from "./pages/home/home.jsx";
import WorksAndXp from "./pages/works/worksAndTech";
import Footer from "./components/footer/footer";

function App() {
  return (
    <container>
      <Home />
      <AboutMe />
      <WorksAndXp />
      <Footer />
    </container>
  );
}

export default App;
