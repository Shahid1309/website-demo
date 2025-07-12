// 'use client';

// import { useState, useEffect } from "react";
// import { ChevronLeft, ChevronRight, Star, Quote, Play, Sparkles, MapPin, Calendar } from "lucide-react";

// const testimonials = [
//   {
//     id: 1,
//     name: "Sarah Chen",
//     role: "Homeowner",
//     location: "Manhattan, NY",
//     image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150",
//     content: "Luxe Interiors transformed our home beyond our wildest dreams. Their attention to detail and creative vision is unmatched. Every corner of our space now tells a story.",
//     rating: 5,
//     project: "Modern Penthouse Renovation",
//     date: "March 2024",
//     videoUrl: "#"
//   },
//   {
//     id: 2,
//     name: "Michael Rodriguez",
//     role: "CEO, TechStart Inc.",
//     location: "San Francisco, CA",
//     image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150",
//     content: "Professional, creative, and incredibly organized. They delivered our office redesign on time and within budget. Our productivity has increased by 40% since the redesign.",
//     rating: 5,
//     project: "Corporate Office Design",
//     date: "January 2024",
//     videoUrl: "#"
//   },
//   {
//     id: 3,
//     name: "Emma Thompson",
//     role: "Homeowner",
//     location: "Beverly Hills, CA",
//     image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150",
//     content: "From initial consultation to final reveal, the experience was seamless. Our space truly reflects our family's personality and has become the heart of our home.",
//     rating: 5,
//     project: "Family Home Makeover",
//     date: "February 2024",
//     videoUrl: "#"
//   },
//   {
//     id: 4,
//     name: "David Kim",
//     role: "Restaurant Owner",
//     location: "Chicago, IL",
//     image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150",
//     content: "The team created an atmosphere that perfectly captures our brand identity. Customer satisfaction scores have improved dramatically since the redesign.",
//     rating: 5,
//     project: "Restaurant Interior Design",
//     date: "December 2023",
//     videoUrl: "#"
//   },
//   {
//     id: 5,
//     name: "Jennifer Walsh",
//     role: "Boutique Owner",
//     location: "Miami, FL",
//     image: "https://images.unsplash.com/photo-1494790108755-2616c6d64952?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150",
//     content: "Absolutely stunning work! The design not only looks beautiful but also optimized our retail space for better customer flow and increased sales.",
//     rating: 5,
//     project: "Luxury Boutique Design",
//     date: "November 2023",
//     videoUrl: "#"
//   }
// ];

// export default function EnhancedTestimonialsSection() {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [isPlaying, setIsPlaying] = useState(false);

//   useEffect(() => {
//     const timer = setInterval(() => {
//       if (!isPlaying) {
//         setCurrentIndex((prevIndex) =>
//           prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
//         );
//       }
//     }, 6000);

//     return () => clearInterval(timer);
//   }, [isPlaying]);

//   const goToNext = () => {
//     setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
//   };

//   const goToPrevious = () => {
//     setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
//   };

//   const currentTestimonial = testimonials[currentIndex];

//   return (
//     <section className="py-24 bg-gray-100  relative overflow-hidden">
//       {/* Background Elements */}
//       <div className="absolute inset-0 opacity-30">
//         <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200 rounded-full filter blur-3xl opacity-20"></div>
//         <div className="absolute bottom-20 right-10 w-96 h-96 bg-indigo-200 rounded-full filter blur-3xl opacity-20"></div>
//         <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-purple-200 rounded-full filter blur-3xl opacity-10"></div>
//       </div>

//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
//         {/* Section Header */}
//         <div className="text-center mb-20">
//           <div className="flex items-center justify-center mb-6">
//             <Sparkles className="w-8 h-8 text-indigo-600 mr-3" />
//             <span className="text-indigo-600 font-semibold text-lg tracking-wide uppercase">Client Stories</span>
//           </div>
//           <h2 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">
//             What Our Clients 
//             <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent"> Say About Us</span>
//           </h2>
//           <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
//             Don't just take our word for it. Here's what our satisfied clients have to say about their experience working with us.
//           </p>
//         </div>

