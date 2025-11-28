"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function Hero() {
    return (
        <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/90 z-10" />
                {/* Placeholder for high-res luxury car image */}
                <img
                    src="https://images.unsplash.com/photo-1563720223185-11003d516935?q=80&w=2070&auto=format&fit=crop"
                    alt="Luxury Limousine"
                    className="w-full h-full object-cover"
                />
            </div>

            <div className="container mx-auto px-6 relative z-20 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <span className="inline-block py-1 px-3 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm text-gold text-sm font-medium mb-6">
                        Premium Chauffeur Services in UAE
                    </span>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-white mb-6 leading-tight"
                >
                    Elevate Your <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-200 to-gold-500">
                        Journey
                    </span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-10"
                >
                    Experience the epitome of luxury and comfort with our world-class limousine fleet.
                    Professional chauffeurs, pristine vehicles, and punctual service.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                    className="flex flex-col md:flex-row items-center justify-center gap-4"
                >
                    <a
                        href="https://wa.me/971501234567"
                        className="w-full md:w-auto bg-gold hover:bg-gold-500 text-black px-8 py-4 rounded-full font-bold text-lg transition-all transform hover:scale-105 flex items-center justify-center gap-2"
                    >
                        Book Now
                        <ArrowRight size={20} />
                    </a>
                    <a
                        href="#fleet"
                        className="w-full md:w-auto bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 text-white px-8 py-4 rounded-full font-bold text-lg transition-all"
                    >
                        View Fleet
                    </a>
                </motion.div>
            </div>
        </section>
    );
}
