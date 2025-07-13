

// "use client";
// import { useState, useEffect } from "react";
// import { ArrowRight, Play, Star, Award, Users, ChevronDown } from "lucide-react";

// export default function EnhancedHeroSection() {
//     const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
//     const [isVideoPlaying, setIsVideoPlaying] = useState(false);
//     const [currentImageIndex, setCurrentImageIndex] = useState(0);

//     const backgroundImages = [
//         "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080",
//         "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080",
//         "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080"
//     ];

//     const stats = [
//         { icon: Star, value: "4.9", label: "Rating" },
//         { icon: Award, value: "500+", label: "Projects" },
//         { icon: Users, value: "98%", label: "Satisfaction" }
//     ];

//     useEffect(() => {
//         const handleMouseMove = (e: MouseEvent) => {
//             setMousePosition({ x: e.clientX, y: e.clientY });
//         };

//         window.addEventListener('mousemove', handleMouseMove);
//         return () => window.removeEventListener('mousemove', handleMouseMove);
//     }, []);

//     useEffect(() => {
//         const timer = setInterval(() => {
//             setCurrentImageIndex((prev) => (prev + 1) % backgroundImages.length);
//         }, 5000);

//         return () => clearInterval(timer);
//     }, []);

//     const parallaxStyle = {
//         transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`
//     };

//     const scrollToNext = () => {
//         window.scrollTo({
//             top: window.innerHeight,
//             behavior: 'smooth'
//         });
//     };

//     return (
//         <div className="bg-red-300">
//             <section className="relative h-screen flex items-center justify-center overflow-hidden">
//                 {/* Dynamic Background Images */}
//                 {backgroundImages.map((image, index) => (
//                     <div
//                         key={index}
//                         className={`absolute inset-0 transition-opacity duration-2000 ${
//                             index === currentImageIndex ? 'opacity-100' : 'opacity-0'
//                         }`}
//                         style={{
//                             backgroundImage: `url('${image}')`,
//                             backgroundSize: "cover",
//                             backgroundPosition: "center",
//                             backgroundAttachment: "fixed"
//                         }}
//                     />
//                 ))}

//                 {/* Animated Overlay */}
//                 <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/40 to-black/60 z-10" />

//                 {/* Floating Particles */}
//                 <div className="absolute inset-0 z-15">
//                     {[...Array(20)].map((_, i) => (
//                         <div
//                             key={i}
//                             className="absolute w-2 h-2 bg-white/20 rounded-full animate-pulse"
//                             style={{
//                                 left: `${Math.random() * 100}%`,
//                                 top: `${Math.random() * 100}%`,
//                                 animationDelay: `${Math.random() * 3}s`,
//                                 animationDuration: `${2 + Math.random() * 2}s`
//                             }}
//                         />
//                     ))}
//                 </div>

//                 {/* Main Content */}
//                 <div className="relative z-20 text-center text-white px-4 max-w-6xl mx-auto">
//                     <div
//                         className="transform transition-transform duration-100 ease-out"
                        
//                     >
//                         {/* Main Heading */}
//                         <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
//                             <span className="block">Transforming Space</span>
                           
//                             <span className="block">Into Dreams</span>
//                         </h1>

//                         {/* Subtitle */}
//                         <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto font-light leading-relaxed">
//                             Premium interior design services that reflect your unique style and elevate your living experience with unmatched creativity and attention to detail
//                         </p>

//                         {/* CTA Buttons */}
//                         <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
//                             <button className="bg-white text-black px-8 py-4 rounded-full text-lg font-semibold hover:bg-gradient-to-r from-amber-500 to-yellow-400 transition-all duration-300 inline-flex items-center group hover:scale-105 transform">
//                                 Start Your Project
//                                 <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-200" size={20} />
//                             </button>
                            
//                             <button 
//                                 onClick={() => setIsVideoPlaying(!isVideoPlaying)}
//                                 className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-gradient-to-r from-amber-500 to-yellow-400 hover:text-black transition-all duration-300 inline-flex items-center group hover:scale-105 transform"
//                             >
//                                 <Play className="mr-2 group-hover:scale-110 transition-transform duration-200" size={20} />
//                                 Watch Our Work
//                             </button>
//                         </div>
//                     </div>
//                 </div>

//                 {/* Decorative Elements */}
//                 <div className="absolute top-20 left-20 w-32 h-32 border border-white/20 rounded-full z-15 animate-pulse"></div>
//                 <div className="absolute bottom-20 right-20 w-24 h-24 border border-white/20 rounded-full z-15 animate-pulse" style={{ animationDelay: '1s' }}></div>
//             </section>
//         </div>
//     );
// }

// "use client";
// import { useState, useEffect, useCallback, useRef } from "react";
// import { ArrowRight, Play, Star, Award, Users, ChevronDown } from "lucide-react";

// export default function EnhancedHeroSection() {
//     const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
//     const [isVideoPlaying, setIsVideoPlaying] = useState(false);
//     const [currentImageIndex, setCurrentImageIndex] = useState(0);
//     const animationFrameRef = useRef<number | null>(null);
//     const timerRef = useRef<NodeJS.Timeout | null>(null);
// ;
      
