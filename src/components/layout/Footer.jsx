import { FaInstagram, FaFacebook, FaTwitter, FaWhatsapp, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-emerald-800 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-heading text-2xl font-bold mb-4">Sauma Scents</h3>
            <p className="text-emerald-100 mb-4">
              Premium scents for every moment. High-quality fragrances delivered in Abuja.
            </p>
            <p className="text-emerald-100">
              Don't Think Twice. Smell Nice!
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold text-lg mb-4">Business Hours</h4>
            <div className="space-y-2 text-emerald-100">
              <p>Monday - Saturday: 9AM - 7PM</p>
              <p>Sunday: 12PM - 5PM</p>
            </div>
            <h4 className="font-semibold text-lg mb-2 mt-6">Pickup Location</h4>
            <p className="text-emerald-100">Lugbe, Abuja</p>
          </div>
          
          <div>
            <h4 className="font-semibold text-lg mb-4">Contact Info</h4>
            <div className="space-y-2 text-green-100">
              <p className="flex items-center gap-2"><FaWhatsapp /> +234 806 068 3475</p>
              <p className="flex items-center gap-2"><FaEnvelope /> hello@saumascents.com</p>
              <p className="flex items-center gap-2"><FaMapMarkerAlt /> Abuja, Nigeria</p>
            </div>
            <div className="flex space-x-4 mt-4">
              <a href="https://x.com/Siyaamarh" target="_blank" rel="noopener noreferrer" className="text-emerald-100 hover:text-white smooth-transition">
                <FaTwitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-emerald-100 hover:text-white smooth-transition">
                <FaInstagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-emerald-100 hover:text-white smooth-transition">
                <FaFacebook className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-emerald-700 mt-8 pt-8 text-center text-emerald-100">
          <p>&copy; 2024 Sauma Scents. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;