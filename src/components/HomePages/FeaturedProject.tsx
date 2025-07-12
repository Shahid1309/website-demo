// 'use client';

// import { motion } from "framer-motion";
// import { ArrowRight } from "lucide-react";
// import Link from "next/link";

// export default function FeaturedProject() {
//   return (
//     <section className="py-20 bg-light-gray">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="grid lg:grid-cols-2 gap-12 items-center">
          
//           {/* Image */}
//           <motion.div
//             initial={{ opacity: 0, x: -50 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.8 }}
//             viewport={{ once: true }}
//           >
//             <img 
//               src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
//               alt="Modern luxury penthouse interior" 
//               className="rounded-2xl shadow-2xl w-full h-auto"
//               loading="lazy"
//             />
//           </motion.div>
          
//           {/* Text */}
//           <motion.div
//             initial={{ opacity: 0, x: 50 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.8, delay: 0.2 }}
//             viewport={{ once: true }}
//           >
//             <h2 className="text-4xl font-bold text-charcoal mb-6">Featured Project</h2>
//             <h3 className="text-2xl font-semibold text-slate mb-4">Manhattan Penthouse Redesign</h3>
//             <p className="text-lg text-slate mb-8 leading-relaxed">
//               A complete transformation of a 4,000 sq ft penthouse featuring contemporary design elements, 
//               custom furniture, and breathtaking city views. This project showcases our ability to blend luxury with functionality.
//             </p>
//             <Link href="/projects">
//               <motion.button 
//                 className="bg-charcoal text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-slate transition-all duration-300 inline-flex items-center group"
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//               >
//                 View All Projects
//                 <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-200" size={20} />
//               </motion.button>
//             </Link>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// }

// 'use client';
// import { useState } from 'react';
// import { ArrowRight, ExternalLink, Calendar, MapPin } from 'lucide-react';

// export default function FeaturedProject() {
//   const [hoveredProject, setHoveredProject] = useState<number | null>(null);

//   const projects = [
//     {
//       id: 1,
//       title: "Modern Minimalist Loft",
//       category: "Residential",
//       location: "New York, NY",
//       year: "2024",
//       image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
//       description: "A sleek urban loft featuring clean lines and contemporary design elements.",
//       size: "large"
//     },
//     {
//       id: 2,
//       title: "Luxury Penthouse",
//       category: "High-End Residential",
//       location: "Los Angeles, CA",
//       year: "2024",
//       image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
//       description: "Sophisticated penthouse with panoramic city views and premium finishes.",
//       size: "medium"
//     },
//     {
//       id: 3,
//       title: "Corporate Headquarters",
//       category: "Commercial",
//       location: "Chicago, IL",
//       year: "2023",
//       image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
//       description: "Modern office space designed for productivity and collaboration.",
//       size: "medium"
//     },
//     {
//       id: 4,
//       title: "Boutique Hotel Lobby",
//       category: "Hospitality",
//       location: "Miami, FL",
//       year: "2023",
//       image: "https://images.unsplash.com/photo-1631679706909-1844bbd07221?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
//       description: "Elegant hotel lobby with contemporary art and luxurious materials.",
//       size: "small"
//     },
//     {
//       id: 5,
//       title: "Scandinavian Villa",
//       category: "Residential",
//       location: "Seattle, WA",
//       year: "2023",
//       image: "https://images.unsplash.com/photo-1600210492493-0946911123ea?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
//       description: "Nordic-inspired home with natural materials and cozy aesthetics.",
//       size: "small"
//     },
//     {
//       id: 6,
//       title: "Art Gallery Space",
//       category: "Cultural",
//       location: "San Francisco, CA",
//       year: "2024",
//       image: "https://images.unsplash.com/photo-1541123603104-512919d6a96c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
//       description: "Contemporary gallery space with flexible lighting and display systems.",
//       size: "large"
//     }
//   ];

//   const getGridClasses = (size: string) => {
//     switch (size) {
//       case 'large':
//         return 'md:col-span-2 md:row-span-2';
//       case 'medium':
//         return 'md:col-span-1 md:row-span-2';
//       case 'small':
//         return 'md:col-span-1 md:row-span-1';
//       default:
//         return '';
//     }
//   };

