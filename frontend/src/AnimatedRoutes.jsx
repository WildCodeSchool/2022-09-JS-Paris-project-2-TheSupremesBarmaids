import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import List from "./pages/List";
import Home from "./pages/Home";
import Details from "./pages/Details";

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/list" element={<List />} />
        <Route path="/recipe/:slugCocktail" element={<Details />} />
      </Routes>
    </AnimatePresence>
  );
}
export default AnimatedRoutes;
