import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import List from "./pages/List";
import Home from "./pages/Home";
import Details from "./pages/Details";
import "./Styles/App.css";

function App() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes key={location.pathname} location={location}>
        <Route path="/" element={<Home />} />
        <Route path="/list" element={<List />} />
        <Route path="/recipe/:slugCocktail" element={<Details />} />
      </Routes>
    </AnimatePresence>
  );
}

export default App;
