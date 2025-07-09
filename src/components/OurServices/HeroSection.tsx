// "use client";
// import { motion } from "framer-motion";
// import { Sparkles, Palette, Home, Lightbulb } from "lucide-react";

// // Animation variants
// const fadeInUp = {
//   initial: { opacity: 0, y: 30 },
//   whileInView: { opacity: 1, y: 0 },
//   transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }, // ease-in-out
// };

// const fadeInScale = {
//   initial: { opacity: 0, scale: 0.8 },
//   whileInView: { opacity: 1, scale: 1 },
//   transition: { duration: 0.8, ease: [0.42, 0, 0.58, 1] }, // easeOut
// };

// const slideInLeft = {
//   initial: { opacity: 0, x: -50 },
//   whileInView: { opacity: 1, x: 0 },
//   transition: { duration: 0.8, ease: [0.42, 0, 0.58, 1] },
// };

// const slideInRight = {
//   initial: { opacity: 0, x: 50 },
//   whileInView: { opacity: 1, x: 0 },
//   transition: { duration: 0.8, ease: [0.42, 0, 0.58, 1] },
// };

// const staggerContainer = {
//   initial: {},
//   whileInView: {
//     transition: {
//       staggerChildren: 0.15,
//     },
//   },
// };

// const floatingAnimation = {
//   initial: { y: 0 },
//   animate: {
//     y: [-10, 10, -10],
//     transition: {
//       duration: 4,
//       repeat: Infinity,
//       ease: [0.42, 0, 0.58, 1],
//     },
//   },
// };

// const pulseAnimation = {
//   initial: { scale: 1 },
//   animate: { 
//     scale: [1, 1.05, 1],
//     transition: {
//       duration: 2,
//       repeat: Infinity,
//       ease: "easeInOut" as const // ✅ THIS FIXES THE ERROR
//     }
//   }
// };


// export default function HeroSection() {
//   return (
//     <section className="relative py-12 bg-gradient-to-br from-slate-50 via-white to-indigo-50 overflow-hidden">
//       {/* Background blobs */}
//       <div className="absolute inset-0">
//         <motion.div
//           className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-indigo-200/30 to-purple-200/30 rounded-full blur-3xl"
//           animate={{
//             x: [0, 30, 0],
//             y: [0, -20, 0],
//           }}
//           transition={{
//             duration: 8,
//             repeat: Infinity,
//             ease: [0.42, 0, 0.58, 1],
//           }}
//         />
//         <motion.div
//           className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-blue-200/20 to-indigo-200/20 rounded-full blur-3xl"
//           animate={{
//             x: [0, -40, 0],
//             y: [0, 30, 0],
//           }}
//           transition={{
//             duration: 10,
//             repeat: Infinity,
//             ease: [0.42, 0, 0.58, 1],
//           }}
//         />
//       </div>

//       {/* Content */}
//       <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <motion.div
//           className="flex flex-col items-center"
//           initial="initial"
//           whileInView="whileInView"
//           variants={staggerContainer}
//           viewport={{ once: true, margin: "-100px" }}
//         >
//           {/* Floating badge */}
//           <motion.div
//             className="mb-8"
//    variants={fadeInScale}
//   initial={{ y: 0 }}
//   animate={{ y: [-10, 10, -10] }}
//   transition={{
//     duration: 4,
//     repeat: Infinity,
//     ease: [0.42, 0, 0.58, 1],
//   }}
//           >
//             <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm border border-indigo-200/50 rounded-full shadow-lg shadow-indigo-500/10">
//               <Sparkles className="w-4 h-4 text-indigo-500" />
//               <span className="text-sm font-medium text-indigo-600">
//                 Premium Design Services
//               </span>
//             </div>
//           </motion.div>

//           {/* Heading */}
//           <motion.div className="text-center mb-8" variants={fadeInUp}>
//             <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
//               Transform Your{" "}
//               <span className="bg-gradient-to-r from-amber-500 via-yellow-500 to-yellow-400 bg-clip-text text-transparent">
//                 Space
//               </span>
//             </h1>
//             <motion.div
//               className="text-3xl md:text-4xl font-light text-gray-600 mb-4"
//               variants={fadeInUp}
//             >
//               with Our Expert Services
//             </motion.div>
//           </motion.div>

//           {/* Description */}
//           <motion.div
//             className="w-full max-w-4xl mb-12"
//             variants={fadeInUp}
//           >
//             <p className="text-xl md:text-2xl text-gray-600 text-center leading-relaxed font-light">
//               From conceptual design to final installation, we offer{" "}
//               <span className="font-semibold text-yellow-500">
//                 comprehensive interior design services
//               </span>{" "}
//               tailored to your unique needs and vision.
//             </p>
//           </motion.div>