//         {/* Main Testimonial Display */}
//         <div className="relative max-w-6xl mx-auto mb-16">
//           <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
//             <div className="grid lg:grid-cols-2 gap-0">
              
//               {/* Left Side - Testimonial Content */}
//               <div className="p-12 flex flex-col justify-center relative">
//                 <Quote className="w-16 h-16 text-indigo-200 mb-6" />
                
//                 <div className="flex justify-start mb-6">
//                   {[...Array(currentTestimonial.rating)].map((_, i) => (
//                     <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
//                   ))}
//                 </div>

//                 <blockquote className="text-2xl text-gray-700 mb-8 leading-relaxed font-medium">
//                   "{currentTestimonial.content}"
//                 </blockquote>

//                 <div className="space-y-4">
//                   <div className="flex items-center">
//                     <img
//                       src={currentTestimonial.image}
//                       alt={currentTestimonial.name}
//                       className="w-16 h-16 rounded-full mr-4 object-cover border-4 border-indigo-100"
//                     />
//                     <div>
//                       <p className="font-bold text-gray-900 text-lg">
//                         {currentTestimonial.name}
//                       </p>
//                       <p className="text-indigo-600 font-medium">
//                         {currentTestimonial.role}
//                       </p>
//                     </div>
//                   </div>
                  
//                   <div className="flex items-center space-x-4 text-sm text-gray-500">
//                     <div className="flex items-center">
//                       <MapPin className="w-4 h-4 mr-1" />
//                       {currentTestimonial.location}
//                     </div>
//                     <div className="flex items-center">
//                       <Calendar className="w-4 h-4 mr-1" />
//                       {currentTestimonial.date}
//                     </div>
//                   </div>
//                 </div>
//               </div>

//               {/* Right Side - Project Info & Video */}
//               <div className="bg-gradient-to-br from-indigo-50 to-purple-50 p-12 flex flex-col justify-center">
//                 <div className="space-y-6">
//                   <div>
//                     <h3 className="text-2xl font-bold text-gray-900 mb-2">
//                       {currentTestimonial.project}
//                     </h3>
//                     <p className="text-gray-600">
//                       Completed project showcasing our design expertise and attention to detail.
//                     </p>
//                   </div>

//                   {/* Video Preview */}
//                   <div className="relative bg-white rounded-2xl p-6 shadow-lg">
//                     <div className="bg-gradient-to-br from-indigo-100 to-purple-100 rounded-xl h-48 flex items-center justify-center relative overflow-hidden">
//                       <button 
//                         className="bg-white/90 hover:bg-white text-indigo-600 w-16 h-16 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
//                         onClick={() => setIsPlaying(!isPlaying)}
//                       >
//                         <Play className="w-6 h-6 ml-1" />
//                       </button>
//                       <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/20 to-purple-500/20"></div>
//                     </div>
//                     <p className="text-center text-gray-600 mt-4 text-sm">
//                       Watch the project transformation
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>

          
//         </div>

        

//         {/* Progress Indicators */}
//         <div className="flex justify-center space-x-2">
//           {testimonials.map((_, index) => (
//             <button
//               key={index}
//               onClick={() => setCurrentIndex(index)}
//               className={`h-2 rounded-full transition-all duration-300 ${
//                 index === currentIndex 
//                   ? 'bg-indigo-600 w-8' 
//                   : 'bg-gray-300 w-2 hover:bg-gray-400'
//               }`}
//             />
//           ))}
//         </div>

