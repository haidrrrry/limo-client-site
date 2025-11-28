"use client";

import { motion } from "framer-motion";
import { Plane, Building2, MapPin, Calendar, PartyPopper, Briefcase } from "lucide-react";

const services = [
    {
        icon: Plane,
        title: "Airport Transfers",
        description: "Seamless pickups and drop-offs at all major UAE airports. Flight tracking included.",
    },
    {
        icon: Briefcase,
        title: "Corporate Travel",
        description: "Professional transport for meetings, roadshows, and business events.",
    },
    {
        icon: MapPin,
        title: "City Tours",
        description: "Explore Abu Dhabi and Dubai in comfort with our knowledgeable chauffeurs.",
    },
    {
        icon: PartyPopper,
        title: "Events & Parties",
        description: "Arrive in style at weddings, galas, and private celebrations.",
    },
    {
        icon: Building2,
        title: "Hotel Transfers",
        description: "Luxury transfers between hotels and any destination in the UAE.",
    },
    {
        icon: Calendar,
        title: "Hourly Charter",
        description: "Flexible booking for as long as you need, with a dedicated chauffeur.",
    },
];

export default function ServiceGrid() {
    return (
        <section id="services" className="py-20 bg-neutral-900">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-4">
                        Our Premium <span className="text-gold">Services</span>
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        Tailored transportation solutions designed to meet your every need with elegance and precision.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="glass-panel p-8 rounded-2xl hover:border-gold/50 transition-colors group"
                        >
                            <div className="w-14 h-14 bg-gold/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-gold/20 transition-colors">
                                <service.icon className="text-gold w-7 h-7" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                            <p className="text-gray-400 leading-relaxed">{service.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
