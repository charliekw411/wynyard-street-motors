import { ArrowRight, Calendar } from 'lucide-react';

const Hero = () => {
  const scrollToServices = () => {
    const element = document.getElementById('services');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleBookService = () => {
    window.open('https://booking.auxosoftware.com/H4TyCPwY+kGhz8PCxyuhNA==', '_blank');
  };

  return (
    <section id="home" className="bg-gradient-to-br from-gray-50 to-gray-100 py-20">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Reliable Local Mechanics in 
                <span className="text-gray-900"> Devonport</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Your trusted automotive service center providing quality repairs, maintenance, 
                and inspections with transparency and expertise.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={handleBookService}
                className="bg-red-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-red-700 transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2 shadow-lg"
              >
                <Calendar className="h-5 w-5" />
                <span>Book a Service</span>
              </button>
              <button 
                onClick={scrollToServices}
                className="border-2 border-red-600 text-red-600 px-8 py-4 rounded-lg font-semibold hover:bg-red-600 hover:text-white transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <span>View Services</span>
                <ArrowRight className="h-5 w-5" />
              </button>
            </div>

            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-gray-200">
              <div className="text-center">
                <div className="text-3xl font-bold text-red-600">15+</div>
                <div className="text-gray-600">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-red-600">500+</div>
                <div className="text-gray-600">Happy Customers</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-red-600">100%</div>
                <div className="text-gray-600">MTA Assured</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="bg-white rounded-2xl shadow-2xl p-8 transform rotate-3 hover:rotate-0 transition-transform duration-500">
              <img 
                src="https://images.pexels.com/photos/3806288/pexels-photo-3806288.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="Professional mechanic working on car engine"
                className="w-full h-80 object-cover rounded-lg"
              />
              <div className="mt-6 text-center">
                <h3 className="text-xl font-semibold text-gray-900">Professional Service</h3>
                <p className="text-gray-600 mt-2">Expert mechanics you can trust</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;