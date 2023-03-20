import Navbar from "./components/navbar";
import Hero from "./components/hero";
import Content from "./components/content";
import Card from "./components/card";
import "./App.scss";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Content />
      <Card />
    </div>
  );
}

export default App;
