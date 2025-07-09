
import {motion} from "framer-motion"
export default function ServicesSection(){
    return(
        <>
        <section className="py-24 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                  <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                  >
                    <span className="bg-gradient-to-r from-gray-800 to-black bg-clip-text text-transparent text-sm font-semibold tracking-wide uppercase">
                      Our Expertise
                    </span>
                    <h2 className="text-5xl font-bold text-gray-900 mt-4 mb-6">Our Services</h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                      We provide comprehensive design and execution services to bring your vision to life
                    </p>
                  </motion.div>
        
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {[
                      {
                        title: "Planning & Design",
                        description: "Comprehensive planning services including floor plans, sections, and elevations",
                        icon: "📐"
                      },
                      {
                        title: "3D Modeling",
                        description: "Detailed 3D exterior and interior views to visualize your project",
                        icon: "🏗️"
                      },
                      {
                        title: "Site Execution",
                        description: "On-site execution work including interior, exterior, and fabrication",
                        icon: "🔨"
                      },
                      {
                        title: "Client Coordination",
                        description: "Close coordination with clients throughout the entire project lifecycle",
                        icon: "🤝"
                      },
                      {
                        title: "Technical Drawings",
                        description: "Working drawings, electrical and plumbing drawings for complete solutions",
                        icon: "📋"
                      },
                      {
                        title: "Client Satisfaction",
                        description: "Our commitment to delivering exceptional results and client satisfaction",
                        icon: "⭐"
                      }
                    ].map((service, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100"
                      >
                        <div className="text-4xl mb-4">{service.icon}</div>
                        <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
                        <p className="text-gray-600 leading-relaxed">{service.description}</p>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </section>
        </>
    )
}