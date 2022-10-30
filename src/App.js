
import './App.css';
import './index.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Details from "./pages/Details";

function App() {
  return (
    <BrowserRouter basename="/react">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Details" element={<Details />} />
      </Routes>
    </BrowserRouter>
  );

}

export default App;
