import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import PabloPage from "./pages/pabloPage";
import SuzannePage from "./pages/suzannePage";
import JoanPage from "./pages/joanPage";
import './App.css';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pabloPage" element={<PabloPage />} />
        <Route path="/suzannePage" element={<SuzannePage />} />
        <Route path="/joanPage" element={<JoanPage />} />
      </Routes>
    </>
  );
}

export default App;
