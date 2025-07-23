import { Calendar, Clock, User, Car } from 'lucide-react';

const Bookings = () => {
  const handleBookNow = () => {
    window.open('https://booking.auxosoftware.com/H4TyCPwY+kGhz8PCxyuhNA==', '_blank');
  };

  const bookingSteps = [
    {
      icon: User,
      title: "Your Details",
      description: "Provide your contact information"
    },
    {
      icon: Car,
      title: "Vehicle Info",
      description: "Tell us about your car"
    },
    {
      icon: Calendar,
      title: "Service Type",
      description: "Select the service you need"
    },
    {
      icon: Clock,
      title: "Choose Time",
      description: "Pick a convenient appointment slot"
    }
  ];

  return (
    <section id="bookings" className="py-20 bg-gray-50">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Book Your Service</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Schedule your appointment online in just a few simple steps. 
            We'll get your vehicle back on the road safely and efficiently.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {bookingSteps.map((step, index) => (
            <div key={index} className="text-center">
              <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <step.icon className="h-8 w-8 text-red-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
              {index < bookingSteps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2">
                  <div className="w-8 h-0.5 bg-red-200"></div>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Book?</h3>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Click below to access our online booking system. You'll be able to select your preferred 
            date and time, and we'll confirm your appointment within 24 hours.
          </p>
          
          <button 
            onClick={handleBookNow}
            className="bg-red-600 text-white px-12 py-4 rounded-lg font-semibold hover:bg-red-700 transition-all duration-300 transform hover:scale-105 shadow-lg text-lg"
          >
            Book Online Now
          </button>
          
          <div className="mt-8 pt-8 border-t border-gray-200">
            <p className="text-gray-600">
              Prefer to call? Reach us at{' '}
              <a href="tel:094451357" className="text-red-600 font-semibold hover:underline">
                09 445 1357
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Bookings;