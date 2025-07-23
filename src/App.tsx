import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Bookings from './components/Bookings';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen w-full">
      <Header />
      <Hero />
      <Services />
      <Bookings />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;