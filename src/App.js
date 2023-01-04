import "./App.css";
import { Footer } from "./Components/Footer";

import  Header  from "./Components/Header";
import { Mainsection } from "./Components/Mainsection";
import ParticlesBackground from "./Components/ParticlesBackground";

function App() {
  return (
      <div>
        <ParticlesBackground/>
        <Header/>
        <Mainsection/>
        <Footer/>
      </div>
  );
}

export default App;
