"use client";
import type { Project } from "@/Data/projects-data";
import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { ChevronLeft, ChevronRight, X, Eye, ArrowRight, Search, Filter, Loader2 } from "lucide-react";
import { 
  projects, 
  filterOptions, 
  fadeInUp, 
  staggerContainer, 
  itemAnimation 
} from "@/Data/projects-data";
import CallToAction from "../About/CallToAction";

export default function Projects() {
  
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [filter, setFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [sortOption, setSortOption] = useState('newest');
  const [isGridView, setIsGridView] = useState(true);
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, -100]);

  // Simulate loading state
  useEffect(() => {
    if (filter || searchQuery) {
      setIsLoading(true);
      const timer = setTimeout(() => setIsLoading(false), 800);
      return () => clearTimeout(timer);
    }
  }, [filter, searchQuery]);

  const filteredProjects = projects
    .filter(project => 
      filter === 'all' || project.type === filter
    )
    .filter(project =>
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.category.toLowerCase().includes(searchQuery.toLowerCase())
    )
   .sort((a, b) => {
  if (sortOption === 'newest') return new Date(b.date as string).getTime() - new Date(a.date as string).getTime();
  if (sortOption === 'oldest') return new Date(a.date as string).getTime() - new Date(b.date as string).getTime();
  if (sortOption === 'name') return a.title.localeCompare(b.title);
  return 0;
});

  const nextImage = () => {
    if (selectedProject) {
      setCurrentImageIndex((prev) => 
        prev === selectedProject.images.length - 1 ? 0 : prev + 1
      );
    }
  };

  const prevImage = () => {
    if (selectedProject) {
      setCurrentImageIndex((prev) => 
        prev === 0 ? selectedProject.images.length - 1 : prev - 1
      );
    }
  };

 const openModal = (project: Project) => {
  setSelectedProject(project);
  setCurrentImageIndex(0);
  document.body.style.overflow = 'hidden';
};
  const closeModal = () => {
    setSelectedProject(null);
    document.body.style.overflow = 'auto';
  };

  // Keyboard navigation for modal
  useEffect(() => {
    const handleKeyDown = (e:KeyboardEvent) => {
      if (!selectedProject) return;
      
      if (e.key === 'Escape') {
        closeModal();
      } else if (e.key === 'ArrowRight') {
        nextImage();
      } else if (e.key === 'ArrowLeft') {
        prevImage();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedProject, currentImageIndex]);

  return (
    <div className="bg-black min-h-screen" ref={containerRef}>
      {/* Parallax Background */}
      <motion.div 
        className="fixed inset-0 -z-10 opacity-20"
        style={{ y }}
      >
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] bg-repeat bg-[length:80px_80px]"></div>
      </motion.div>

      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-b from-gray-900 to-black relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('/noise-pattern.png')] bg-repeat"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            className="text-center mb-16"
            {...fadeInUp}
            viewport={{ once: true }}
          >
            <motion.h1 
              className="text-5xl md:text-7xl font-bold text-white mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Our <span className="bg-gradient-to-r from-gray-400 to-gray-600 bg-clip-text text-transparent">Portfolio</span>
            </motion.h1>
            <motion.p 
              className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Explore our collection of meticulously crafted interior design projects that redefine spaces and elevate experiences.
            </motion.p>
          </motion.div>
          
          {/* Search and Filter Bar */}
          <motion.div 
            className="flex flex-col md:flex-row justify-between items-center gap-6 mb-16 bg-gray-900/50 backdrop-blur-md p-6 rounded-2xl border border-gray-800"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="relative w-full md:w-auto">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 w-5 h-5" />
              <input
                type="text"
                placeholder="Search projects..."
                className="w-full md:w-64 pl-10 pr-4 py-3 bg-gray-800 text-white rounded-lg border border-gray-700 focus:border-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-600 transition-all"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>

            <div className="flex flex-wrap items-center gap-3 w-full md:w-auto justify-center md:justify-end">
              {/* View Toggle */}
              <div className="flex bg-gray-800 rounded-lg p-1 border border-gray-700">
                <button
                  onClick={() => setIsGridView(true)}
                  className={`p-2 rounded-md ${isGridView ? 'bg-gray-700 text-white' : 'text-gray-400'}`}
                  aria-label="Grid view"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="3" width="7" height="7"></rect>
                    <rect x="14" y="3" width="7" height="7"></rect>
                    <rect x="14" y="14" width="7" height="7"></rect>
                    <rect x="3" y="14" width="7" height="7"></rect>
                  </svg>
                </button>
                <button
                  onClick={() => setIsGridView(false)}
                  className={`p-2 rounded-md ${!isGridView ? 'bg-gray-700 text-white' : 'text-gray-400'}`}
                  aria-label="List view"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="8" y1="6" x2="21" y2="6"></line>
                    <line x1="8" y1="12" x2="21" y2="12"></line>
                    <line x1="8" y1="18" x2="21" y2="18"></line>
                    <line x1="3" y1="6" x2="3.01" y2="6"></line>
                    <line x1="3" y1="12" x2="3.01" y2="12"></line>
                    <line x1="3" y1="18" x2="3.01" y2="18"></line>
                  </svg>
                </button>
              </div>

              {/* Sort Dropdown */}
              <div className="relative">
                <select
                  value={sortOption}
                  onChange={(e) => setSortOption(e.target.value)}
                  className="appearance-none bg-gray-800 text-white pl-4 pr-10 py-3 rounded-lg border border-gray-700 focus:border-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-600 transition-all cursor-pointer"
                >
                  <option value="newest">Newest First</option>
                  <option value="oldest">Oldest First</option>
                  <option value="name">A-Z</option>
                </select>
                <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none text-gray-400">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="6 9 12 15 18 9"></polyline>
                  </svg>
                </div>
              </div>

              {/* Filter Dropdown (Mobile) */}
              <div className="md:hidden relative">
                <button className="flex items-center gap-2 bg-gray-800 text-white px-4 py-3 rounded-lg border border-gray-700">
                  <Filter className="w-5 h-5" />
                  <span>Filter</span>
                </button>
                <div className="absolute right-0 mt-2 w-48 bg-gray-800 rounded-lg shadow-lg border border-gray-700 z-10 hidden">
                  {filterOptions.map((option) => (
                    <button
                      key={option.value}
                      onClick={() => setFilter(option.value)}
                      className={`w-full text-left px-4 py-2 text-sm ${
                        filter === option.value ? 'bg-gray-700 text-white' : 'text-gray-300 hover:bg-gray-700'
                      }`}
                    >
                      {option.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Filter Buttons (Desktop) */}
          <motion.div 
            className="hidden md:flex flex-wrap justify-center gap-3 mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            {/* {filterOptions.map((option) => (
              <motion.button
                key={option.value}
                onClick={() => setFilter(option.value)}
                className={`px-6 py-3 rounded-full font-medium text-sm sm:text-base transition-all duration-300 border flex items-center gap-2 ${
                  filter === option.value
                    ? 'bg-white text-black border-white shadow-lg'
                    : 'bg-transparent text-gray-300 border-gray-600 hover:border-gray-400 hover:text-white'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {option.icon && <option.icon className="w-4 h-4" />}
                {option.label}
              </motion.button>
            ))} */}
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="pb-32 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {isLoading ? (
            <div className="flex justify-center items-center py-32">
              <Loader2 className="w-12 h-12 text-gray-600 animate-spin" />
            </div>
          ) : (
            <AnimatePresence mode="wait">
              {filteredProjects.length > 0 ? (
                isGridView ? (
                  <motion.div 
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                    variants={staggerContainer}
                    initial="initial"
                    animate="animate"
                    key={`grid-${filter}-${searchQuery}`}
                  >
                    {filteredProjects.map((project, index) => (
                      <motion.div
                        key={project.id}
                        className={`group cursor-pointer relative ${
                          index % 4 === 0 ? 'lg:col-span-2 lg:row-span-2' : 
                          index % 5 === 0 ? 'lg:col-span-1 lg:row-span-2' : 
                          'lg:col-span-1 lg:row-span-1'
                        }`}
                        variants={itemAnimation}
                        whileHover={{ y: -12 }}
                        onClick={() => openModal(project)}
                        layout
                      >
                        <div className="relative overflow-hidden rounded-2xl bg-gray-900 border border-gray-800 group-hover:border-gray-600 transition-all duration-500 h-full flex flex-col">
                          {/* Image Container */}
                          <div className={`relative overflow-hidden flex-grow ${
                            index % 4 === 0 ? 'h-96 lg:h-full' : 
                            index % 5 === 0 ? 'h-80 lg:h-full' : 
                            'h-64 lg:h-56'
                          }`}>
                            <img
                              src={project.images[0]}
                              alt={project.title}
                              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                              loading="lazy"
                            />
                            
                            {/* Gradient Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500"></div>
                            
                            {/* Hover Overlay */}
                            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                              <div className="text-center text-white">
                                <Eye className="w-12 h-12 mx-auto mb-2 opacity-90" />
                                <p className="text-sm font-medium">View Project</p>
                              </div>
                            </div>

                            {/* Project Badge */}
                            <div className="absolute top-4 left-4 bg-black/70 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-medium flex items-center gap-2">
                              <span className={`w-2 h-2 rounded-full ${
                                project.status === 'completed' ? 'bg-green-500' :
                                project.status === 'ongoing' ? 'bg-yellow-500' :
                                'bg-blue-500'
                              }`}></span>
                              {project.status}
                            </div>
                          </div>

                          {/* Content */}
                          <div className="p-6 lg:p-8 relative z-10">
                            <div className="flex items-center justify-between mb-3">
                              <span className="inline-block px-3 py-1 text-xs font-semibold bg-gray-800 text-gray-300 rounded-full border border-gray-700">
                                {project.category.split(' • ')[0]}
                              </span>
                              <div className="flex items-center gap-2">
                                {project.featured && (
                                  <span className="text-xs font-medium bg-gradient-to-r from-amber-500 to-amber-600 text-black px-2 py-1 rounded-full">
                                    Featured
                                  </span>
                                )}
                                <ArrowRight className="w-4 h-4 text-gray-500 group-hover:text-white group-hover:translate-x-1 transition-all duration-300" />
                              </div>
                            </div>
                            
                            <h3 className="text-xl lg:text-2xl font-bold text-white mb-3 group-hover:text-gray-200 transition-colors duration-300">
                              {project.title}
                            </h3>
                            
                            <p className="text-gray-400 text-sm lg:text-base line-clamp-3 group-hover:text-gray-300 transition-colors duration-300">
                              {project.description}
                            </p>

                            {/* Footer */}
                            <div className="flex justify-between items-center mt-4">
                              {/* Image Count Indicator */}
                              <div className="flex items-center text-gray-500 text-xs">
                                <div className="flex space-x-1 mr-2">
                                  {project.images.map((_, i) => (
                                    <div key={i} className="w-1.5 h-1.5 bg-gray-600 rounded-full"></div>
                                  ))}
                                </div>
                                <span>{project.images.length} images</span>
                              </div>

                              {/* Date */}
                              <div className="text-xs text-gray-500">
                                {new Date(project.date).toLocaleDateString('en-US', {
                                  year: 'numeric',
                                  month: 'short'
                                })}
                              </div>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </motion.div>
                ) : (
                  <motion.div 
                    className="space-y-6"
                    variants={staggerContainer}
                    initial="initial"
                    animate="animate"
                    key={`list-${filter}-${searchQuery}`}
                  >
                    {filteredProjects.map((project) => (
                      <motion.div
                        key={project.id}
                        className="group cursor-pointer"
                        variants={itemAnimation}
                        onClick={() => openModal(project)}
                        layout
                      >
                        <div className="relative overflow-hidden rounded-2xl bg-gray-900 border border-gray-800 group-hover:border-gray-600 transition-all duration-500">
                          <div className="flex flex-col md:flex-row">
                            {/* Image */}
                            <div className="relative w-full md:w-1/3 h-64 md:h-auto">
                              <img
                                src={project.images[0]}
                                alt={project.title}
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                loading="lazy"
                              />
                              <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/10 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500"></div>
                            </div>
                            
                            {/* Content */}
                            <div className="p-6 lg:p-8 flex-grow">
                              <div className="flex flex-col h-full">
                                <div className="flex justify-between items-start mb-4">
                                  <div>
                                    <span className="inline-block px-3 py-1 text-xs font-semibold bg-gray-800 text-gray-300 rounded-full border border-gray-700 mb-2">
                                      {project.category}
                                    </span>
                                    <h3 className="text-xl lg:text-2xl font-bold text-white group-hover:text-gray-200 transition-colors duration-300">
                                      {project.title}
                                    </h3>
                                  </div>
                                  <div className="flex items-center gap-2">
                                    {project.featured && (
                                      <span className="text-xs font-medium bg-gradient-to-r from-amber-500 to-amber-600 text-black px-2 py-1 rounded-full">
                                        Featured
                                      </span>
                                    )}
                                    <ArrowRight className="w-5 h-5 text-gray-500 group-hover:text-white group-hover:translate-x-1 transition-all duration-300" />
                                  </div>
                                </div>
                                
                                <p className="text-gray-400 text-base line-clamp-3 group-hover:text-gray-300 transition-colors duration-300 mb-4">
                                  {project.description}
                                </p>
                                
                                <div className="mt-auto flex justify-between items-center">
                                  <div className="flex items-center gap-4">
                                    <div className="flex items-center text-gray-500 text-xs">
                                      <div className="flex space-x-1 mr-2">
                                        {project.images.map((_, i) => (
                                          <div key={i} className="w-1.5 h-1.5 bg-gray-600 rounded-full"></div>
                                        ))}
                                      </div>
                                      <span>{project.images.length} images</span>
                                    </div>
                                    
                                    <div className="flex items-center gap-2 text-xs text-gray-500">
                                      <span className={`w-2 h-2 rounded-full ${
                                        project.status === 'completed' ? 'bg-green-500' :
                                        project.status === 'ongoing' ? 'bg-yellow-500' :
                                        'bg-blue-500'
                                      }`}></span>
                                      {project.status}
                                    </div>
                                  </div>
                                  
                                  <div className="text-xs text-gray-500">
                                    {new Date(project.date).toLocaleDateString('en-US', {
                                      year: 'numeric',
                                      month: 'short',
                                      day: 'numeric'
                                    })}
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </motion.div>
                )
              ) : (
                <motion.div 
                  className="text-center py-20"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <div className="max-w-md mx-auto">
                    <svg className="w-24 h-24 mx-auto text-gray-600 mb-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                    <h3 className="text-2xl font-medium text-gray-300 mb-4">No projects found</h3>
                    <p className="text-gray-500 mb-6">We couldn't find any projects matching your criteria.</p>
                    <button
                      onClick={() => {
                        setFilter('all');
                        setSearchQuery('');
                      }}
                      className="px-6 py-3 bg-white text-black rounded-lg font-medium hover:bg-gray-200 transition-colors duration-200"
                    >
                      Reset Filters
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          )}
        </div>
      </section>

      {/* Enhanced Project Modal with Image Gallery */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div 
            className="fixed inset-0 z-50 overflow-y-auto bg-black/95 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
          >
            <div className="flex items-center justify-center min-h-screen p-4">
              <motion.div 
                className="bg-gray-900 rounded-2xl border border-gray-800 max-w-6xl w-full max-h-[90vh] overflow-hidden relative"
                initial={{ opacity: 0, scale: 0.9, y: 50 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 50 }}
                onClick={(e) => e.stopPropagation()}
                layoutId={`project-${selectedProject.id}`}
              >
                {/* Modal Header */}
                <div className="flex justify-between items-center p-6 border-b border-gray-800 sticky top-0 bg-gray-900 z-10">
                  <div>
                    <h3 className="text-2xl font-bold text-white">
                      {selectedProject.title}
                    </h3>
                    <p className="text-gray-400 mt-1">{selectedProject.category}</p>
                  </div>
                  <button
                    onClick={closeModal}
                    className="text-gray-400 hover:text-white transition-colors duration-200 p-2"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>

                {/* Modal Content */}
                <div className="p-6 overflow-y-auto max-h-[70vh]">
                  <div className="grid lg:grid-cols-2 gap-8">
                    {/* Image Gallery */}
                    <div className="space-y-4">
                      {/* Main Image */}
                      <div className="relative group">
                        <AnimatePresence mode="wait" custom={currentImageIndex}>
                          <motion.img
                            key={currentImageIndex}
                            src={selectedProject.images[currentImageIndex]}
                            alt={selectedProject.title}
                            className="w-full h-80 lg:h-96 object-cover rounded-lg"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.3 }}
                          />
                        </AnimatePresence>
                        
                        {/* Navigation Arrows */}
                        {selectedProject.images.length > 1 && (
                          <>
                            <button
                              onClick={prevImage}
                              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/70 text-white p-3 rounded-full hover:bg-black transition-colors duration-200 z-10"
                            >
                              <ChevronLeft className="w-5 h-5" />
                            </button>
                            <button
                              onClick={nextImage}
                              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/70 text-white p-3 rounded-full hover:bg-black transition-colors duration-200 z-10"
                            >
                              <ChevronRight className="w-5 h-5" />
                            </button>
                          </>
                        )}

                        {/* Image Counter */}
                        <div className="absolute bottom-4 right-4 bg-black/70 text-white px-3 py-1 rounded-full text-sm backdrop-blur-sm">
                          {currentImageIndex + 1} / {selectedProject.images.length}
                        </div>
                      </div>

                      {/* Image Thumbnails */}
                      {selectedProject.images.length > 1 && (
                        <div className="flex space-x-2 overflow-x-auto pb-2">
                          {selectedProject.images.map((image, index) => (
                            <button
                              key={index}
                              onClick={() => setCurrentImageIndex(index)}
                              className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-all duration-200 relative ${
                                index === currentImageIndex 
                                  ? 'border-white' 
                                  : 'border-gray-600 hover:border-gray-400'
                              }`}
                            >
                              <img
                                src={image}
                                alt={`${selectedProject.title} ${index + 1}`}
                                className="w-full h-full object-cover"
                              />
                              {index === currentImageIndex && (
                                <div className="absolute inset-0 bg-white/20"></div>
                              )}
                            </button>
                          ))}
                        </div>
                      )}
                    </div>

                    {/* Project Details */}
                    <div className="space-y-6">
                      <div>
                        <h4 className="text-lg font-semibold text-white mb-3">About This Project</h4>
                        <p className="text-gray-300 leading-relaxed">{selectedProject.description}</p>
                      </div>

                      <div>
                        <h4 className="text-lg font-semibold text-white mb-3">Project Details</h4>
                        <div className="grid grid-cols-2 gap-4 mb-6">
                          <div>
                            <p className="text-sm text-gray-400">Client</p>
                            <p className="text-white">{selectedProject.client || 'Confidential'}</p>
                          </div>
                          <div>
                            <p className="text-sm text-gray-400">Location</p>
                            <p className="text-white">{selectedProject.location}</p>
                          </div>
                          <div>
                            <p className="text-sm text-gray-400">Size</p>
                            <p className="text-white">{selectedProject.size}</p>
                          </div>
                          <div>
                            <p className="text-sm text-gray-400">Completed</p>
                            <p className="text-white">
                              {new Date(selectedProject.date).toLocaleDateString('en-US', {
                                year: 'numeric',
                                month: 'long'
                              })}
                            </p>
                          </div>
                        </div>
                      </div>

                      <div>
                        <h4 className="text-lg font-semibold text-white mb-3">Project Features</h4>
                        <ul className="space-y-2">
                          {selectedProject.details.map((detail, index) => (
                            <li key={index} className="flex items-start text-gray-300">
                              <span className="w-2 h-2 bg-gray-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                              {detail}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="pt-4 border-t border-gray-800">
                        <button
                          onClick={closeModal}
                          className="w-full bg-white text-black py-3 rounded-lg font-medium hover:bg-gray-200 transition-colors duration-200"
                        >
                          Close Project
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      
    </div>
  );
}