//         {/* Stats Section */}
//         <div className="mt-20 grid md:grid-cols-3 gap-8">
//           <div className="text-center bg-white rounded-2xl p-8 shadow-lg">
//             <div className="text-4xl font-bold text-indigo-600 mb-2">500+</div>
//             <div className="text-gray-600 font-medium">Happy Clients</div>
//           </div>
//           <div className="text-center bg-white rounded-2xl p-8 shadow-lg">
//             <div className="text-4xl font-bold text-indigo-600 mb-2">98%</div>
//             <div className="text-gray-600 font-medium">Satisfaction Rate</div>
//           </div>
//           <div className="text-center bg-white rounded-2xl p-8 shadow-lg">
//             <div className="text-4xl font-bold text-indigo-600 mb-2">4.9/5</div>
//             <div className="text-gray-600 font-medium">Average Rating</div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }


'use client';

import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Star, Quote, Play, Sparkles, MapPin, Calendar } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Sarah Chen",
    role: "Homeowner",
    location: "Manhattan, NY",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150",
    content: "Luxe Interiors transformed our home beyond our wildest dreams. Their attention to detail and creative vision is unmatched. Every corner of our space now tells a story.",
    rating: 5,
    project: "Modern Penthouse Renovation",
    date: "March 2024",
    videoUrl: "#"
  },
  {
    id: 2,
    name: "Michael Rodriguez",
    role: "CEO, TechStart Inc.",
    location: "San Francisco, CA",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150",
    content: "Professional, creative, and incredibly organized. They delivered our office redesign on time and within budget. Our productivity has increased by 40% since the redesign.",
    rating: 5,
    project: "Corporate Office Design",
    date: "January 2024",
    videoUrl: "#"
  },
  {
    id: 3,
    name: "Emma Thompson",
    role: "Homeowner",
    location: "Beverly Hills, CA",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150",
    content: "From initial consultation to final reveal, the experience was seamless. Our space truly reflects our family's personality and has become the heart of our home.",
    rating: 5,
    project: "Family Home Makeover",
    date: "February 2024",
    videoUrl: "#"
  },
  {
    id: 4,
    name: "David Kim",
    role: "Restaurant Owner",
    location: "Chicago, IL",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150",
    content: "The team created an atmosphere that perfectly captures our brand identity. Customer satisfaction scores have improved dramatically since the redesign.",
    rating: 5,
    project: "Restaurant Interior Design",
    date: "December 2023",
    videoUrl: "#"
  },
  {
    id: 5,
    name: "Jennifer Walsh",
    role: "Boutique Owner",
    location: "Miami, FL",
    image: "https://images.unsplash.com/photo-1494790108755-2616c6d64952?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150",
    content: "Absolutely stunning work! The design not only looks beautiful but also optimized our retail space for better customer flow and increased sales.",
    rating: 5,
    project: "Luxury Boutique Design",
    date: "November 2023",
    videoUrl: "#"
  }
];

