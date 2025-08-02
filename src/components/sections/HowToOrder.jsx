import { FaSearch, FaWhatsapp, FaCheckCircle, FaTruck } from 'react-icons/fa';

const HowToOrder = () => {
  const steps = [
    {
      icon: <FaSearch className="w-8 h-8" />,
      title: "Browse Products",
      description: "Explore our collection of premium scents"
    },
    {
      icon: <FaWhatsapp className="w-8 h-8" />,
      title: "Order on WhatsApp",
      description: "Click the WhatsApp button with pre-filled details"
    },
    {
      icon: <FaCheckCircle className="w-8 h-8" />,
      title: "Confirm Details",
      description: "Review and confirm your order with us"
    },
    {
      icon: <FaTruck className="w-8 h-8" />,
      title: "Get Delivered",
      description: "Receive your scents or pick up in Lugbe, Abuja"
    }
  ];

  return (
    <section id="how-to-order" className="py-20 bg-emerald-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl font-bold text-gray-900 mb-4">
            How to Order
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Getting your favorite scents is simple and straightforward
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="text-center fade-in">
              <div className="bg-white rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6 shadow-lg text-emerald-800">
                {step.icon}
              </div>
              <div className="bg-emerald-800 text-white rounded-full w-8 h-8 flex items-center justify-center mx-auto mb-4 text-sm font-bold">
                {index + 1}
              </div>
              <h3 className="font-heading text-xl font-semibold text-gray-900 mb-2">
                {step.title}
              </h3>
              <p className="text-gray-600">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowToOrder;