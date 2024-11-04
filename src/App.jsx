// import { HashRouter as Router, Routes, Route } from S'react-router-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import ProductList from './components/ProductList';
import ProductDetail from './components/ProductDetail';
import NavigationBar from './components/NavigationBar';
import AboutUs from './components/AboutUs';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
 
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (query) => {
    setSearchTerm(query);
  };

  return (
    <Router>
      <NavigationBar onSearch={handleSearch} />
      <Routes>
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/" element={<ProductList searchTerm={searchTerm} />} />
        <Route path="/product/:id" element={<ProductDetail />} />
      </Routes>
    </Router>
  )
}

export default App
