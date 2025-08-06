import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import "aos/dist/aos.css";
import './index.css';
import {
  HashRouter as Router ,
  Routes,
  Route
} from 'react-router-dom';
// All pages
import Home from './pages/Home';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';
import DemoProduct from './pages/DemoProduct';
import News from './pages/News';
import Products from './pages/Products';
import ProductDetails from './pages/ProductDetails';
import {useDocTitle} from './components/CustomHook';
import ScrollToTop from './components/ScrollToTop';
import Loader from './components/Loader';

function App() {
  useDocTitle("Protthapan");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500); // Loader will display for 2.5 seconds

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const aos_init = () => {
      AOS.init({
        once: true,
        duration: 1000,
        easing: 'ease-out-cubic',
      });
    }

    window.addEventListener('load', () => {
      aos_init();
    });
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <>
      <Router>
        <ScrollToTop>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/products" element={<Products />} />
            <Route path="/products/:id" element={<ProductDetails />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/get-demo" element={<DemoProduct />} /> 
            <Route path="/news" element={<News />} />
          </Routes>
        </ScrollToTop>
      </Router>
    </>
  );
}


export default App;
