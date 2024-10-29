import Hero from "./components/Hero";
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
    </>
  );
};

export default App;