//     // Memoized background images array to prevent recreation on each render
//     const backgroundImages = useRef([
//         "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080",
//         "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080",
//         "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080"
//     ]).current;

//     // Memoized stats array
//     const stats = useRef([
//         { icon: Star, value: "4.9", label: "Rating" },
//         { icon: Award, value: "500+", label: "Projects" },
//         { icon: Users, value: "98%", label: "Satisfaction" }
//     ]).current;

//     // Throttled mouse move handler
//     const handleMouseMove = useCallback((e: MouseEvent) => {
//         if (animationFrameRef.current) {
//             cancelAnimationFrame(animationFrameRef.current);
//         }

//         animationFrameRef.current = requestAnimationFrame(() => {
//             setMousePosition({ x: e.clientX, y: e.clientY });
//         });
//     }, []);

//     useEffect(() => {
//         window.addEventListener('mousemove', handleMouseMove);
//         return () => {
//             window.removeEventListener('mousemove', handleMouseMove);
//             if (animationFrameRef.current) {
//                 cancelAnimationFrame(animationFrameRef.current);
//             }
//         };
//     }, [handleMouseMove]);

//     // Image carousel with cleanup
//     useEffect(() => {
//         timerRef.current = setInterval(() => {
//             setCurrentImageIndex(prev => (prev + 1) % backgroundImages.length);
//         }, 5000);

//         return () => {
//             if (timerRef.current) {
//                 clearInterval(timerRef.current);
//             }
//         };
//     }, [backgroundImages.length]);

//     // Memoized scroll function
//     const scrollToNext = useCallback(() => {
//         window.scrollTo({
//             top: window.innerHeight,
//             behavior: 'smooth'
//         });
//     }, []);

//     // Preload background images
//     useEffect(() => {
//         backgroundImages.forEach(src => {
//             const img = new Image();
//             img.src = src;
//         });
//     }, [backgroundImages]);

//     return (
//         <section className="relative h-screen flex items-center justify-center overflow-hidden bg-black">
//             {/* Dynamic Background Images with optimized transitions */}
//             <div className="absolute inset-0">
//                 {backgroundImages.map((image, index) => (
//                     <div
//                         key={image} // Using image URL as key for better reconciliation
//                         className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
//                             index === currentImageIndex ? 'opacity-100' : 'opacity-0 pointer-events-none'
//                         }`}
//                         style={{
//                             backgroundImage: `url('${image}')`,
//                             backgroundSize: "cover",
//                             backgroundPosition: "center",
//                             willChange: "opacity" // Hint to browser for optimization
//                         }}
//                         aria-hidden={index !== currentImageIndex}
//                     />
//                 ))}
//             </div>

//             {/* Gradient Overlay */}
//             <div 
//                 className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/40 to-black/60 z-10"
//                 style={{ willChange: "opacity" }}
//             />

//             {/* Main Content */}
//             <div className="relative z-20 text-center text-white px-4 max-w-6xl mx-auto">
//                 <div className="transform transition-transform duration-100 ease-out">
//                     {/* Main Heading with optimized text rendering */}
//                     <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
//                         <span className="block">Transforming Space</span>
//                         <span className="block">Into Dreams</span>
//                     </h1>

//                     {/* Subtitle */}
//                     <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto font-light leading-relaxed">
//                         Premium interior design services that reflect your unique style and elevate your living experience
//                     </p>

//                     {/* CTA Buttons */}
//                     <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
//                         <button 
//                             className="bg-white text-black px-8 py-4 rounded-full text-lg font-semibold hover:bg-gradient-to-r from-amber-500 to-yellow-400 transition-all duration-300 inline-flex items-center group hover:scale-105 transform focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black"
//                             aria-label="Start your project"
//                         >
//                             Start Your Project
//                             <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-200" size={20} />
//                         </button>
                        
//                         <button 
//                             onClick={() => setIsVideoPlaying(!isVideoPlaying)}
//                             className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-gradient-to-r from-amber-500 to-yellow-400 hover:text-black transition-all duration-300 inline-flex items-center group hover:scale-105 transform focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black"
//                             aria-label="Watch our work"
//                         >
//                             <Play className="mr-2 group-hover:scale-110 transition-transform duration-200" size={20} />
//                             Watch Our Work
//                         </button>
//                     </div>
//                 </div>
//             </div>

//             {/* Scroll indicator with reduced motion consideration */}
//             <button
//                 onClick={scrollToNext}
//                 className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 focus:outline-none group"
//                 aria-label="Scroll to next section"
//             >
//                 <div className="animate-bounce w-10 h-16 border-2 border-white/50 rounded-full flex justify-center p-1 group-hover:border-white transition-colors duration-300">
//                     <div className="w-1 h-4 bg-white rounded-full mt-2" />
//                 </div>
//             </button>
//         </section>
//     );
// }


