

// "use client";

// import { motion } from "framer-motion";
// import {
//  Home,
//   Building2,
//   Ruler,
//   Construction,
//   ClipboardList,
//   LayoutDashboard,
//   Sparkles,
//   Check,
//   ArrowRight,
  
// } from "lucide-react";

// // Enhanced animation configs
// const fadeInUp = {
//   initial: { opacity: 0, y: 40 },
//   animate: { opacity: 1, y: 0 },
//   transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] },
// };

// const slideInLeft = {
//   initial: { opacity: 0, x: -50 },
//   animate: { opacity: 1, x: 0 },
//   transition: { duration: 0.6, ease: "easeOut" },
// };

// const scaleIn = {
//   initial: { opacity: 0, scale: 0.8 },
//   animate: { opacity: 1, scale: 1 },
//   transition: { duration: 0.6, ease: "easeOut" },
// };

// const staggerContainer = {
//   initial: {},
//   animate: {
//     transition: {
//       staggerChildren: 0.15,
//     },
//   },
// };

// const services = [
//   {
//     icon: Home,
//     title: "Residential Design & Execution",
//     description:
//       "We specialize in crafting luxurious and functional living spaces. From villa designs to full home remodeling, we turn your vision into reality.",
//     features: [
//       "Custom Villa & Farmhouse Design",
//       "Modern Apartment Interiors",
//       "High-End Residence Remodeling",
//       "Modular Kitchen Design",
//       "Turnkey Interior Solutions",
//       "Luxury Residence Planning",
//     ],
//     gradient: "from-blue-500 to-indigo-600",
//     bgGradient: "from-blue-50 to-indigo-50",
//   },
//   {
//     icon: Building2,
//     title: "Commercial Interiors",
//     description:
//       "We design impactful spaces for businesses—whether it's a corporate office, showroom, or healthcare facility. Form meets function, every time.",
//     features: [
//       "Corporate Office Interiors",
//       "Showroom Design (e.g., Mercedes Benz)",
//       "Clinic & Hospital Interiors",
//       "Restaurant & Café Design",
//       "Hostel Interiors",
//     ],
//     gradient: "from-purple-500 to-pink-600",
//     bgGradient: "from-purple-50 to-pink-50",
//   },
//   {
//     icon: Ruler,
//     title: "3D Visualization & Concept Design",
//     description:
//       "Visualize your project before execution. We provide stunning 3D renders and concept planning to help you make confident design decisions.",
//     features: [
//       "Photorealistic 3D Renders",
//       "Walkthrough Animations",
//       "Interior Layout Presentations",
//       "Mood Boards & Material Selection",
//     ],
//     gradient: "from-emerald-500 to-teal-600",
//     bgGradient: "from-emerald-50 to-teal-50",
//   },
//   {
//     icon: Construction,
//     title: "Fabrication & Custom Steel Work",
//     description:
//       "From steel frameworks to custom installations, we deliver precision-engineered fabrication solutions for residential and commercial projects.",
//     features: [
//       "Structural Steel Fabrication",
//       "Metal Framework for Interiors",
//       "Custom Metal Installations",
//       "Site-Specific Fabrication",
//     ],
//     gradient: "from-amber-500 to-orange-600",
//     bgGradient: "from-amber-50 to-orange-50",
//   },
//   {
//     icon: ClipboardList,
//     title: "End-to-End Project Management",
//     description:
//       "We handle every aspect of your project—planning, coordination, execution, and delivery—ensuring quality and timeliness at every stage.",
//     features: [
//       "Site Measurement & Planning",
//       "Architecture & Structural Consultation",
//       "Material Sourcing & Procurement",
//       "On-Site Supervision",
//       "Final Delivery & Handover",
//     ],
//     gradient: "from-rose-500 to-red-600",
//     bgGradient: "from-rose-50 to-red-50",
//   },
//   {
//     icon: LayoutDashboard,
//     title: "Space Planning & Optimization",
//     description:
//       "We analyze and structure your layout to make the most of available space, combining functionality, flow, and aesthetic appeal.",
//     features: [
//       "Layout Optimization",
//       "Traffic Flow Analysis",
//       "Smart Zoning",
//       "Storage & Furniture Planning",
//     ],
//     gradient: "from-violet-500 to-purple-600",
//     bgGradient: "from-violet-50 to-purple-50",
//   },
// ];


