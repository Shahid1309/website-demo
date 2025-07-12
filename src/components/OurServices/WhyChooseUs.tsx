


"use client";

import { useState } from "react";
import { ShieldCheck, Clock, Users, Hammer, Award } from "lucide-react";

interface Reason {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const reasons: Reason[] = [
  {
    icon: <ShieldCheck className="w-6 h-6 text-white" />,
    title: "Trusted & Reliable",
    description: "Over 10+ years of experience with happy clients across India.",
  },
  {
    icon: <Hammer className="w-6 h-6 text-white" />,
    title: "Turnkey Execution",
    description: "We handle design, construction, interiors — all under one roof.",
  },
  {
    icon: <Clock className="w-6 h-6 text-white" />,
    title: "On-Time Delivery",
    description: "Timely project completion with consistent progress updates.",
  },
  {
    icon: <Users className="w-6 h-6 text-white" />,
    title: "Expert Team",
    description: "Our team includes skilled architects, engineers, and designers.",
  },
  {
    icon: <Award className="w-6 h-6 text-white" />,
    title: "Quality Assurance",
    description: "We use top-grade materials and follow rigorous quality checks.",
  },
];

export default function WhyChooseUs() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="relative py-24 bg-gray-100 overflow-hidden">
      {/* Animated background elements */}
      {/* <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-64 h-64 bg-gradient-to-r from-gray-400/20 to-gray-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-r from-gray-500/15 to-gray-600/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "2s" }} />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-gray-600/10 to-gray-700/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "4s" }} />
      </div> */}

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(0,0,0,0.05)_1px,transparent_0)] bg-[size:50px_50px]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/70 backdrop-blur-sm border border-gray-300/50 rounded-full mb-6">
            <div className="w-2 h-2 bg-gray-600 rounded-full animate-pulse" />
            <span className="text-sm font-medium text-gray-700">Why Choose Us</span>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-gray-900 leading-tight">
            Built on{" "}
            <span className="bg-gradient-to-r from-gray-700 via-gray-800 to-gray-900 bg-clip-text text-transparent">
              Excellence
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover why thousands of clients trust us with their most important projects
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {reasons.map((item, index) => (
            <div
              key={index}
              className={`group relative bg-gradient-to-br from-white/70 to-gray-100/80 backdrop-blur-sm border border-gray-300/50 p-8 rounded-3xl shadow-2xl transition-all duration-500 hover:scale-105 ${
                hoveredIndex === index ? 'shadow-gray-400/30' : ''
              }`}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Glow effect */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-gray-400/20 to-gray-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl" />
              
              {/* Card content */}
              <div className="relative z-10">
                {/* Icon container */}
                <div className="relative mb-6">
                  <div className="absolute inset-0 bg-gradient-to-r from-gray-600 to-gray-800 rounded-2xl blur-sm opacity-50 group-hover:opacity-80 transition-opacity duration-300" />
                  <div className="relative flex items-center justify-center w-16 h-16 bg-gradient-to-br from-gray-700 to-gray-900 rounded-2xl shadow-xl group-hover:shadow-2xl transition-all duration-300">
                    {item.icon}
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-gray-800 transition-colors duration-300">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 text-sm leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                  {item.description}
                </p>

                {/* Animated line */}
                <div className="mt-6 h-px bg-gradient-to-r from-transparent via-gray-400 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
              </div>

              {/* Corner accent */}
              <div className="absolute top-4 right-4 w-2 h-2 bg-gray-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>

        {/* Bottom decorative element */}
        {/* <div className="flex items-center justify-center mt-16">
          <div className="flex items-center gap-2">
            <div className="w-8 h-px bg-gradient-to-r from-transparent to-gray-400" />
            <div className="w-2 h-2 bg-gray-500 rounded-full animate-pulse" />
            <div className="w-16 h-px bg-gradient-to-r from-gray-400 to-gray-600" />
            <div className="w-2 h-2 bg-gray-600 rounded-full animate-pulse" style={{ animationDelay: "1s" }} />
            <div className="w-8 h-px bg-gradient-to-r from-gray-400 to-transparent" />
          </div>
        </div> */}
      </div>
    </section>
  );
}