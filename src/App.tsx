import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import "./App.css";
import Home from './pages/Home';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import About from "./pages/About";
import Contact from "./pages/Contact";
import Cart from './pages/Cart';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="products" element={<ItemListContainer />} />
          <Route path="cart" element={<Cart />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
