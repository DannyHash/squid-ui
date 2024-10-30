import Hero from "./components/Hero";
import HeroTemplate from "./components/HeroTemplate";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <>
      <div className="px-8 py-4 md:px-12 lg:px-20">
        <Navbar />
        <div className="max-w-7xl mx-auto">
          <Hero />
        </div>
      </div>
      <HeroTemplate />
    </>
  );
};

export default App;
