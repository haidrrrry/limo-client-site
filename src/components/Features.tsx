"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Clock, Award, UserCheck } from "lucide-react";

const features = [
    {
        icon: ShieldCheck,
        title: "Safety First",
        description: "Our vehicles undergo rigorous safety checks and are sanitized before every ride.",
    },
    {
        icon: Clock,
        title: "Always Punctual",
        description: "We value your time. Our chauffeurs arrive 15 minutes early, every time.",
    },
    {
        icon: Award,
        title: "Premium Fleet",
        description: "Experience the latest models from Rolls Royce, Mercedes, and BMW.",
    },
    {
        icon: UserCheck,
        title: "Expert Chauffeurs",
        description: "Highly trained, multilingual professionals dedicated to your comfort.",
    },
];

export default function Features() {
    return (
        <section className="py-20 bg-black relative overflow-hidden">
            {/* Decorative background element */}
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-gold-900/20 via-transparent to-transparent opacity-50" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-6 leading-tight">
                            Why Choose <br />
                            <span className="text-gold">LuxeRide UAE?</span>
                        </h2>
                        <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                            We don't just provide transportation; we curate journeys. From the moment you book until you reach your destination, every detail is handled with white-glove precision.
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                            {features.map((feature, index) => (
                                <div key={index} className="flex flex-col gap-3">
                                    <div className="w-12 h-12 bg-gold/10 rounded-xl flex items-center justify-center text-gold">
                                        <feature.icon size={24} />
                                    </div>
                                    <h3 className="text-xl font-bold text-white">{feature.title}</h3>
                                    <p className="text-gray-500 text-sm">{feature.description}</p>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="relative"
                    >
                        <div className="absolute -inset-4 bg-gold/20 rounded-3xl blur-2xl" />
                        <img
                            src="https://images.unsplash.com/photo-1562426509-5044a121aa49?q=80&w=2070&auto=format&fit=crop"
                            alt="Chauffeur opening car door"
                            className="relative rounded-3xl border border-white/10 shadow-2xl"
                        />
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
