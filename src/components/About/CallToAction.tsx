"use client"
import {motion} from "framer-motion"
import Link from "next/link"

export default function CallToAction(){
    return(
        <>
        <section className="py-24 bg-gradient-to-r from-gray-900 to-black relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-5xl font-bold text-white mb-6">
              Ready to Transform Your Space?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-10 leading-relaxed">
              It would be a great honor to do business with you. Let us help you bring your vision to life with our comprehensive design and execution services.
            </p>
            <Link href="/contact">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-gray-900 px-10 py-4 rounded-full font-semibold hover:shadow-lg transition-all duration-300 text-lg"
            >
              Get In Touch
            </motion.button>
            </Link>
             
          </motion.div>
        </div>
      </section>
        </>
    )
}

