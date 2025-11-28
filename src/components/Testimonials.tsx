"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
    {
        name: "Sarah Jenkins",
        role: "Event Planner",
        content: "LuxeRide UAE provided impeccable service for our corporate gala. The chauffeurs were professional and the fleet was stunning.",
        rating: 5,
    },
    {
        name: "Mohammed Al-Fayed",
        role: "CEO, TechCorp",
        content: "The best airport transfer experience I've had in Dubai. Punctual, comfortable, and truly premium.",
        rating: 5,
    },
    {
        name: "Elena Rodriguez",
        role: "Travel Blogger",
        content: "I booked a city tour for my family and it was magical. The guide knew every hidden gem in Abu Dhabi.",
        rating: 5,
    },
];

export default function Testimonials() {
    return (
        <section className="py-20 bg-neutral-900 border-t border-white/5">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-4">
                        Client <span className="text-gold">Stories</span>
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        Hear from our distinguished clients about their experiences with LuxeRide UAE.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="glass-panel p-8 rounded-2xl relative"
                        >
                            <Quote className="absolute top-8 right-8 text-gold/20 w-10 h-10" />
                            <div className="flex gap-1 mb-6">
                                {[...Array(testimonial.rating)].map((_, i) => (
                                    <Star key={i} className="w-5 h-5 text-gold fill-gold" />
                                ))}
                            </div>
                            <p className="text-gray-300 mb-6 italic leading-relaxed">"{testimonial.content}"</p>
                            <div>
                                <h4 className="text-white font-bold">{testimonial.name}</h4>
                                <p className="text-gold text-sm">{testimonial.role}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
