
"use client"
import { useState } from 'react';
import { Home, Building, Lightbulb, Palette, Sofa, Ruler, ArrowRight, Sparkles } from 'lucide-react';

const services = [
  {
    icon: Home,
    title: "Residential Design",
    description: "Creating personalized living spaces that reflect your lifestyle and aesthetic preferences with thoughtful design solutions.",
    features: ["Custom Layouts", "Color Consultation", "Furniture Selection"],
    color: "from-blue-500 to-indigo-600",
    bgColor: "bg-blue-50",
    iconBg: "bg-blue-100"
  },
  {
    icon: Building,
    title: "Commercial Design",
    description: "Professional environments that enhance productivity and leave lasting impressions on clients and employees.",
    features: ["Office Planning", "Brand Integration", "Ergonomic Solutions"],
    color: "from-emerald-500 to-teal-600",
    bgColor: "bg-emerald-50",
    iconBg: "bg-emerald-100"
  },
  {
    icon: Lightbulb,
    title: "Lighting Design",
    description: "Strategic illumination that transforms ambiance and highlights architectural features beautifully.",
    features: ["Mood Lighting", "Task Lighting", "Accent Features"],
    color: "from-amber-500 to-orange-600",
    bgColor: "bg-amber-50",
    iconBg: "bg-amber-100"
  },
  {
    icon: Palette,
    title: "Color Consultation",
    description: "Expert color schemes that create harmony and enhance the emotional impact of your space.",
    features: ["Color Psychology", "Trend Analysis", "Custom Palettes"],
    color: "from-purple-500 to-pink-600",
    bgColor: "bg-purple-50",
    iconBg: "bg-purple-100"
  },
  {
    icon: Sofa,
    title: "Furniture Selection",
    description: "Carefully curated furniture pieces that balance style, comfort, and functionality perfectly.",
    features: ["Style Matching", "Quality Assessment", "Space Optimization"],
    color: "from-rose-500 to-red-600",
    bgColor: "bg-rose-50",
    iconBg: "bg-rose-100"
  },
  {
    icon: Ruler,
    title: "Space Planning",
    description: "Maximizing your space's potential through strategic layout and intelligent design solutions.",
    features: ["Flow Optimization", "Storage Solutions", "Multi-functional Design"],
    color: "from-cyan-500 to-blue-600",
    bgColor: "bg-cyan-50",
    iconBg: "bg-cyan-100"
  }
];

export default function ServicesSection() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);


  return (
    <section className="py-24 bg-gray-100  relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-40">
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-200 rounded-full filter blur-3xl opacity-20"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-200 rounded-full filter blur-3xl opacity-20"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="flex items-center justify-center mb-6">
            <Sparkles className="w-8 h-8 text-gray-700 mr-3" />
            <span className="text-gray-700 font-semibold text-lg tracking-wide uppercase">Our Services</span>
          </div>
          <h2 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Transforming Spaces with 
            <span className="bg-gradient-to-r from-gray-700 to-black bg-clip-text text-transparent"> Expert Design</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            From concept to completion, we bring your vision to life with unparalleled attention to detail, 
            innovative solutions, and a commitment to excellence that exceeds expectations.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => {
            const Icon = service.icon;
            const isHovered = hoveredCard === index;
            
            return (
              <div
                key={service.title}
                className={`group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 cursor-pointer border border-gray-100 overflow-hidden ${isHovered ? 'scale-105' : ''}`}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                {/* Background Gradient Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                
                {/* Icon */}
                <div className={`relative w-16 h-16 ${service.iconBg} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className={`w-8 h-8 bg-gradient-to-r ${service.color} bg-clip-text text-transparent`} />
                </div>

                {/* Content */}
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-gray-800 transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-6 group-hover:text-gray-700 transition-colors duration-300">
                    {service.description}
                  </p>

                  {/* Features List */}
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-500 group-hover:text-gray-600 transition-colors duration-300">
                        <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${service.color} mr-3`}></div>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* Learn More Button */}
                  <button className={`flex items-center text-sm font-semibold bg-gradient-to-r ${service.color} bg-clip-text text-transparent group-hover:translate-x-1 transition-transform duration-300`}>
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </button>
                </div>

                {/* Hover Effect Border */}
                <div className={`absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-gradient-to-r group-hover:${service.color} opacity-0 group-hover:opacity-20 transition-opacity duration-500`}></div>
              </div>
            );
          })}
        </div>

        {/* Call to Action */}
         <div className="text-center bg-gradient-to-r from-gray-800 to-black rounded-3xl p-12 text-white shadow-2xl">
          <h3 className="text-3xl font-bold mb-4">Ready to Transform Your Space?</h3>
          <p className="text-gray-300 mb-8 text-lg max-w-2xl mx-auto">
            Let's discuss your project and create something extraordinary together. 
            Our team is ready to bring your vision to life.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="bg-white text-gray-800 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 flex items-center">
              Start Your Project
              <ArrowRight className="w-5 h-5 ml-2" />
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-gray-800 transition-all duration-300 flex items-center">
              View Portfolio
            </button>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid md:grid-cols-4 gap-8 mt-20">
          {[
            { number: "500+", label: "Projects Completed" },
            { number: "98%", label: "Client Satisfaction" },
            { number: "15+", label: "Years Experience" },
            { number: "50+", label: "Design Awards" }
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl font-bold text-gray-900 mb-2">{stat.number}</div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}