
import React from 'react';
import { Users, Building, Target, Heart, Lightbulb, CheckCircle } from 'lucide-react';
import Teams from './Teams';

export default function OurStory() {
  const services = [
    {
      icon: <Target className="w-6 h-6" />,
      title: "Analyze Site & Create Concept",
      description: "We thoroughly analyze your site and create innovative concepts tailored to your vision."
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Coordinate with Client",
      description: "We work closely with clients to understand and fulfill their specific requirements."
    },
    {
      icon: <Building className="w-6 h-6" />,
      title: "Site Execution",
      description: "We execute projects with precision, ensuring complete client satisfaction."
    }
  ];

  const teamMembers = [
    {
      name: "Mr. Nadeem Ahmad",
      role: "Founder",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Er. Shahzad Ahmad",
      role: "Civil Engineer",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Ar. Shuaib Ahmad",
      role: "Architect",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Ar. Shahrukh",
      role: "Architect",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&h=150&fit=crop&crop=face"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* What We Do Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">
              What We Do
            </h2>
            <div className="w-24 h-1 bg-black mx-auto"></div>
          </div>

          {/* Services Grid */}
          {/* <div className="grid md:grid-cols-3 gap-8 mb-16">
            {services.map((service, index) => (
              <div 
                key={index}
                className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-200"
              >
                <div className="flex items-center justify-center w-16 h-16 bg-black rounded-full text-white mb-6 mx-auto">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-black mb-4 text-center">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-center leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div> */}

          {/* Mission Statement */}
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 border border-gray-200">
            <div className="max-w-4xl mx-auto text-center">
              <div className="w-16 h-16 bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-8">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-black mb-8">
                Our Mission & Values
              </h3>
              <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
                <p className="text-lg leading-relaxed">
                  We are dedicated to creating spaces that inspire, sustain, and connect people. With a passion for innovative design and a commitment to excellence, we aim to leave a lasting impact on the built environment.
                </p>
                <p className="text-lg leading-relaxed">
                  Our top priority is client satisfaction. By coordinating closely with clients, we fulfill their essential requirements and exceed their expectations.
                </p>
                <p className="text-lg leading-relaxed font-semibold text-black">
                  Our mission is to provide a wonderful & luxurious life wherever someone lives and to keep human life in harmony with nature.
                </p>
                <div className="bg-gray-100 rounded-xl p-6 mt-8">
                  <p className="text-lg text-gray-800 font-medium">
                    We specialize in <span className="text-black font-semibold">Residential</span>, <span className="text-gray-700 font-semibold">Commercial</span>, <span className="text-gray-600 font-semibold">Educational</span>, and <span className="text-gray-500 font-semibold">Hospitality</span> projects.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      {/* <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-200 to-gray-300">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">
              Our Team
            </h2>
            <div className="w-24 h-1 bg-black mx-auto mb-4"></div>
            <p className="text-xl text-gray-700 max-w-2xl mx-auto">
              Meet the passionate professionals who bring your vision to life
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div 
                key={index}
                className="bg-white rounded-2xl shadow-lg p-8 text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-200"
              >
                <div className="flex items-center justify-center w-20 h-20 rounded-full mb-6 mx-auto overflow-hidden">
                  <img 
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-300"
                  />
                </div>
                <h3 className="text-xl font-bold text-black mb-2">
                  {member.name}
                </h3>
                <p className="text-gray-600 font-medium text-lg">
                  {member.role}
                </p>
                <div className="mt-4 w-16 h-1 bg-gray-400 mx-auto"></div>
              </div>
            ))}
          </div>
        </div>
      </section> */}
      <Teams/>
    </div>
  );
}