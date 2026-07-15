import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './layouts/Layout';
import Home from './pages/Home';
import { Yercaud, Yelagiri, Chennai } from './pages/Destinations';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';
import BookingConfirmation from './pages/BookingConfirmation';
import './index.css';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/yercaud" element={<Yercaud />} />
          <Route path="/yelagiri" element={<Yelagiri />} />
          <Route path="/chennai" element={<Chennai />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/booking-confirmation" element={<BookingConfirmation />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