// export default function ServicesGrid() {
//   return (
//     <section className="py-24 bg-gradient-to-br from-slate-50 via-white to-gray-50 relative overflow-hidden">
//       {/* Background decorative elements */}
//       <div className="absolute inset-0">
//         <motion.div 
//           className="absolute top-20 left-10 w-64 h-64 bg-gradient-to-r from-indigo-200/20 to-purple-200/20 rounded-full blur-3xl"
//           animate={{
//             x: [0, 50, 0],
//             y: [0, -30, 0],
//           }}
//           transition={{
//             duration: 12,
//             repeat: Infinity,
//             ease: "easeInOut"
//           }}
//         />
//         <motion.div 
//           className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-r from-blue-200/15 to-indigo-200/15 rounded-full blur-3xl"
//           animate={{
//             x: [0, -40, 0],
//             y: [0, 25, 0],
//           }}
//           transition={{
//             duration: 15,
//             repeat: Infinity,
//             ease: "easeInOut"
//           }}
//         />
//       </div>

//       <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         {/* Section Header */}
//         <motion.div
//           className="text-center mb-16"
//           variants={slideInLeft}
//           initial="initial"
//           whileInView="animate"
//           viewport={{ once: true }}
//         >
//           <motion.div
//             className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm border border-indigo-200/50 rounded-full shadow-lg shadow-indigo-500/10 mb-6"
//             variants={scaleIn}
//           >
//             <Sparkles className="w-4 h-4 text-indigo-500" />
//             <span className="text-sm font-medium text-indigo-600">Our Expertise</span>
//           </motion.div>
          
//           <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
//             Comprehensive Design
//             <span className="bg-gradient-to-r from-yellow-600 via-yellow-500 to-amber-400 bg-clip-text text-transparent block mt-2">
//               Services
//             </span>
//           </h2>
          
//           <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
//             From concept to completion, we deliver exceptional interior design solutions 
//             tailored to your unique vision and lifestyle needs.
//           </p>
//         </motion.div>

//         {/* Services Grid */}
//         <motion.div
//           className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
//           variants={staggerContainer}
//           initial="initial"
//           whileInView="animate"
//           viewport={{ once: true, margin: "-100px" }}
//         >
//           {services.map((service, index) => {
//             const Icon = service.icon;
//             return (
//               <motion.div
//                 key={service.title}
//                 className={`group relative bg-white rounded-3xl p-8 hover:shadow-2xl hover:shadow-indigo-500/10 transition-all duration-500 border border-gray-100/50 overflow-hidden`}
//                 variants={fadeInUp}
//                 whileHover={{ y: -8, scale: 1.02 }}
//                 transition={{ duration: 0.3 }}
//               >
//                 {/* Background gradient overlay */}
//                 <div className={`absolute inset-0 bg-gradient-to-br ${service.bgGradient} opacity-0 group-hover:opacity-50 transition-opacity duration-500`} />
                
//                 {/* Card content */}
//                 <div className="relative z-10">
//                   {/* Icon with enhanced styling */}
//                   <motion.div
//                     className={`w-16 h-16 bg-gradient-to-br ${service.gradient} rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-indigo-500/20`}
//                     whileHover={{ scale: 1.1, rotate: 5 }}
//                     transition={{ duration: 0.3 }}
//                   >
//                     <Icon className="w-8 h-8 text-white" />
//                   </motion.div>

//                   {/* Title */}
//                   <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-indigo-900 transition-colors duration-300">
//                     {service.title}
//                   </h3>

//                   {/* Description */}
//                   <p className="text-gray-600 mb-6 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
//                     {service.description}
//                   </p>

