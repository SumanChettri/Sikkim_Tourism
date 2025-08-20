import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Destinations from './pages/Destinations';
import DestinationDetails from './pages/DestinationDetails';
import ItineraryPlanner from './pages/ItineraryPlanner';
import ItineraryResult from './pages/ItineraryResult';
import TaxiBooking from './pages/TaxiBooking';
import Gallery from './pages/Gallery';

function App() {
  return (
    <AuthProvider>
    <Router>
        <div className="App">
        <Navbar />
        <main className="pt-4 md:pt-6">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/destinations" element={<Destinations />} />
            <Route path="/destinations/:id" element={<DestinationDetails />} />
            <Route path="/itinerary-planner" element={<ItineraryPlanner />} />
            <Route path="/itinerary-result" element={<ItineraryResult />} />
            <Route path="/taxi-booking" element={<TaxiBooking />} />
            <Route path="/gallery" element={<Gallery />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
    </AuthProvider>
  );
}

export default App;
