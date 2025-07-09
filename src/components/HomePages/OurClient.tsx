// // "use client";

// // import Image from "next/image";
// // import styles from "./OurClient.module.css";
// // import merImage from "@/assects/Mercedes-Benz_India_Logo.jpg";
// // import homeLane from "@/assects/Screenshot_8-7-2025_18624_.jpeg";
// // import assianpaint from "@/assects/assianPaint.jpg";
// // import livspace from "@/assects/livspace.png";

// // const logos = [merImage, homeLane, assianpaint, livspace];

// // export default function OurClient() {
// //   return (
// //     <section className="w-full overflow-hidden py-10 bg-white">
// //       <h2 className="text-3xl font-bold text-center mb-8">Our Clients</h2>

// //       <div className={styles.container}>
// //         <div className={styles.slider}>
// //           {logos.map((logo, idx) => (
// //             <div key={idx} className={styles.logoContainer}>
// //               <Image
// //                 src={logo}
// //                 alt={`Client Logo ${idx}`}
// //                 className="object-contain"
// //                 width={150}
// //                 height={80}
// //               />
// //             </div>
// //           ))}
// //           {/* Duplicate for seamless loop */}
// //           {logos.map((logo, idx) => (
// //             <div key={`duplicate-${idx}`} className={styles.logoContainer}>
// //               <Image
// //                 src={logo}
// //                 alt={`Client Logo ${idx}`}
// //                 className="object-contain"
// //                 width={150}
// //                 height={80}
// //               />
// //             </div>
// //           ))}
// //         </div>
// //       </div>
// //     </section>
// //   );
// // }

// // "use client";

// // import Image from "next/image";
// // import styles from "./OurClient.module.css";
// // import merImage from "@/assects/Mercedes-Benz_India_Logo.jpg";
// // import homeLane from "@/assects/Screenshot_8-7-2025_18624_.jpeg";
// // import assianpaint from "@/assects/assianPaint.jpg";
// // import livspace from "@/assects/livspace.png";

// // const logos = [merImage, homeLane, assianpaint, livspace];

// // export default function OurClient() {
// //   return (
// //     <section className="w-full overflow-hidden py-10 bg-white">

// //       <div className={styles.container}>
// //         <div className={styles.slider}>
// //           {/* Original Logos */}
// //           {logos.map((logo, idx) => (
// //             <div key={`original-${idx}`} className={styles.logoContainer}>
// //               <Image
// //                 src={logo}
// //                 alt={`Client Logo ${idx}`}
// //                 className="object-contain"
// //                 width={150}
// //                 height={80}
// //               />
// //             </div>
// //           ))}
          
// //           {/* Duplicate Logos (for seamless loop) */}
// //           {logos.map((logo, idx) => (
// //             <div key={`duplicate-${idx}`} className={styles.logoContainer}>
// //               <Image
// //                 src={logo}
// //                 alt={`Client Logo ${idx}`}
// //                 className="object-contain"
// //                 width={150}
// //                 height={80}
// //               />
// //             </div>
// //           ))}
// //         </div>
// //       </div>
// //     </section>
// //   );
// // }



// "use client";

// import Image from "next/image";
// import styles from "./OurClient.module.css";
// import merImage from "@/assects/Mercedes-Benz_India_Logo.jpg";
// import homeLane from "@/assects/Screenshot_8-7-2025_18624_.jpeg";
// import assianpaint from "@/assects/assianPaint.jpg";
// import livspace from "@/assects/livspace.png";

// const logos = [merImage, homeLane, assianpaint, livspace];
// const allLogos = logos;


// export default function OurClient() {
//   return (
//     <section className="w-full overflow-hidden py-16 bg-gradient-to-br from-slate-50 to-white relative">
//       {/* Background decoration */}
//       <div className="absolute inset-0 bg-gradient-to-r from-blue-50/30 to-purple-50/30"></div>
      
//       {/* Section header */}
//       <div className="relative z-10 text-center mb-12">
//         <h2 className="text-4xl font-bold text-gray-800 mb-4">
//           Trusted By Industry Leaders
//         </h2>
//         <p className="text-gray-600 max-w-2xl mx-auto">
//           We're proud to partner with some of the world's most innovative companies
//         </p>
//       </div>

//       <div className={styles.container}>
//         <div className={styles.slider}>
//           {/* Original Logos */}
//           {allLogos.map((logo, idx) => (
//             <div key={`original-${idx}`} className={styles.logoContainer}>
//               <div className={styles.logoCard}>
//                 <Image
//                   src={logo}
//                   alt={`Client Logo ${idx}`}
//                   className="object-contain transition-all duration-300"
//                   width={150}
//                   height={80}
//                 />
//               </div>
//             </div>
//           ))}
          
//           {/* Duplicate Logos (for seamless loop) */}
//           {allLogos.map((logo, idx) => (
//             <div key={`duplicate-${idx}`} className={styles.logoContainer}>
//               <div className={styles.logoCard}>
//                 <Image
//                   src={logo}
//                   alt={`Client Logo ${idx}`}
//                   className="object-contain transition-all duration-300"
//                   width={150}
//                   height={80}
//                 />
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
      
//       {/* Gradient overlays for fade effect */}
//       <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-white via-white/50 to-transparent z-20 pointer-events-none"></div>
//       <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-white via-white/50 to-transparent z-20 pointer-events-none"></div>
//     </section>
//   );
// }

"use client";

import Image from "next/image";
import styles from "./OurClient.module.css";

import merImage from "@/assects/Mercedes-Benz_India_Logo.jpg";
import homeLane from "@/assects/Screenshot_8-7-2025_18624_.jpeg";
import assianpaint from "@/assects/assianPaint.jpg";
import livspace from "@/assects/livspace.png";

// Triple duplication for seamless scroll
const logos = [merImage, homeLane, assianpaint, livspace];
const allLogos = [...logos, ...logos, ...logos];

export default function OurClient() {
  return (
    <section className="w-full overflow-hidden py-16 bg-gradient-to-br from-slate-50 to-white relative">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-50/30 to-purple-50/30"></div>

      {/* Section header */}
      <div className="relative z-10 text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">
          Trusted By Industry Leaders
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          We're proud to partner with some of the most innovative companies
        </p>
      </div>

      {/* Logo slider */}
      <div className={styles.container}>
        <div className={styles.slider}>
          {allLogos.map((logo, idx) => (
            <div key={idx} className={styles.logoContainer}>
              <div className={styles.logoCard}>
                <Image
                  src={logo}
                  alt={`Client Logo ${idx}`}
                  className="object-contain transition-all duration-300"
                  width={150}
                  height={80}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Gradient overlays (for fade effect on edges) */}
      <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-white via-white/50 to-transparent z-20 pointer-events-none"></div>
      <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-white via-white/50 to-transparent z-20 pointer-events-none"></div>
    </section>
  );
}
