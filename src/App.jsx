import { HashRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import './shop.css';
import { Topbar, Navbar } from './components/Header';
import Home from './components/Home';
import Shop from './components/Shop';
import BottomNav from './components/BottomNav';
import FloatingAction from './components/FloatingAction';
import { Footer } from './components/Banners';

function App() {
  return (
    <HashRouter>
      <Topbar />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
      </Routes>
      <Footer />
      <BottomNav />
      <FloatingAction />
    </HashRouter>
  );
}

export default App;
