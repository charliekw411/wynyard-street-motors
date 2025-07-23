import { Wind, Zap, Battery, Disc } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Wind,
      title: "Air and Cabin Filter Replacement",
      description: "Ensure your vehicle's air quality and performance by regularly replacing air and cabin filters. Breathe easier and enjoy a clean, comfortable ride.",
      image: "https://images.pexels.com/photos/4489702/pexels-photo-4489702.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      icon: Zap,
      title: "Vehicle Engine Diagnostic",
      description: "We employ cutting-edge diagnostic tools to pinpoint engine issues quickly and accurately, saving you time and money on repairs.",
      image: "https://images.pexels.com/photos/3806288/pexels-photo-3806288.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      icon: Battery,
      title: "Battery Services",
      description: "Don't get stranded with a dead battery. We offer battery testing, replacement, and maintenance services to keep your vehicle reliable.",
      image: "https://images.pexels.com/photos/4489741/pexels-photo-4489741.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      icon: Disc,
      title: "Brake Repairs",
      description: "Safety is paramount. Trust us for expert brake inspections and repairs, ensuring your vehicle stops effectively when you need it to.",
      image: "https://images.pexels.com/photos/4489775/pexels-photo-4489775.jpeg?auto=compress&cs=tinysrgb&w=600"
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Key Services</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From routine maintenance to complex repairs, we provide comprehensive automotive services 
            to keep your vehicle running safely and efficiently.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-gray-50 rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 bg-red-600 p-3 rounded-lg">
                  <service.icon className="h-6 w-6 text-white" />
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;