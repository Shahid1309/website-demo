"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const FAQ_DATA = [
  {
    question: "What types of projects do you specialize in?",
    answer: "We specialize in a wide range of projects including residential interiors, farmhouses, commercial offices, showrooms, rooftop restaurants, and 3D interior visualizations."
  },
  {
    question: "Do you handle both design and execution?",
    answer: "Yes, we offer end-to-end solutions—from initial planning and 3D design to on-site execution and project delivery."
  },
  {
    question: "Can I see examples of your previous work?",
    answer: "Absolutely! You can explore our portfolio section to see completed projects like Mercedes Benz Showroom, Ayurvedic Hospital in Dwarka, farmhouses in Chhatarpur, and more."
  },
  {
    question: "Do you offer custom designs based on client preferences?",
    answer: "Yes, all our projects are fully customized. We work closely with clients to reflect their personal taste, lifestyle, and budget in every design."
  },
  {
    question: "How long does it typically take to complete a project?",
    answer: "Project timelines vary depending on size and complexity. A typical residential interior project may take 4–8 weeks, while larger commercial projects may take longer."
  },
  {
    question: "What locations do you serve?",
    answer: "We serve clients across Delhi NCR, including areas like Green Park, Chhatarpur, Greater Noida, Vasant Kunj, Connaught Place, and more."
  },
  {
    question: "Do you provide 3D visualizations before starting the project?",
    answer: "Yes, we provide high-quality 3D views for kitchens, interiors, hostels, and restaurants to help clients visualize the final outcome before execution."
  },
  {
    question: "Can you renovate or remodel existing spaces?",
    answer: "Yes, we also take on renovation and remodeling projects, including kitchen redesigns, office upgrades, and full-scale home makeovers."
  }
];

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);


  const toggleFAQ = (index:number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Everything you need to know about our design services
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto space-y-4">
          {FAQ_DATA.map((faq, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="border border-gray-200 rounded-xl overflow-hidden bg-white shadow-sm hover:shadow-md transition-shadow"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center p-6 text-left focus:outline-none"
              >
                <h3 className="text-lg md:text-xl font-medium text-gray-900">
                  {faq.question}
                </h3>
                <motion.div
                  animate={{ rotate: activeIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown className="w-5 h-5 text-gray-500" />
                </motion.div>
              </button>

              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6 pt-0 text-gray-600">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-gray-600 mb-6">
            Still have questions? We're happy to help.
          </p>
          <button className="bg-gray-900 text-white px-8 py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors duration-200">
            Contact Our Team
          </button>
        </motion.div>
      </div>
    </section>
  );
}