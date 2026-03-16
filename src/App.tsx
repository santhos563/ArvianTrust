import { Routes, Route } from "react-router-dom";
import About from "./components/about";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<About />} />
      </Routes>
    </div>
  );
};

export default App;