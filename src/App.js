import Category from "./Components/Category";
import Food from "./Components/Food";
import Footer from "./Components/Footer";
import Headline from "./Components/Headline";
import Hero from "./Components/Hero";
import Navbar from "./Components/Navbar";


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Hero/>
      <Headline/>
      <Food/>
      <Category/>
      <Footer/>
    </div>
  );
}

export default App;
