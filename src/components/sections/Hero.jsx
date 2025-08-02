import Button from '../ui/Button';
import { FaWhatsapp, FaGift } from 'react-icons/fa';

const Hero = () => {
  const handleShopNow = () => {
    document.getElementById('shop').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative bg-gradient-to-br from-cream to-emerald-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <h1 className="font-heading text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Don't Think Twice.
              <span className="text-emerald-800 block">Smell Nice!</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Premium scents for every moment. High-quality, long-lasting fragrances 
              delivered straight to your door in Abuja.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button size="lg" onClick={handleShopNow} className="flex items-center gap-2">
                <FaWhatsapp /> Shop on WhatsApp
              </Button>
              <Button variant="outline" size="lg" className="flex items-center gap-2">
                <FaGift /> View Combos
              </Button>
            </div>
          </div>
          
          <div className="relative">
            <div className="relative z-10">
              <img 
                src="/src/assets/GxX0D0aWoAADh-u.jpg" 
                alt="Premium fragrance bottle"
                className="w-full max-w-md mx-auto rounded-2xl shadow-2xl"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-200 to-gold-400 rounded-2xl transform rotate-6 opacity-20"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;