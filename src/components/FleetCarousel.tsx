"use client";

import { motion } from "framer-motion";
import { Users, Briefcase } from "lucide-react";

const fleet = [ // Full fleet collection - Updated 2025
    {
        name: "Mercedes-Benz S-Class",
        category: "Luxury Sedan",
        image: "/images/s-class.jpg",
        passengers: 3,
        luggage: 2,
    },
    {
        name: "Rolls Royce Cullinan",
        category: "Ultra Luxury SUV",
        image: "/images/cullinan.jpg",
        passengers: 4,
        luggage: 4,
    },
    {
        name: "Mercedes-Maybach S680",
        category: "Ultra Luxury Sedan",
        image: "/images/maybach.jpg",
        passengers: 3,
        luggage: 3,
    },
    {
        name: "GMC Yukon Denali",
        category: "Luxury SUV",
        image: "/images/yukon.jpg",
        passengers: 7,
        luggage: 6,
    },
    {
        name: "Cadillac Escalade",
        category: "Luxury SUV",
        image: "/images/escalade.jpg",
        passengers: 6,
        luggage: 5,
];

export default function FleetCarousel() {
    return (
        <section id="fleet" className="py-20 bg-black">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-4">
                        Our Exquisite <span className="text-gold">Fleet</span>
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        Choose from our collection of high-end vehicles, meticulously maintained for your comfort and safety.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {fleet.map((car, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group relative overflow-hidden rounded-2xl bg-neutral-900 border border-white/10 hover:border-gold/50 transition-colors"
                        >
                            <div className="aspect-[4/3] overflow-hidden">
                                <img
                                    src={car.image}
                                    alt={car.name}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                            </div>

                            <div className="p-6">
                                <div className="flex justify-between items-start mb-2">
                                    <span className="text-xs font-medium text-gold uppercase tracking-wider bg-gold/10 px-2 py-1 rounded">
                                        {car.category}
                                    </span>
                                </div>

                                <h3 className="text-lg font-bold text-white mb-4 group-hover:text-gold transition-colors">{car.name}</h3>

                                <div className="flex items-center gap-4 text-gray-400 text-sm mb-6">
                                    <div className="flex items-center gap-1.5">
                                        <Users size={16} className="text-gold" />
                                        <span>{car.passengers} Pax</span>
                                    </div>
                                    <div className="flex items-center gap-1.5">
                                        <Briefcase size={16} className="text-gold" />
                                        <span>{car.luggage} Bags</span>
                                    </div>
                                </div>

                                <a
                                    href={`https://wa.me/971501234567?text=I'm interested in booking the ${car.name}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="block w-full py-3 text-center bg-white/5 hover:bg-gold hover:text-black border border-white/10 hover:border-gold rounded-lg transition-all font-medium text-white"
                                >
                                    Book Now
                                </a>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
