

"use client";

import { motion, easeOut } from "framer-motion";
import CallToAction from "./CallToAction";
import ServicesSection from "./ServicesSection";
import HeroSection from "./HeroSection";
import Teams from "./Teams";

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: easeOut },
};

export default function AboutUs() {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Hero Section */}
  
      <HeroSection/>
      <ServicesSection/>
      
      <CallToAction/>
      
      <section className="py-24 bg-gray-50 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
           
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="lg:pr-8"
            >
              <div className="mb-8">
                <span className="bg-gradient-to-r from-gray-800 to-black bg-clip-text text-transparent text-sm font-semibold tracking-wide uppercase">
                  Our Journey
                </span>
                <h2 className="text-5xl font-bold text-gray-900 mt-4 mb-6">Our Story</h2>
              </div>

              <div className="space-y-6">
                <p className="text-lg text-gray-600 leading-relaxed">
                  <span className="font-semibold text-gray-800">BlueShine Associates</span> has been working in the industry for the past 7 years, specializing in comprehensive Civil, Architectural, Interior & Planning services that transform spaces and bring visions to life.
                </p>

                <p className="text-lg text-gray-600 leading-relaxed">
                  We provide complete design solutions including floor plans, sections, elevations, 3D exterior & interior views, working drawings, and electrical & plumbing drawings. Our expertise extends to on-site execution work covering interior, exterior, and fabrication services.
                </p>

                <p className="text-lg text-gray-600 leading-relaxed">
                  Our commitment to client satisfaction drives us to deliver exceptional results on every project. We coordinate closely with our clients throughout the entire process to ensure their vision becomes reality.
                </p>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
                className="mt-10"
              >
                <button className="bg-gradient-to-r from-gray-800 to-black text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300">
                  Learn More About Our Services
                </button>
              </motion.div>
            </motion.div>

            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
                  alt="Architectural planning and design workspace" 
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                viewport={{ once: true }}
                className="absolute -bottom-8 -left-8 bg-white rounded-2xl p-6 shadow-xl border border-gray-100"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-gray-700 to-black rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-lg">7+</span>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Years</p>
                    <p className="text-sm text-gray-500">of Excellence</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
      <Teams/>

     
      

      
    </div>
  );
}