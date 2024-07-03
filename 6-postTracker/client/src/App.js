import "./App.css";
import Nav from "./components/Nav";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <Router>
      <div className="container">
        <Nav />
      </div>
    </Router>
  );
}

export default App;
