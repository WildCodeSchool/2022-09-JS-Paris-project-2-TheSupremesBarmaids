import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import List from "./pages/List";

import Home from "./pages/Home";

import Details from "./pages/Details";

import "./Styles/App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/list" element={<List />} />
        <Route path="/recipe/:slugCocktail" element={<Details />} />
      </Routes>
    </Router>
  );
}

export default App;
