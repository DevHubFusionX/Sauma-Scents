import ComboCard from '../ui/ComboCard';
import { combos } from '../../data/products';

const Combos = () => {
  return (
    <section id="combos" className="py-20 bg-green-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl font-bold text-gray-900 mb-4">
            Special Combos
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Save more with our carefully curated fragrance combinations. 
            Perfect for gifting or building your personal collection.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {combos.map((combo) => (
            <ComboCard key={combo.id} combo={combo} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Combos;