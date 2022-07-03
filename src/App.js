import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/About';
import Product from './components/Product';
import Contact from './components/Contact';
import ProductDetail from './components/ProductDetail';
import Cart from './components/Cart';
import Checkout from './components/Checkout';
import Login from './components/Login';
import Signup from './components/Signup';
import BlackFooter from "./components/BlackFooter";
import Header from './components/Header';
import {
  Routes,
  Route
} from "react-router-dom";

function App() {
  return (
    <>
      {/* <Header2 /> */}
      <Header />
      {/* <Navbar /> */}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Product" element={<Product />} />
        <Route path="/products/:id" element={<ProductDetail />} />
        <Route path="/Cart" element={<Cart />} />
        <Route path="/Checkout" element={<Checkout />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/Login" element={<Login />} />
        <Route path="*" element={<Home />} />
      </Routes>

      <BlackFooter />

    </>
  );
}

export default App;
