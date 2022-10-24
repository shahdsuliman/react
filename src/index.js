import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Details from "./pages/Details";


export default function Appp() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
          
          <Route path="Details" element={<Details />}/>
        
      </Routes>
    </BrowserRouter>
  );
}

ReactDOM.render(<Appp />, document.getElementById("root"));