export default function EnhancedTestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      if (!isPlaying) {
        setCurrentIndex((prevIndex) =>
          prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
        );
      }
    }, 6000);

    return () => clearInterval(timer);
  }, [isPlaying]);

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section className="py-24 bg-gray-100 relative overflow-hidden">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute top-20 left-10 w-96 h-96 bg-black rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-gray-900 rounded-full filter blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="flex items-center justify-center mb-6">
            <div className="w-12 h-[1px] bg-gray-300 mr-4"></div>
            <span className="text-gray-700 font-medium text-sm tracking-[0.2em] uppercase">Client Stories</span>
            <div className="w-12 h-[1px] bg-gray-300 ml-4"></div>
          </div>
          <h2 className="text-5xl font-light text-black mb-6 leading-tight">
            What Our Clients 
            <span className="font-normal"> Say About Us</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Don't just take our word for it. Here's what our satisfied clients have to say about their experience working with us.
          </p>
        </div>

        {/* Main Testimonial Display */}
        <div className="relative max-w-6xl mx-auto mb-16">
          <div className="bg-white rounded-none shadow-lg border border-gray-100 overflow-hidden">
            <div className="grid lg:grid-cols-2 gap-0">
              
              {/* Left Side - Testimonial Content */}
              <div className="p-16 flex flex-col justify-center relative">
                <Quote className="w-12 h-12 text-gray-200 mb-8" />
                
                <div className="flex justify-start mb-8">
                  {[...Array(currentTestimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-gray-400 fill-current mr-1" />
                  ))}
                </div>

                <blockquote className="text-xl text-gray-800 mb-12 leading-relaxed font-light">
                  "{currentTestimonial.content}"
                </blockquote>

                <div className="space-y-6">
                  <div className="flex items-center">
                    <img
                      src={currentTestimonial.image}
                      alt={currentTestimonial.name}
                      className="w-14 h-14 rounded-full mr-4 object-cover border-2 border-gray-100"
                    />
                    <div>
                      <p className="font-medium text-black text-lg">
                        {currentTestimonial.name}
                      </p>
                      <p className="text-gray-500 text-sm">
                        {currentTestimonial.role}
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-6 text-xs text-gray-400 uppercase tracking-wide">
                    <div className="flex items-center">
                      <MapPin className="w-3 h-3 mr-2" />
                      {currentTestimonial.location}
                    </div>
                    <div className="flex items-center">
                      <Calendar className="w-3 h-3 mr-2" />
                      {currentTestimonial.date}
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Side - Project Info & Video */}
              <div className="bg-gray-100 p-16 flex flex-col justify-center">
                <div className="space-y-8">
                  <div>
                    <h3 className="text-2xl font-light text-black mb-4">
                      {currentTestimonial.project}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      Completed project showcasing our design expertise and attention to detail.
                    </p>
                  </div>

                  {/* Video Preview */}
                  <div className="relative bg-white p-8 border border-gray-200">
                    <div className="bg-gray-100 h-48 flex items-center justify-center relative overflow-hidden">
                      <button 
                        className="bg-black hover:bg-gray-800 text-white w-16 h-16 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-105"
                        onClick={() => setIsPlaying(!isPlaying)}
                      >
                        <Play className="w-5 h-5 ml-1" />
                      </button>
                    </div>
                    <p className="text-center text-gray-500 mt-6 text-sm uppercase tracking-wide">
                      Watch Project Transformation
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Arrows */}
          {/* <button 
            onClick={goToPrevious}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white hover:bg-gray-50 border border-gray-200 text-gray-600 w-12 h-12 rounded-full flex items-center justify-center shadow-sm transition-all duration-300 hover:shadow-md"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button 
            onClick={goToNext}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white hover:bg-gray-50 border border-gray-200 text-gray-600 w-12 h-12 rounded-full flex items-center justify-center shadow-sm transition-all duration-300 hover:shadow-md"
          >
            <ChevronRight className="w-5 h-5" />
          </button> */}
        </div>

        {/* Progress Indicators */}
        <div className="flex justify-center space-x-3 mb-20">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-1 rounded-full transition-all duration-300 ${
                index === currentIndex 
                  ? 'bg-black w-8' 
                  : 'bg-gray-300 w-1 hover:bg-gray-400'
              }`}
            />
          ))}
        </div>

        {/* Stats Section */}
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center bg-white p-12 border border-gray-100 hover:shadow-lg transition-shadow duration-300">
            <div className="text-4xl font-light text-black mb-3">500+</div>
            <div className="text-gray-500 text-sm uppercase tracking-wide">Happy Clients</div>
          </div>
          <div className="text-center bg-white p-12 border border-gray-100 hover:shadow-lg transition-shadow duration-300">
            <div className="text-4xl font-light text-black mb-3">98%</div>
            <div className="text-gray-500 text-sm uppercase tracking-wide">Satisfaction Rate</div>
          </div>
          <div className="text-center bg-white p-12 border border-gray-100 hover:shadow-lg transition-shadow duration-300">
            <div className="text-4xl font-light text-black mb-3">4.9/5</div>
            <div className="text-gray-500 text-sm uppercase tracking-wide">Average Rating</div>
          </div>
        </div>
      </div>
    </section>
  );
}