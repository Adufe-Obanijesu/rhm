import {Routes, Route, BrowserRouter} from "react-router-dom";

// Importing components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Importing pages
import Homepage from "./pages/Homepage";
import Messages from "./pages/Messages";
import Programmes from "./pages/Programmes";
import Writeups from "./pages/Writeups";
import AboutUs from "./pages/AboutUs";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/messages" element={<Messages />} />
          <Route path="/programmes" element={<Programmes />} />
          <Route path="/writeups" element={<Writeups />} />
          <Route path="/about" element={<AboutUs />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
