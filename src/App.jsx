import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Index from "./components/Index";
import Menu from "./components/Menu";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/menu" element={<Menu />} />
      </Routes>
    </Router>
  );
}

export default App;
