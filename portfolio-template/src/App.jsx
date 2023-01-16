import "./App.css";
import Hero from "./components/middle/Hero";
import Left__hero from "./components/left/Left__hero";
import Right__hero from "./components/right/Right__hero";
// import Icons from "./components/icons/Icons";

function App() {
  return (
    <div>
      <div className="container">
        <Left__hero />
        <Hero />
        <Right__hero />
      </div>
      <h1 style={{ textAlign: "center", background: "#646cff", color: "#fff" }}>
        Portfolio Website
        {/* <Icons /> */}
      </h1>
    </div>
  );
}

export default App;
