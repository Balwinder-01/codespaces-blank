import Navbar from "./components/navbar";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import AllRoute from "./AllRoute";
import Auth from "./pages/Auth/Auth";

function App() {
  return (
    <Router>
      <Navbar />
      <AllRoute />
    </Router>
  );
}

export default App;
