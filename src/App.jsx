import About from "./Components/About";
import Card from "./Components/Card";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Port from "./Components/Port";
import { ThemeProvider } from "./context/ThemeContext";
// import Service from "./Components/Service";

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen">
        <Navbar />
        <About />
        <Port />
        <Contact />
        <Footer />
      </div>
    </ThemeProvider>
  );
}
export default App;
