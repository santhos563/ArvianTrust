
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AboutMain from "./pages/about/AboutMain";
import ContactMain from "./pages/contact/ContactMain";
import HomeMain from "./pages/home/HomeMain";
import NavBar from "./components/shared/NavBar";
import Footer from "./components/shared/Footer";
import About from "./components/about";


const App = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomeMain />} />
        <Route path="/about" element={<About />} />       
        <Route path="/contact" element={<ContactMain />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;