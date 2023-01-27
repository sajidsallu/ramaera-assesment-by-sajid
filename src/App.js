import Carousel from "react-bootstrap/Carousel";
import Home from "./pages/Home";
import Service from "./pages/services/Service";
import Contact from "./components/contactform/Contact";
import { Routes, Route } from "react-router-dom";


function App() {  
  return (
    <Routes> 
            <Route path="/" element={<Home/> } /> 
            <Route path="/contact" element={<Contact/> } /> 
    </Routes>
  );
}

export default App;
