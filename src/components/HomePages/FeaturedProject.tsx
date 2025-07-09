'use client';

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function FeaturedProject() {
  return (
    <section className="py-20 bg-light-gray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <img 
              src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
              alt="Modern luxury penthouse interior" 
              className="rounded-2xl shadow-2xl w-full h-auto"
              loading="lazy"
            />
          </motion.div>
          
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-charcoal mb-6">Featured Project</h2>
            <h3 className="text-2xl font-semibold text-slate mb-4">Manhattan Penthouse Redesign</h3>
            <p className="text-lg text-slate mb-8 leading-relaxed">
              A complete transformation of a 4,000 sq ft penthouse featuring contemporary design elements, 
              custom furniture, and breathtaking city views. This project showcases our ability to blend luxury with functionality.
            </p>
            <Link href="/projects">
              <motion.button 
                className="bg-charcoal text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-slate transition-all duration-300 inline-flex items-center group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View All Projects
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-200" size={20} />
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
