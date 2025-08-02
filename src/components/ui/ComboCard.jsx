import Button from './Button';
import { FaWhatsapp, FaTag } from 'react-icons/fa';

const ComboCard = ({ combo }) => {
  const handleWhatsAppOrder = () => {
    const message = `Hi! I'd like to order the ${combo.name} combo for ₦${combo.discountPrice.toLocaleString()}`;
    const whatsappUrl = `https://wa.me/2348060683475?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden smooth-transition hover:shadow-xl">
      <div className="relative">
        <img 
          src={combo.image} 
          alt={combo.name}
          className="w-full h-48 object-cover"
        />
        <div className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold flex items-center gap-1">
          <FaTag className="w-3 h-3" /> {combo.discount} OFF
        </div>
      </div>
      <div className="p-6">
        <h3 className="font-heading text-xl font-semibold text-gray-800 mb-2">
          {combo.name}
        </h3>
        <p className="text-gray-600 mb-3">
          Includes: {combo.products.join(', ')}
        </p>
        <div className="flex items-center gap-3 mb-4">
          <span className="text-lg line-through text-gray-400">
            ₦{combo.originalPrice.toLocaleString()}
          </span>
          <span className="text-2xl font-bold text-green-800">
            ₦{combo.discountPrice.toLocaleString()}
          </span>
        </div>
        <Button 
          onClick={handleWhatsAppOrder}
          variant="secondary"
          className="w-full flex items-center justify-center gap-2"
        >
          <FaWhatsapp /> Order Combo
        </Button>
      </div>
    </div>
  );
};

export default ComboCard;