//                   {/* Features list */}
//                   <ul className="space-y-3 mb-6">
//                     {service.features.map((feature, featureIndex) => (
//                       <motion.li
//                         key={featureIndex}
//                         className="flex items-center text-sm sm:text-base text-gray-600 group-hover:text-gray-700 transition-colors duration-300"
//                         initial={{ opacity: 0, x: -20 }}
//                         whileInView={{ opacity: 1, x: 0 }}
//                         transition={{ delay: featureIndex * 0.1 }}
//                         viewport={{ once: true }}
//                       >
//                         <div className="w-5 h-5 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
//                           <Check className="w-3 h-3 text-white" />
//                         </div>
//                         {feature}
//                       </motion.li>
//                     ))}
//                   </ul>

//                   {/* Call to action */}
//                   <motion.div
//                     className="flex items-center text-indigo-600 font-semibold text-sm cursor-pointer group-hover:text-indigo-700 transition-colors duration-300"
//                     whileHover={{ x: 5 }}
//                   >
//                     <span>Learn More</span>
//                     <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
//                   </motion.div>
//                 </div>

//                 {/* Decorative corner element */}
//                 <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-transparent to-gray-50 rounded-bl-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
//               </motion.div>
//             );
//           })}
//         </motion.div>

//         {/* Bottom CTA */}
//         <motion.div
//           className="text-center mt-16"
//           variants={fadeInUp}
//           initial="initial"
//           whileInView="animate"
//           viewport={{ once: true }}
//         >
          
//         </motion.div>
//       </div>
//     </section>
//   );
// }

"use client";

import { motion } from "framer-motion";
import {
 Home,
  Building2,
  Ruler,
  Construction,
  ClipboardList,
  LayoutDashboard,
  Sparkles,
  Check,
  ArrowRight,
  
} from "lucide-react";

// Enhanced animation configs
const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] },
};

const slideInLeft = {
  initial: { opacity: 0, x: -50 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.6, ease: "easeOut" },
};

const scaleIn = {
  initial: { opacity: 0, scale: 0.8 },
  animate: { opacity: 1, scale: 1 },
  transition: { duration: 0.6, ease: "easeOut" },
};

const staggerContainer = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const services = [
  {
    icon: Home,
    title: "Residential Design & Execution",
    description:
      "We specialize in crafting luxurious and functional living spaces. From villa designs to full home remodeling, we turn your vision into reality.",
    features: [
      "Custom Villa & Farmhouse Design",
      "Modern Apartment Interiors",
      "High-End Residence Remodeling",
      "Modular Kitchen Design",
      "Turnkey Interior Solutions",
      "Luxury Residence Planning",
    ],
    gradient: "from-gray-600 to-gray-800",
    bgGradient: "from-gray-100 to-gray-200",
  },
  {
    icon: Building2,
    title: "Commercial Interiors",
    description:
      "We design impactful spaces for businesses—whether it's a corporate office, showroom, or healthcare facility. Form meets function, every time.",
    features: [
      "Corporate Office Interiors",
      "Showroom Design (e.g., Mercedes Benz)",
      "Clinic & Hospital Interiors",
      "Restaurant & Café Design",
      "Hostel Interiors",
    ],
    gradient: "from-gray-700 to-black",
    bgGradient: "from-gray-50 to-gray-150",
  },
  {
    icon: Ruler,
    title: "3D Visualization & Concept Design",
    description:
      "Visualize your project before execution. We provide stunning 3D renders and concept planning to help you make confident design decisions.",
    features: [
      "Photorealistic 3D Renders",
      "Walkthrough Animations",
      "Interior Layout Presentations",
      "Mood Boards & Material Selection",
    ],
    gradient: "from-gray-500 to-gray-700",
    bgGradient: "from-gray-100 to-gray-300",
  },
  {
    icon: Construction,
    title: "Fabrication & Custom Steel Work",
    description:
      "From steel frameworks to custom installations, we deliver precision-engineered fabrication solutions for residential and commercial projects.",
    features: [
      "Structural Steel Fabrication",
      "Metal Framework for Interiors",
      "Custom Metal Installations",
      "Site-Specific Fabrication",
    ],
    gradient: "from-gray-600 to-gray-900",
    bgGradient: "from-gray-200 to-gray-300",
  },
  {
    icon: ClipboardList,
    title: "End-to-End Project Management",
    description:
      "We handle every aspect of your project—planning, coordination, execution, and delivery—ensuring quality and timeliness at every stage.",
    features: [
      "Site Measurement & Planning",
      "Architecture & Structural Consultation",
      "Material Sourcing & Procurement",
      "On-Site Supervision",
      "Final Delivery & Handover",
    ],
    gradient: "from-gray-800 to-black",
    bgGradient: "from-gray-50 to-gray-200",
  },
  {
    icon: LayoutDashboard,
    title: "Space Planning & Optimization",
    description:
      "We analyze and structure your layout to make the most of available space, combining functionality, flow, and aesthetic appeal.",
    features: [
      "Layout Optimization",
      "Traffic Flow Analysis",
      "Smart Zoning",
      "Storage & Furniture Planning",
    ],
    gradient: "from-gray-700 to-gray-900",
    bgGradient: "from-gray-100 to-gray-250",
  },
];


