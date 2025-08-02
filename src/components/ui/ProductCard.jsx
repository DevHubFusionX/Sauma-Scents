import Button from './Button';
import Badge from './Badge';
import { FaWhatsapp } from 'react-icons/fa';

const ProductCard = ({ product, badge }) => {
  const handleWhatsAppOrder = () => {
    const message = `Hi! I'd like to order ${product.name} for ₦${product.price.toLocaleString()}`;
    const whatsappUrl = `https://wa.me/2348060683475?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden smooth-transition hover-lift fade-in">
      <div className="relative overflow-hidden">
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full h-64 object-cover smooth-transition hover:scale-110"
        />
        {badge && (
          <div className="absolute top-4 left-4">
            <Badge variant={badge}>{badge === 'new' ? 'New' : 'Popular'}</Badge>
          </div>
        )}
      </div>
      <div className="p-6">
        <h3 className="font-heading text-xl font-semibold text-gray-800 mb-2">
          {product.name}
        </h3>
        <p className="text-2xl font-bold text-emerald-800 mb-4">
          ₦{product.price.toLocaleString()}
        </p>
        <Button 
          onClick={handleWhatsAppOrder}
          className="w-full flex items-center justify-center gap-2 hover-lift"
        >
          <FaWhatsapp /> Order on WhatsApp
        </Button>
      </div>
    </div>
  );
};

export default ProductCard;