

"use client";
import { useState, useEffect } from "react";
import { ArrowRight, Play, Star, Award, Users, ChevronDown } from "lucide-react";

export default function EnhancedHeroSection() {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isVideoPlaying, setIsVideoPlaying] = useState(false);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const backgroundImages = [
        "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080",
        "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080",
        "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080"
    ];

    const stats = [
        { icon: Star, value: "4.9", label: "Rating" },
        { icon: Award, value: "500+", label: "Projects" },
        { icon: Users, value: "98%", label: "Satisfaction" }
    ];

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentImageIndex((prev) => (prev + 1) % backgroundImages.length);
        }, 5000);

        return () => clearInterval(timer);
    }, []);

    const parallaxStyle = {
        transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`
    };

    const scrollToNext = () => {
        window.scrollTo({
            top: window.innerHeight,
            behavior: 'smooth'
        });
    };

    return (
        <div className="bg-red-300">
            <section className="relative h-screen flex items-center justify-center overflow-hidden">
                {/* Dynamic Background Images */}
                {backgroundImages.map((image, index) => (
                    <div
                        key={index}
                        className={`absolute inset-0 transition-opacity duration-2000 ${
                            index === currentImageIndex ? 'opacity-100' : 'opacity-0'
                        }`}
                        style={{
                            backgroundImage: `url('${image}')`,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                            backgroundAttachment: "fixed"
                        }}
                    />
                ))}

                {/* Animated Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/40 to-black/60 z-10" />

                {/* Floating Particles */}
                <div className="absolute inset-0 z-15">
                    {[...Array(20)].map((_, i) => (
                        <div
                            key={i}
                            className="absolute w-2 h-2 bg-white/20 rounded-full animate-pulse"
                            style={{
                                left: `${Math.random() * 100}%`,
                                top: `${Math.random() * 100}%`,
                                animationDelay: `${Math.random() * 3}s`,
                                animationDuration: `${2 + Math.random() * 2}s`
                            }}
                        />
                    ))}
                </div>

                {/* Main Content */}
                <div className="relative z-20 text-center text-white px-4 max-w-6xl mx-auto">
                    <div
                        className="transform transition-transform duration-100 ease-out"
                        
                    >
                        {/* Main Heading */}
                        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
                            <span className="block">Transforming Space</span>
                           
                            <span className="block">Into Dreams</span>
                        </h1>

                        {/* Subtitle */}
                        <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto font-light leading-relaxed">
                            Premium interior design services that reflect your unique style and elevate your living experience with unmatched creativity and attention to detail
                        </p>

                        {/* CTA Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
                            <button className="bg-white text-black px-8 py-4 rounded-full text-lg font-semibold hover:bg-gradient-to-r from-amber-500 to-yellow-400 transition-all duration-300 inline-flex items-center group hover:scale-105 transform">
                                Start Your Project
                                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-200" size={20} />
                            </button>
                            
                            <button 
                                onClick={() => setIsVideoPlaying(!isVideoPlaying)}
                                className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-gradient-to-r from-amber-500 to-yellow-400 hover:text-black transition-all duration-300 inline-flex items-center group hover:scale-105 transform"
                            >
                                <Play className="mr-2 group-hover:scale-110 transition-transform duration-200" size={20} />
                                Watch Our Work
                            </button>
                        </div>
                    </div>
                </div>

                {/* Decorative Elements */}
                <div className="absolute top-20 left-20 w-32 h-32 border border-white/20 rounded-full z-15 animate-pulse"></div>
                <div className="absolute bottom-20 right-20 w-24 h-24 border border-white/20 rounded-full z-15 animate-pulse" style={{ animationDelay: '1s' }}></div>
            </section>
        </div>
    );
}