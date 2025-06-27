import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NewNavBar from "./components/NewNavBar";
import Hero from "./components/Hero";
import YouTubeEmbed from "./components/YouTubeEmbed";
import About from "./components/About";

function Home() {
  return (
    <div>
      <Hero />
      <YouTubeEmbed />
    </div>
  );
}

function App() {
  return (
    <Router>
      <div className="bg-white text-gray-900 min-h-screen">
        <NewNavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