"use client";
import { useState, useEffect, useCallback, useRef } from "react";
import { ArrowRight, Play, Star, Award, Users, ChevronDown } from "lucide-react";
import Link from "next/link";

export default function EnhancedHeroSection() {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isVideoPlaying, setIsVideoPlaying] = useState(false);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const animationFrameRef = useRef<number | null>(null);
    const timerRef = useRef<NodeJS.Timeout | null>(null);
;
      
    // Memoized background images array to prevent recreation on each render
    const backgroundImages = useRef([
        "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080",
        "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080",
        "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080"
    ]).current;

    // Memoized stats array
    const stats = useRef([
        { icon: Star, value: "4.9", label: "Rating" },
        { icon: Award, value: "500+", label: "Projects" },
        { icon: Users, value: "98%", label: "Satisfaction" }
    ]).current;

    // Throttled mouse move handler
    const handleMouseMove = useCallback((e: MouseEvent) => {
        if (animationFrameRef.current) {
            cancelAnimationFrame(animationFrameRef.current);
        }

        animationFrameRef.current = requestAnimationFrame(() => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        });
    }, []);

    useEffect(() => {
        window.addEventListener('mousemove', handleMouseMove);
        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            if (animationFrameRef.current) {
                cancelAnimationFrame(animationFrameRef.current);
            }
        };
    }, [handleMouseMove]);

    // Image carousel with cleanup
    useEffect(() => {
        timerRef.current = setInterval(() => {
            setCurrentImageIndex(prev => (prev + 1) % backgroundImages.length);
        }, 5000);

        return () => {
            if (timerRef.current) {
                clearInterval(timerRef.current);
            }
        };
    }, [backgroundImages.length]);

    // Memoized scroll function
    const scrollToNext = useCallback(() => {
        window.scrollTo({
            top: window.innerHeight,
            behavior: 'smooth'
        });
    }, []);

    // Preload background images
    useEffect(() => {
        backgroundImages.forEach(src => {
            const img = new Image();
            img.src = src;
        });
    }, [backgroundImages]);

    return (
        <section className="relative h-screen flex items-center justify-center overflow-hidden bg-black">
            {/* Dynamic Background Images with optimized transitions */}
            <div className="absolute inset-0">
                {backgroundImages.map((image, index) => (
                    <div
                        key={image} // Using image URL as key for better reconciliation
                        className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                            index === currentImageIndex ? 'opacity-100' : 'opacity-0 pointer-events-none'
                        }`}
                        style={{
                            backgroundImage: `url('${image}')`,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                            willChange: "opacity" // Hint to browser for optimization
                        }}
                        aria-hidden={index !== currentImageIndex}
                    />
                ))}
            </div>

            {/* Gradient Overlay */}
            <div 
                className="absolute inset-0 bg-gradient-to-br from-black/70 via-gray-900/50 to-black/70 z-10"
                style={{ willChange: "opacity" }}
            />

            {/* Main Content */}
            <div className="relative z-20 text-center text-white px-4 max-w-6xl mx-auto">
                <div className="transform transition-transform duration-100 ease-out">
                    {/* Main Heading with optimized text rendering */}
                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
                        <span className="block">Transforming Space with us (sunShine Associate )</span>
                        <span className="block">Into Dreams</span>
                    </h1>

                    {/* Subtitle */}
                    <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto font-light leading-relaxed text-gray-200">
                        Premium interior design services that reflect your unique style and elevate your living experience
                    </p>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
                        <Link href="/contact">
                        <button 
                            className="bg-gray-100 text-black px-8 py-4 rounded-full text-lg font-semibold hover:bg-gradient-to-r from-gray-400 to-gray-300 transition-all duration-300 inline-flex items-center group hover:scale-105 transform focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-400 focus-visible:ring-offset-2 focus-visible:ring-offset-black"
                            aria-label="Start your project"
                        >
                            Start Your Project
                            <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-200" size={20} />
                        </button>
                        </Link>
                        
                        <Link href="/projects">
                        <button 
                            onClick={() => setIsVideoPlaying(!isVideoPlaying)}
                            className="bg-transparent border-2 border-gray-300 text-gray-200 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gradient-to-r from-gray-600 to-gray-500 hover:text-white hover:border-gray-400 transition-all duration-300 inline-flex items-center group hover:scale-105 transform focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-400 focus-visible:ring-offset-2 focus-visible:ring-offset-black"
                            aria-label="Watch our work"
                        >
                            <Play className="mr-2 group-hover:scale-110 transition-transform duration-200" size={20} />
                            Watch Our Work
                        </button>
                        </Link>
                    </div>
                </div>
            </div>

            {/* Scroll indicator with reduced motion consideration */}
            <button
                onClick={scrollToNext}
                className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 focus:outline-none group"
                aria-label="Scroll to next section"
            >
                <div className="animate-bounce w-10 h-16 border-2 border-gray-400/50 rounded-full flex justify-center p-1 group-hover:border-gray-300 transition-colors duration-300">
                    <div className="w-1 h-4 bg-gray-300 rounded-full mt-2" />
                </div>
            </button>
        </section>
    );
}