import { BrowserRouter as Router } from "react-router-dom";
import "./Styles/App.css";
import AnimatedRoutes from "./services/AnimatedRoutes";

function App() {
  return (
    <Router>
      <AnimatedRoutes />
    </Router>
  );
}

export default App;
