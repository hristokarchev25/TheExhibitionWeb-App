import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import PabloPage from "./pages/pabloPage";
import SuzannePage from "./pages/suzannePage";
import JoanPage from "./pages/joanPage";
import ArtShopPage from "./pages/ArtShopPage";
import JoinUs from "./components/JoinUs/JoinUs";
import Registration from "./components/Registration/Registration";
import './App.css';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pabloPage" element={<PabloPage />} />
        <Route path="/suzannePage" element={<SuzannePage />} />
        <Route path="/joanPage" element={<JoanPage />} />
        <Route path="/artShop" element={<ArtShopPage />} />
        <Route path="/joinUs" element={<JoinUs />} />
        <Route path="/registration" element={<Registration />} />
      </Routes>
    </>
  );
}

export default App;
