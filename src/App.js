import Navigation from "./components/Navigation";
import Home from "./components/Home";
import Library from "./components/Library";
import Reviews from "./components/Reviews";
import { Routes, Route } from 'react-router-dom';


export default function App() {
  return (
    <>
      <Navigation />
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/library" element={<Library />} />
          <Route path="/reviews" element={<Reviews />} />
        </Routes>

      </div>
    </>
  );
}