export default function ServicesGrid() {
  return (
    <section className="py-24 bg-gray-200  relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <motion.div 
          className="absolute top-20 left-10 w-64 h-64 bg-gradient-to-r from-gray-400/20 to-gray-600/20 rounded-full blur-3xl"
          animate={{
            x: [0, 50, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-r from-gray-500/15 to-gray-700/15 rounded-full blur-3xl"
          animate={{
            x: [0, -40, 0],
            y: [0, 25, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          variants={slideInLeft}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm border border-gray-300/50 rounded-full shadow-lg shadow-gray-500/10 mb-6"
            variants={scaleIn}
          >
            <Sparkles className="w-4 h-4 text-gray-700" />
            <span className="text-sm font-medium text-gray-800">Our Expertise</span>
          </motion.div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
            Comprehensive Design
            <span className="bg-gradient-to-r from-gray-700 via-gray-600 to-gray-500 bg-clip-text text-transparent block mt-2">
              Services
            </span>
          </h2>
          
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            From concept to completion, we deliver exceptional interior design solutions 
            tailored to your unique vision and lifestyle needs.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
        >
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                className={`group relative bg-white rounded-3xl p-8 hover:shadow-2xl hover:shadow-gray-500/10 transition-all duration-500 border border-gray-200/50 overflow-hidden`}
                variants={fadeInUp}
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                {/* Background gradient overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.bgGradient} opacity-0 group-hover:opacity-50 transition-opacity duration-500`} />
                
                {/* Card content */}
                <div className="relative z-10">
                  {/* Icon with enhanced styling */}
                  <div className=" flex gap-5">
                    <motion.div
                    className={`w-16 h-16 bg-gradient-to-br ${service.gradient} rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-gray-500/20`}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Icon className="w-8 h-8 text-white" />
                  </motion.div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold text-black mb-4 group-hover:text-gray-900 transition-colors duration-300">
                    {service.title}
                  </h3>
                  </div>

                  {/* Description */}
                  <p className="text-gray-600 mb-6 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                    {service.description}
                  </p>

                  {/* Features list */}
                  <ul className="space-y-3 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <motion.li
                        key={featureIndex}
                        className="flex items-center text-sm sm:text-base text-gray-600 group-hover:text-gray-700 transition-colors duration-300"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: featureIndex * 0.1 }}
                        viewport={{ once: true }}
                      >
                        <div className="w-5 h-5 bg-gradient-to-br from-gray-500 to-gray-700 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                          <Check className="w-3 h-3 text-white" />
                        </div>
                        {feature}
                      </motion.li>
                    ))}
                  </ul>

                  {/* Call to action */}
                  <motion.div
                    className="flex items-center text-gray-800 font-semibold text-sm cursor-pointer group-hover:text-black transition-colors duration-300"
                    whileHover={{ x: 5 }}
                  >
                    <span>Learn More</span>
                    <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
                  </motion.div>
                </div>

                {/* Decorative corner element */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-transparent to-gray-100 rounded-bl-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </motion.div>
            );
          })}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-16"
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          
        </motion.div>
      </div>
    </section>
  );
}