//   return (
//     <section className="py-20 bg-gradient-to-br from-gray-900 via-black to-gray-900 min-h-screen">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         {/* Header */}
//         <div className="text-center mb-16">
//           <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
//             Featured Projects
//           </h2>
//           <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
//             Explore our portfolio of exceptional interior design projects that showcase our commitment to excellence and innovation.
//           </p>
//         </div>

//         {/* Projects Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
//           {projects.map((project) => (
//             <div
//               key={project.id}
//               className={`group relative overflow-hidden rounded-2xl cursor-pointer transition-all duration-500 ${getGridClasses(project.size)}`}
//               onMouseEnter={() => setHoveredProject(project.id)}
//               onMouseLeave={() => setHoveredProject(null)}
//             >
//               {/* Project Image */}
//               <div className="relative h-full min-h-[300px] bg-gray-800">
//                 <img
//                   src={project.image}
//                   alt={project.title}
//                   className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
//                 />
                
//                 {/* Dark Overlay */}
//                 <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent transition-opacity duration-300 group-hover:opacity-90" />
                
//                 {/* Project Info */}
//                 <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
//                   <div className="mb-3">
//                     <span className="inline-block px-3 py-1 bg-gray-600/80 text-gray-200 text-sm rounded-full backdrop-blur-sm">
//                       {project.category}
//                     </span>
//                   </div>
                  
//                   <h3 className="text-2xl font-bold mb-2 group-hover:text-gray-200 transition-colors duration-300">
//                     {project.title}
//                   </h3>
                  
//                   <p className="text-gray-300 mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0">
//                     {project.description}
//                   </p>
                  
//                   <div className="flex items-center justify-between">
//                     <div className="flex items-center space-x-4 text-sm text-gray-400">
//                       <div className="flex items-center">
//                         <MapPin size={16} className="mr-1" />
//                         {project.location}
//                       </div>
//                       <div className="flex items-center">
//                         <Calendar size={16} className="mr-1" />
//                         {project.year}
//                       </div>
//                     </div>
                    
//                     <button className="opacity-0 group-hover:opacity-100 transition-all duration-300 bg-gray-700/80 hover:bg-gray-600 text-white p-2 rounded-full backdrop-blur-sm hover:scale-110 transform">
//                       <ExternalLink size={18} />
//                     </button>
//                   </div>
//                 </div>

//                 {/* Hover Effect Border */}
//                 <div className="absolute inset-0 border-2 border-gray-500/0 group-hover:border-gray-400/50 transition-all duration-300 rounded-2xl" />
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* View All Projects Button */}
//         <div className="text-center">
//           <button className="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-gray-700 to-gray-600 hover:from-gray-600 hover:to-gray-500 text-white rounded-full text-lg font-semibold transition-all duration-300 hover:scale-105 transform focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-400 focus-visible:ring-offset-2 focus-visible:ring-offset-black">
//             View All Projects
//             <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-200" size={20} />
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// }



'use client';
import { useState } from 'react';
import { ArrowRight, ExternalLink, Calendar, MapPin } from 'lucide-react';

