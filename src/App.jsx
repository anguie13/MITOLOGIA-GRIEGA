import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Index from "./components/Index";
import Menu from "./components/Menu";
import PrincipalesDioses from "./components/PrincipalesDioses";
import DescripciónDioses from "./components/DescripciónDioses";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/principales_dioses" element={<PrincipalesDioses />} />
        <Route path="/descripcion-dioses" element={<DescripciónDioses />} />
      </Routes>
    </Router>
  );
}

export default App;
