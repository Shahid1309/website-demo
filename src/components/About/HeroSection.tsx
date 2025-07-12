// "use client";

// import { motion, easeOut } from "framer-motion";

// const fadeInUp = {
//   initial: { opacity: 0, y: 60 },
//   whileInView: { opacity: 1, y: 0 },
//   transition: { duration: 0.8, ease: easeOut },
// };
// export default function HeroSection(){
//     return(
//         <>
//         <section className="py-24 relative overflow-hidden">
//                 <div className="absolute inset-0 bg-gradient-to-r from-gray-50/30 to-gray-100/30"></div>
//                 <div className="absolute top-0 left-0 w-72 h-72 bg-gradient-to-br from-gray-200 to-gray-300 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl opacity-20"></div>
//                 <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-br from-gray-300 to-gray-400 rounded-full translate-x-1/2 translate-y-1/2 blur-3xl opacity-20"></div>
        
//                 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
//                   <motion.div
//                     className="text-center mb-16"
//                     initial={fadeInUp.initial}
//                     whileInView={fadeInUp.whileInView}
//                     transition={fadeInUp.transition}
//                     viewport={{ once: true }}
//                   >
//                     <motion.div
//                       initial={{ opacity: 0, scale: 0.8 }}
//                       whileInView={{ opacity: 1, scale: 1 }}
//                       transition={{ duration: 0.8, delay: 0.2 }}
//                       viewport={{ once: true }}
//                       className="inline-block mb-6"
//                     >
//                       <span className="bg-gradient-to-r from-gray-800 to-black bg-clip-text text-transparent text-sm font-semibold tracking-wide uppercase">
//                         About Us
//                       </span>
//                     </motion.div>
        
//                     <h1 className="text-6xl md:text-7xl font-bold bg-gradient-to-r from-black via-gray-800 to-gray-700 bg-clip-text text-transparent mb-8 leading-tight">
//                       BlueShine Associates
//                     </h1>
        
//                     <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-light">
//                       For 7 years, we've been specializing in Civil, Architectural, Interior & Planning services. 
//                       Our commitment to excellence drives everything we do.
//                     </p>
        
//                     <motion.div
//                       initial={{ opacity: 0, y: 20 }}
//                       whileInView={{ opacity: 1, y: 0 }}
//                       transition={{ duration: 0.8, delay: 0.6 }}
//                       viewport={{ once: true }}
//                       className="mt-12 flex flex-wrap justify-center gap-8 text-sm text-gray-500"
//                     >
//                       <div className="flex items-center gap-2">
//                         <div className="w-2 h-2 bg-gray-700 rounded-full"></div>
//                         <span>Est. 2017</span>
//                       </div>
//                       <div className="flex items-center gap-2">
//                         <div className="w-2 h-2 bg-gray-600 rounded-full"></div>
//                         <span>7+ Years Experience</span>
//                       </div>
//                       <div className="flex items-center gap-2">
//                         <div className="w-2 h-2 bg-black rounded-full"></div>
//                         <span>Client Satisfaction</span>
//                       </div>
//                     </motion.div>
//                   </motion.div>
//                 </div>
//               </section>
//         </>
//     )
// }


"use client";
import { motion } from "framer-motion";
import { useMemo } from "react";

const HeroSection = () => {
  // Memoize animation variants to prevent recreation on each render
  const fadeInUp = useMemo(() => ({
    initial: { opacity: 0, y: 60 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: "easeOut" },
  }), []);

  // Memoize static content to prevent recreation
  const stats = useMemo(() => [
    { color: "bg-gray-700", text: "Est. 2017" },
    { color: "bg-gray-600", text: "7+ Years Experience" },
    { color: "bg-black", text: "Client Satisfaction" }
  ], []);

  return (
    <section className="relative py-24 overflow-hidden min-h-[80vh]">
      {/* Background Elements */}
      <div className="absolute inset-0">
        {/* Gradient Overlay */}
        <div 
          className="absolute inset-0 bg-gradient-to-r from-gray-50/30 to-gray-100/30"
          aria-hidden="true"
        />
        
        {/* Decorative Elements - Reduced complexity */}
        <div 
          className="absolute top-0 left-0 w-72 h-72 bg-gradient-to-br from-gray-200 to-gray-300 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl opacity-20"
          aria-hidden="true"
        />
        <div 
          className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-br from-gray-300 to-gray-400 rounded-full translate-x-1/2 translate-y-1/2 blur-3xl opacity-20"
          aria-hidden="true"
        />
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          className="text-center mb-16"
          initial={fadeInUp.initial}
          whileInView={fadeInUp.whileInView}
          // transition={fadeInUp.transition}
          viewport={{ once: true, margin: "-100px" }} // Trigger animation earlier
        >
          {/* Title Section */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="inline-block mb-6"
          >
            <span className="bg-gradient-to-r from-gray-800 to-black bg-clip-text text-transparent text-sm font-semibold tracking-wide uppercase">
              About Us
            </span>
          </motion.div>

          {/* Main Heading - Reduced text nodes */}
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold bg-gradient-to-r from-black via-gray-800 to-gray-700 bg-clip-text text-transparent mb-6 md:mb-8 leading-tight">
            BlueShine Associates
          </h1>

          {/* Description - Optimized font loading */}
          <p className="text-lg md:text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-light">
            For 7 years, we've been specializing in Civil, Architectural, Interior & Planning services. 
            Our commitment to excellence drives everything we do.
          </p>

          {/* Stats - Memoized array mapping */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="mt-8 sm:mt-12 flex flex-wrap justify-center gap-6 sm:gap-8 text-sm text-gray-500"
          >
            {stats.map((stat, index) => (
              <div key={index} className="flex items-center gap-2">
                <div className={`w-2 h-2 ${stat.color} rounded-full`} />
                <span>{stat.text}</span>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;