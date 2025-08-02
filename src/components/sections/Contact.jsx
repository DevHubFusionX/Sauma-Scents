import Button from '../ui/Button';
import { FaWhatsapp, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const Contact = () => {
  const handleWhatsAppContact = () => {
    const message = "Hi! I'd like to know more about your fragrances.";
    const whatsappUrl = `https://wa.me/2348060683475?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="contact" className="py-20 bg-emerald-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl font-bold mb-4">
            Get In Touch
          </h2>
          <p className="text-xl text-emerald-100 max-w-2xl mx-auto">
            Ready to find your signature scent? We're here to help you choose 
            the perfect fragrance for any occasion.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="flex items-center space-x-4">
              <div className="bg-emerald-700 p-3 rounded-full">
                <FaWhatsapp className="text-2xl" />
              </div>
              <div>
                <h3 className="font-semibold text-lg">WhatsApp</h3>
                <p className="text-emerald-100">+234 806 068 3475</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="bg-emerald-700 p-3 rounded-full">
                <FaEnvelope className="text-2xl" />
              </div>
              <div>
                <h3 className="font-semibold text-lg">Email</h3>
                <p className="text-emerald-100">hello@saumascents.com</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="bg-emerald-700 p-3 rounded-full">
                <FaMapMarkerAlt className="text-2xl" />
              </div>
              <div>
                <h3 className="font-semibold text-lg">Pickup Location</h3>
                <p className="text-emerald-100">Lugbe, Abuja</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-2xl p-8 text-gray-800">
            <h3 className="font-heading text-2xl font-semibold mb-6 text-center">
              Quick Contact
            </h3>
            <div className="space-y-4">
              <p className="text-center text-gray-600 mb-6">
                Have questions about our fragrances? Want personalized recommendations? 
                Click below to start a conversation with us on WhatsApp!
              </p>
              <Button 
                onClick={handleWhatsAppContact}
                className="w-full flex items-center justify-center gap-2"
                size="lg"
              >
                <FaWhatsapp /> Chat on WhatsApp
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;