export default function FeaturedProject() {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const projects = [
    {
      id: 1,
      title: "Modern Minimalist Loft",
      category: "Residential",
      location: "New York, NY",
      year: "2024",
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      description: "A sleek urban loft featuring clean lines and contemporary design elements.",
      size: "large"
    },
    {
      id: 2,
      title: "Luxury Penthouse",
      category: "High-End Residential",
      location: "Los Angeles, CA",
      year: "2024",
      image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      description: "Sophisticated penthouse with panoramic city views and premium finishes.",
      size: "medium"
    },
    {
      id: 3,
      title: "Corporate Headquarters",
      category: "Commercial",
      location: "Chicago, IL",
      year: "2023",
      image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      description: "Modern office space designed for productivity and collaboration.",
      size: "medium"
    },
    {
      id: 4,
      title: "Boutique Hotel Lobby",
      category: "Hospitality",
      location: "Miami, FL",
      year: "2023",
      image: "https://images.unsplash.com/photo-1631679706909-1844bbd07221?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      description: "Elegant hotel lobby with contemporary art and luxurious materials.",
      size: "small"
    },
    {
      id: 5,
      title: "Scandinavian Villa",
      category: "Residential",
      location: "Seattle, WA",
      year: "2023",
      image: "https://images.unsplash.com/photo-1600210492493-0946911123ea?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      description: "Nordic-inspired home with natural materials and cozy aesthetics.",
      size: "small"
    },
    {
      id: 6,
      title: "Art Gallery Space",
      category: "Cultural",
      location: "San Francisco, CA",
      year: "2024",
      image: "https://images.unsplash.com/photo-1541123603104-512919d6a96c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      description: "Contemporary gallery space with flexible lighting and display systems.",
      size: "large"
    },
    {
      id: 7,
      title: "Scandinavian Villa",
      category: "Residential",
      location: "Seattle, WA",
      year: "2023",
      image: "https://images.unsplash.com/photo-1600210492493-0946911123ea?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      description: "Nordic-inspired home with natural materials and cozy aesthetics.",
      size: "small"
    },
    {
      id: 8,
      title: "Art Gallery Space",
      category: "Cultural",
      location: "San Francisco, CA",
      year: "2024",
      image: "https://images.unsplash.com/photo-1541123603104-512919d6a96c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      description: "Contemporary gallery space with flexible lighting and display systems.",
      size: "large"
    },
    {
      id: 9,
      title: "Corporate Headquarters",
      category: "Commercial",
      location: "Chicago, IL",
      year: "2023",
      image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      description: "Modern office space designed for productivity and collaboration.",
      size: "medium"
    },
  ];

  const getGridClasses = (size: string) => {
    switch (size) {
      case 'large':
        return 'md:col-span-2 lg:col-span-2 lg:row-span-2';
      case 'medium':
        return 'md:col-span-2 lg:col-span-1 lg:row-span-2';
      case 'small':
        return 'md:col-span-2 lg:col-span-1 lg:row-span-1';
      default:
        return '';
    }
  };

  return (
    <section className="py-12 md:py-20 bg-gradient-to-br from-gray-900 via-black to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 md:mb-6 leading-tight">
            Featured Projects
          </h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Explore our portfolio of exceptional interior design projects that showcase our commitment to excellence and innovation.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-12 md:mb-16">
          {projects.map((project) => (
            <div
              key={project.id}
              className={`group relative overflow-hidden rounded-xl md:rounded-2xl cursor-pointer transition-all duration-500 ${getGridClasses(project.size)}`}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              {/* Project Image */}
              <div className="relative h-full min-h-[250px] md:min-h-[300px] bg-gray-800">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                
                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent transition-opacity duration-300 group-hover:opacity-90" />
                
                {/* Project Info */}
                <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 text-white">
                  <div className="mb-2 md:mb-3">
                    <span className="inline-block px-2 py-1 md:px-3 md:py-1 bg-gray-600/80 text-gray-200 text-xs md:text-sm rounded-full backdrop-blur-sm">
                      {project.category}
                    </span>
                  </div>
                  
                  <h3 className="text-xl md:text-2xl font-bold mb-1 md:mb-2 group-hover:text-gray-200 transition-colors duration-300">
                    {project.title}
                  </h3>
                  
                  <p className="text-sm md:text-base text-gray-300 mb-2 md:mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0">
                    {project.description}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2 md:space-x-4 text-xs md:text-sm text-gray-400">
                      <div className="flex items-center">
                        <MapPin size={14} className="mr-1" />
                        <span className="truncate max-w-[80px] md:max-w-none">{project.location}</span>
                      </div>
                      <div className="flex items-center">
                        <Calendar size={14} className="mr-1" />
                        {project.year}
                      </div>
                    </div>
                    
                    <button className="opacity-0 group-hover:opacity-100 transition-all duration-300 bg-gray-700/80 hover:bg-gray-600 text-white p-1 md:p-2 rounded-full backdrop-blur-sm hover:scale-110 transform">
                      <ExternalLink size={16} />
                    </button>
                  </div>
                </div>

                {/* Hover Effect Border */}
                <div className="absolute inset-0 border border-gray-500/0 group-hover:border-gray-400/50 transition-all duration-300 rounded-xl md:rounded-2xl" />
              </div>
            </div>
          ))}
        </div>

        {/* View All Projects Button */}
        <div className="text-center">
          <button className="group inline-flex items-center px-6 py-3 md:px-8 md:py-4 bg-gradient-to-r from-gray-700 to-gray-600 hover:from-gray-600 hover:to-gray-500 text-white rounded-full text-base md:text-lg font-semibold transition-all duration-300 hover:scale-105 transform focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-400 focus-visible:ring-offset-2 focus-visible:ring-offset-black">
            View All Projects
            <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-200" size={18} />
          </button>
        </div>
      </div>
    </section>
  );
}