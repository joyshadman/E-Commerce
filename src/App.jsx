import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ProductPage from "./pages/productpage";
import Cart from "./pages/Cart"; // This will be your dynamic product page
import Signup from "./pages/Signup";
import Addtocart from "./pages/Addtocart";
import Contact from "./pages/Contact";
import About from "./pages/About";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/productpage" element={<ProductPage />} />
       <Route path="/product/:id" element={<Cart />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/addtocart" element={<Addtocart/>} />
        <Route path="/Contact" element={<Contact/>} />
        <Route path="/About" element={<About/>} />

      </Routes>
    </Router>
  );
}

export default App;
