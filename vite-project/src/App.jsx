import Blogs from "./components/Blogs/Blogs";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <Blogs />
    </div>
  );
};

export default App;
