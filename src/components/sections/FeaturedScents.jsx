import ProductCard from '../ui/ProductCard';
import { products } from '../../data/products';

const FeaturedScents = () => {
  return (
    <section id="shop" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl font-bold text-gray-900 mb-4">
            Featured Scents
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover our signature collection of premium fragrances, 
            each crafted to tell your unique story.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} badge={product.badge} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedScents;