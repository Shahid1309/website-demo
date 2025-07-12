

"use client";

import { CheckCircle } from "lucide-react";
import { motion } from "framer-motion";
import { Variants, easeOut } from "framer-motion";
import CallToAction from "../About/CallToAction";

const steps = [
  {
    title: "Consultation & Site Visit",
    description: "We begin with a detailed discussion of your requirements and conduct a thorough site analysis."
  },
  {
    title: "Concept Design & 3D Visualization",
    description: "Our team creates innovative design concepts with photorealistic 3D renderings."
  },
  {
    title: "Cost Estimation & Approval",
    description: "We provide transparent pricing and detailed project plans for your approval."
  },
  {
    title: "Execution & On-Site Management",
    description: "Skilled professionals implement the design with strict quality control measures."
  },
  {
    title: "Final Handover",
    description: "We deliver the completed project with comprehensive documentation and support."
  }
];





const itemVariants: Variants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: easeOut, // ✅ fixed
    },
  },
};


export default function ProcessSection() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-sm font-semibold tracking-wider text-gray-500 uppercase">
            Our Methodology
          </span>
          <h2 className="mt-4 text-4xl font-bold text-gray-900">How We Work</h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600">
            A streamlined process designed for efficiency and transparency
          </p>
        </div>

        <motion.div
          className="grid gap-8 md:grid-cols-2 lg:grid-cols-5"
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {steps.map((step, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group"
            >
              <div className="relative h-full bg-white rounded-lg p-6 border border-gray-200 hover:border-gray-300 transition-all duration-300 shadow-sm hover:shadow-md">
                <div className="absolute -top-5 left-6 flex items-center justify-center w-10 h-10 bg-gray-900 rounded-full">
                  <span className="text-white font-medium text-sm">{index + 1}</span>
                </div>
                <div className="mt-6 mb-4 flex items-center justify-center w-12 h-12 bg-gray-100 rounded-full mx-auto group-hover:bg-gray-200 transition-colors duration-300">
                  <CheckCircle className="text-gray-700 group-hover:text-gray-900" size={24} />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3 text-center">
                  {step.title}
                </h3>
                <p className="text-sm text-gray-600 text-center">
                  {step.description}
                </p>
                <div className="mt-6 h-px bg-gray-200 w-full">
                  <div className="h-full bg-gray-900 w-0 group-hover:w-full transition-all duration-500 origin-left"></div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        
      </div>
      <div className="mt-16 text-center">
          
            <CallToAction/>
          
        </div>
    </section>
  );
}