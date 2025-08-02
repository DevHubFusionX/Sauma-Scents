const About = () => {
  return (
    <section id="about" className="py-20 bg-gold-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <img 
              src="/GZyskK4WgAAKlZy.jpg" 
              alt="Sauma Scents collection"
              className="w-full rounded-2xl shadow-xl"
            />
          </div>
          
          <div>
            <h2 className="font-heading text-4xl font-bold text-gray-900 mb-6">
              About Sauma Scents
            </h2>
            <div className="space-y-4 text-gray-700 text-lg leading-relaxed">
              <p>
                Sauma Scents is a perfume brand based in Abuja, offering high-quality, 
                long-lasting scents delivered straight to your door.
              </p>
              <p>
                We believe everyone deserves to smell amazing without breaking the bank. 
                Our carefully curated collection features premium fragrances that make 
                every moment special.
              </p>
              <p>
                From bold, sophisticated scents to fresh, everyday fragrances, 
                we have something for every personality and occasion.
              </p>
            </div>
            <div className="mt-8 p-6 bg-white rounded-xl shadow-lg">
              <h3 className="font-heading text-2xl font-semibold text-emerald-800 mb-2">
                Our Promise
              </h3>
              <p className="text-gray-600">
                Premium quality, affordable prices, and reliable delivery in Abuja. 
                Available for pickup in Lugbe or delivered to your doorstep.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;