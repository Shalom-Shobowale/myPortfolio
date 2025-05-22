import About from "./Components/About";
import Card from "./Components/Card";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Port from "./Components/Port";
// import Service from "./Components/Service";

function App() {
  return (
    <>
      <Navbar />
      <About />
      <Port />
      <div className="h-[150vh] overflow-y-scroll no-scrollbar">
        <Card
          image="firstProject.png"
          text="Alberto Wrist Watch"
          link="https://alberto-watch.vercel.app/"
          textLink="https://alberto-watch.vercel.app/"
          about="A Wrist Watch website,focused on delivering a refined shopping experience, this wristwatch website blends minimalist design with functionality.  "
          tools="TailwindCss and JavaScript"
          gitLink="https://github.com/Shalom-Shobowale/Alberto-watch"
        />
        <Card
          image="forthP.png"
          text="Burger House"
          link="https://burger-react-silk.vercel.app/"
          textLink="https://burger-react-silk.vercel.app/"
          about="Burger website, bringing the fun of a burger joint online, this site combines a vibrant design with seamless functionality. "
          tools="TailwindCss and ReactJs"
          gitLink="https://github.com/Shalom-Shobowale/Burger-react"
        />
        <Card
          image="fifthP.png"
          text="Travel Smart"
          link="https://travel-smart-umber.vercel.app/"
          textLink="https://travel-smart-umber.vercel.app/"
          about="Travel Smart, this travel smart website was designed to simplify planning for all types of travelers."
          tools="TailwindCss and ReactJs"
          gitLink="https://github.com/Shalom-Shobowale/Travel-smart"
        />
        <Card
          image="thirdP.png"
          text="Guessing Game"
          link="https://guessing-game-cyan.vercel.app/"
          textLink="https://guessing-game-cyan.vercel.app/"
          about="Guessing game website"
          tools="HTML,CSS and JavaScript"
          gitLink="https://github.com/Shalom-Shobowale/guessing-game"
        />
        <Card
          image="secondP.png"
          text="FordLand"
          link="https://fordland-properties.vercel.app/"
          textLink="https://fordland-properties.vercel.app/"
          about="A real estate website"
          tools="TailwindCss and JavaScript"
          gitLink="https://github.com/Shalom-Shobowale/Real-estate"
        />
        <Card
          image="fitness.png"
          text="Fitness"
          link="https://fitness-frontend-b1am.onrender.com/"
          textLink="https://fitness-frontend-b1am.onrender.com/"
          about="A Fitness website that helps you to keep fit and stay healthy"
          tools="ReactJs, TailwindCss, NodeJs and ExpressJs"
          gitLink="https://github.com/Shalom-Shobowale/fitness"
        />
        <Card
          image="vege.png"
          text="Vegefoods"
          link="https://vegetables-rho.vercel.app//"
          textLink="https://vegetables-rho.vercel.app/"
          about="An e-commerce website that sells vegetables and fruits"
          tools="NextJs, TailwindCss, NodeJs and ExpressJs"
          gitLink="https://github.com/Shalom-Shobowale/Vegetables"
        />
      </div>
      <Contact />
      <Footer />
    </>
  );
}
export default App;
