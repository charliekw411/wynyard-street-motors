import { Users, Award, Heart, Shield } from 'lucide-react';

const About = () => {
   

  return (
    <section id="about" className="py-20 bg-white">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">About Wynyard Street Motors</h2>
              <div className="space-y-4 text-lg text-gray-600 leading-relaxed">
                <p>
                  For over 15 years, Wynyard Street Motors has been Devonport's trusted automotive 
                  service center. As a family-run business, we understand the importance of reliable 
                  transportation for you and your loved ones.
                </p>
                <p>
                  Our experienced team of certified mechanics is committed to providing honest, 
                  transparent service that you can depend on. We believe in building long-term 
                  relationships with our customers through quality workmanship and fair pricing.
                </p>
                <p>
                  Being MTA Assured means we meet the highest standards of professionalism and 
                  technical expertise in the automotive industry. When you choose us, you're 
                  choosing peace of mind.
                </p>
              </div>
            </div>

            <div className="flex items-center space-x-4 p-6 bg-red-50 rounded-lg">
              {/* Placeholder for logo */}
              <div className="w-12 h-12">
                <img
                  src="/mta-assured.jpg"
                  alt="Wynyard Street Motors"
                  className="h-full w-full object-contain"
                />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900">MTA Assured Quality</h3>
                <p className="text-gray-600">Your guarantee of professional automotive service</p>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <img 
              src="https://images.pexels.com/photos/4489741/pexels-photo-4489741.jpeg?auto=compress&cs=tinysrgb&w=800" 
              alt="Our professional workshop"
              className="w-full h-64 object-cover rounded-xl shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;