//           {/* Services */}
//           <motion.div
//             className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 w-full max-w-5xl"
//             variants={staggerContainer}
//           >
//             <motion.div
//               className="flex flex-col items-center text-center p-6 bg-white/60 backdrop-blur-sm rounded-2xl border border-white/20 shadow-xl hover:shadow-indigo-500/10 transition-all duration-300"
//               variants={slideInLeft}
//               whileHover={{ y: -5, scale: 1.02 }}
//             >
//               <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl flex items-center justify-center mb-4 shadow-lg">
//                 <Palette className="w-8 h-8 text-white" />
//               </div>
//               <h3 className="text-xl font-semibold text-gray-900 mb-2">
//                 Design Consultation
//               </h3>
//               <p className="text-gray-600 text-sm">
//                 Personalized design solutions that reflect your style
//               </p>
//             </motion.div>

//             <motion.div
//               className="flex flex-col items-center text-center p-6 bg-white/60 backdrop-blur-sm rounded-2xl border border-white/20 shadow-xl hover:shadow-indigo-500/10 transition-all duration-300"
//               variants={fadeInScale}
//               whileHover={{ y: -5, scale: 1.02 }}
//             >
//               <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center mb-4 shadow-lg">
//                 <Home className="w-8 h-8 text-white" />
//               </div>
//               <h3 className="text-xl font-semibold text-gray-900 mb-2">
//                 Space Planning
//               </h3>
//               <p className="text-gray-600 text-sm">
//                 Optimized layouts for functionality and flow
//               </p>
//             </motion.div>

//             <motion.div
//               className="flex flex-col items-center text-center p-6 bg-white/60 backdrop-blur-sm rounded-2xl border border-white/20 shadow-xl hover:shadow-indigo-500/10 transition-all duration-300"
//               variants={slideInRight}
//               whileHover={{ y: -5, scale: 1.02 }}
//             >
//               <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mb-4 shadow-lg">
//                 <Lightbulb className="w-8 h-8 text-white" />
//               </div>
//               <h3 className="text-xl font-semibold text-gray-900 mb-2">
//                 Full Installation
//               </h3>
//               <p className="text-gray-600 text-sm">
//                 Complete project management from start to finish
//               </p>
//             </motion.div>
//           </motion.div>

//           {/* Pulse line */}
//           <motion.div
//             className="flex items-center gap-4 mb-8"
//             variants={fadeInUp}
//           >
//             <motion.div
//               className="w-16 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full"
//               {...pulseAnimation}
//             />
//             <motion.div
//               className="w-3 h-3 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full"
//               animate={{
//                 scale: [1, 1.2, 1],
//                 opacity: [1, 0.7, 1],
//               }}
//               transition={{
//                 duration: 2,
//                 repeat: Infinity,
//                 ease: [0.42, 0, 0.58, 1],
//               }}
//             />
//             <motion.div
//               className="w-16 h-1 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full"
//               {...pulseAnimation}
//             />
//           </motion.div>

//           {/* Scroll indicator */}
//           <motion.div
//             className="mt-8"
//             variants={fadeInUp}
//             animate={{ y: [0, 8, 0] }}
//             transition={{
//               duration: 2,
//               repeat: Infinity,
//               ease: [0.42, 0, 0.58, 1],
//             }}
//           >
//             {/* Add icon or animation here if needed */}
//           </motion.div>
//         </motion.div>
//       </div>
//     </section>
//   );
// }


"use client";
import { motion } from "framer-motion";
import { Sparkles, Palette, Home, Lightbulb } from "lucide-react";

// Animation variants
const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }, // ease-in-out
};

const fadeInScale = {
  initial: { opacity: 0, scale: 0.8 },
  whileInView: { opacity: 1, scale: 1 },
  transition: { duration: 0.8, ease: [0.42, 0, 0.58, 1] }, // easeOut
};

const slideInLeft = {
  initial: { opacity: 0, x: -50 },
  whileInView: { opacity: 1, x: 0 },
  transition: { duration: 0.8, ease: [0.42, 0, 0.58, 1] },
};

const slideInRight = {
  initial: { opacity: 0, x: 50 },
  whileInView: { opacity: 1, x: 0 },
  transition: { duration: 0.8, ease: [0.42, 0, 0.58, 1] },
};

const staggerContainer = {
  initial: {},
  whileInView: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const floatingAnimation = {
  initial: { y: 0 },
  animate: {
    y: [-10, 10, -10],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: [0.42, 0, 0.58, 1],
    },
  },
};

const pulseAnimation = {
  initial: { scale: 1 },
  animate: { 
    scale: [1, 1.05, 1],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut" as const
    }
  }
};

