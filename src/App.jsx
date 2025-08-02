import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import WhatsAppFloat from './components/layout/WhatsAppFloat';
import Hero from './components/sections/Hero';
import FeaturedScents from './components/sections/FeaturedScents';
import Combos from './components/sections/Combos';
import Testimonials from './components/sections/Testimonials';
import About from './components/sections/About';
import HowToOrder from './components/sections/HowToOrder';
import Contact from './components/sections/Contact';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <FeaturedScents />
        <Combos />
        <Testimonials />
        <About />
        <HowToOrder />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}

export default App;
