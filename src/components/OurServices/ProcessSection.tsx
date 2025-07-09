

// "use client";

// import { motion } from "framer-motion";

// // Animation variants
// const fadeInUp = {
//   initial: { opacity: 0, y: 30 },
//   animate: { opacity: 1, y: 0 },
//   transition: { duration: 0.6, ease: "easeOut" as const },
// };

// const staggerContainer = {
//   initial: {},
//   animate: {
//     transition: {
//       staggerChildren: 0.2,
//     },
//   },
// };

// const processSteps = [
//   {
//     number: "1",
//     title: "Consultation",
//     description: "Understanding your vision, needs, and budget through detailed discussions",
//     icon: "💬",
//     color: "from-blue-500 to-blue-600"
//   },
//   {
//     number: "2",
//     title: "Concept",
//     description: "Developing initial design concepts and mood boards for your approval",
//     icon: "🎨",
//     color: "from-purple-500 to-purple-600"
//   },
//   {
//     number: "3",
//     title: "Design",
//     description: "Creating detailed plans, 3D renderings, and material specifications",
//     icon: "✏️",
//     color: "from-amber-500 to-amber-600"
//   },
//   {
//     number: "4",
//     title: "Implementation",
//     description: "Managing installation and execution to bring your vision to life",
//     icon: "🛠️",
//     color: "from-emerald-500 to-emerald-600"
//   },
// ];

// export default function ProcessSection() {
//   return (
//     <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <motion.div
//           className="text-center mb-20"
//           {...fadeInUp}
//           viewport={{ once: true }}
//         >
//           <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
//             Our <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Design Process</span>
//           </h2>
//           <p className="text-xl text-gray-600 max-w-2xl mx-auto">
//             A systematic approach to creating exceptional spaces
//           </p>
//         </motion.div>

//         <motion.div
//           className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
//           variants={staggerContainer}
//           initial="initial"
//           whileInView="animate"
//           viewport={{ once: true, margin: "-100px" }}
//         >
//           {processSteps.map((step) => (
//             <motion.div
//               key={step.number}
//               className="group"
//               variants={fadeInUp}
//               whileHover={{ y: -10 }}
//             >
//               <div className="h-full bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 group-hover:shadow-xl transition-all duration-300">
//                 <div className={`p-6 bg-gradient-to-br ${step.color} text-white`}>
//                   <div className="flex items-center justify-between">
//                     <div className="text-4xl">{step.icon}</div>
//                     <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center text-xl font-bold">
//                       {step.number}
//                     </div>
//                   </div>
//                 </div>
//                 <div className="p-6">
//                   <h3 className="text-xl font-semibold text-gray-900 mb-3">{step.title}</h3>
//                   <p className="text-gray-600 leading-relaxed">{step.description}</p>
//                 </div>
//                 <div className="px-6 pb-6">
//                   <div className="w-full h-1 bg-gradient-to-r from-gray-100 to-gray-200 rounded-full">
//                     <div className={`h-full w-0 group-hover:w-full transition-all duration-500 delay-100 bg-gradient-to-r ${step.color}`}></div>
//                   </div>
//                 </div>
//               </div>
//             </motion.div>
//           ))}
//         </motion.div>

//         <motion.div 
//           className="mt-20 text-center"
//           {...fadeInUp}
//         >
//           <button className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium rounded-full shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105">
//             Start Your Project
//           </button>
//         </motion.div>
//       </div>
//     </section>
//   );
// }


// "use client";

// import { CheckCircle } from "lucide-react";

// const steps: string[] = [
//   "Consultation & Site Visit",
//   "Concept Design & 3D Visualization",
//   "Cost Estimation & Approval",
//   "Execution & On-Site Management",
//   "Final Handover",
// ];

// export default function ProcessSection() {
//   return (
//     <section className="py-16 bg-gray-50">
//       <div className="max-w-6xl mx-auto px-4 text-center">
//         <h2 className="text-3xl font-bold mb-8 text-gray-800">How We Work</h2>
//         <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
//           {steps.map((step, index) => (
//             <div
//               key={index}
//               className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition duration-300"
//             >
//               <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-full mx-auto mb-4">
//                 <CheckCircle className="text-blue-600" size={24} />
//               </div>
//               <h3 className="text-lg font-semibold text-gray-700">
//                 Step {index + 1}
//               </h3>
//               <p className="text-sm text-gray-600 mt-2">{step}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

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