export default function HeroSection() {
  return (
    <section className="relative py-12 bg-gradient-to-br from-gray-50 via-white to-gray-100 overflow-hidden">
      {/* Background blobs */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-gray-200/30 to-gray-300/30 rounded-full blur-3xl"
          animate={{
            x: [0, 30, 0],
            y: [0, -20, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: [0.42, 0, 0.58, 1],
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-gray-300/20 to-gray-400/20 rounded-full blur-3xl"
          animate={{
            x: [0, -40, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: [0.42, 0, 0.58, 1],
          }}
        />
      </div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="flex flex-col items-center"
          initial="initial"
          whileInView="whileInView"
          variants={staggerContainer}
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Floating badge */}
          <motion.div
            className="mb-8"
            variants={fadeInScale}
            initial={{ y: 0 }}
            animate={{ y: [-10, 10, -10] }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: [0.42, 0, 0.58, 1],
            }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm border border-gray-300/50 rounded-full shadow-lg shadow-gray-500/10">
              <Sparkles className="w-4 h-4 text-gray-700" />
              <span className="text-sm font-medium text-gray-800">
                Premium Design Services
              </span>
            </div>
          </motion.div>

          {/* Heading */}
          <motion.div className="text-center mb-8" variants={fadeInUp}>
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
              Transform Your{" "}
              <span className="bg-gradient-to-r from-gray-700 via-gray-800 to-black bg-clip-text text-transparent">
                Space
              </span>
            </h1>
            <motion.div
              className="text-3xl md:text-4xl font-light text-gray-600 mb-4"
              variants={fadeInUp}
            >
              with Our Expert Services
            </motion.div>
          </motion.div>

          {/* Description */}
          <motion.div
            className="w-full max-w-4xl mb-12"
            variants={fadeInUp}
          >
            <p className="text-xl md:text-2xl text-gray-600 text-center leading-relaxed font-light">
              From conceptual design to final installation, we offer{" "}
              <span className="font-semibold text-gray-800">
                comprehensive interior design services
              </span>{" "}
              tailored to your unique needs and vision.
            </p>
          </motion.div>

          {/* Services */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 w-full max-w-5xl"
            variants={staggerContainer}
          >
            <motion.div
              className="flex flex-col items-center text-center p-6 bg-white/60 backdrop-blur-sm rounded-2xl border border-white/20 shadow-xl hover:shadow-gray-500/10 transition-all duration-300"
              variants={slideInLeft}
              whileHover={{ y: -5, scale: 1.02 }}
            >
              <div className="w-16 h-16 bg-gradient-to-br from-gray-600 to-gray-800 rounded-2xl flex items-center justify-center mb-4 shadow-lg">
                <Palette className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Design Consultation
              </h3>
              <p className="text-gray-600 text-sm">
                Personalized design solutions that reflect your style
              </p>
            </motion.div>

            <motion.div
              className="flex flex-col items-center text-center p-6 bg-white/60 backdrop-blur-sm rounded-2xl border border-white/20 shadow-xl hover:shadow-gray-500/10 transition-all duration-300"
              variants={fadeInScale}
              whileHover={{ y: -5, scale: 1.02 }}
            >
              <div className="w-16 h-16 bg-gradient-to-br from-gray-700 to-black rounded-2xl flex items-center justify-center mb-4 shadow-lg">
                <Home className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Space Planning
              </h3>
              <p className="text-gray-600 text-sm">
                Optimized layouts for functionality and flow
              </p>
            </motion.div>

            <motion.div
              className="flex flex-col items-center text-center p-6 bg-white/60 backdrop-blur-sm rounded-2xl border border-white/20 shadow-xl hover:shadow-gray-500/10 transition-all duration-300"
              variants={slideInRight}
              whileHover={{ y: -5, scale: 1.02 }}
            >
              <div className="w-16 h-16 bg-gradient-to-br from-gray-500 to-gray-700 rounded-2xl flex items-center justify-center mb-4 shadow-lg">
                <Lightbulb className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Full Installation
              </h3>
              <p className="text-gray-600 text-sm">
                Complete project management from start to finish
              </p>
            </motion.div>
          </motion.div>

          {/* Pulse line */}
          <motion.div
            className="flex items-center gap-4 mb-8"
            variants={fadeInUp}
          >
            <motion.div
              className="w-16 h-1 bg-gradient-to-r from-gray-600 to-gray-800 rounded-full"
              {...pulseAnimation}
            />
            <motion.div
              className="w-3 h-3 bg-gradient-to-r from-gray-600 to-gray-800 rounded-full"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [1, 0.7, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: [0.42, 0, 0.58, 1],
              }}
            />
            <motion.div
              className="w-16 h-1 bg-gradient-to-r from-gray-800 to-gray-600 rounded-full"
              {...pulseAnimation}
            />
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            className="mt-8"
            variants={fadeInUp}
            animate={{ y: [0, 8, 0] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: [0.42, 0, 0.58, 1],
            }}
          >
            {/* Add icon or animation here if needed */}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}