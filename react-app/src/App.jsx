import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Layout from './layouts/Layout';
import Home from './pages/Home';
import { Yercaud, Yelagiri, Chennai } from './pages/Destinations';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';
import BookingConfirmation from './pages/BookingConfirmation';
import './index.css';

function App() {
  return (
    <HelmetProvider>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/family-resort-in-yercaud" element={<Yercaud />} />
            <Route path="/family-resort-in-yercaud/index.html" element={<Yercaud />} />
            <Route path="/yelagiri" element={<Yelagiri />} />
            <Route path="/yelagiri/index.html" element={<Yelagiri />} />
            <Route path="/chennai" element={<Chennai />} />
            <Route path="/chennai/index.html" element={<Chennai />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/booking-confirmation" element={<BookingConfirmation />} />
          </Routes>
        </Layout>
      </Router>
    </HelmetProvider>
  );
}

export default App;
