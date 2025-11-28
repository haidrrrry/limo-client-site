"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Phone } from "lucide-react";

export default function BookingForm() {
    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        service: "Airport Transfer",
        date: "",
        message: "",
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Construct WhatsApp message
        const text = `New Booking Request:%0A
Name: ${formData.name}%0A
Phone: ${formData.phone}%0A
Service: ${formData.service}%0A
Date: ${formData.date}%0A
Message: ${formData.message}`;

        window.open(`https://wa.me/971501234567?text=${text}`, "_blank");
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <section id="contact" className="py-20 relative overflow-hidden">
            {/* Background with overlay */}
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1494976388531-d1058494cdd8?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center">
                <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-4xl mx-auto bg-neutral-900/80 backdrop-blur-md border border-white/10 rounded-3xl p-8 md:p-12">
                    <div className="text-center mb-10">
                        <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-4">
                            Book Your <span className="text-gold">Ride</span>
                        </h2>
                        <p className="text-gray-400">
                            Fill out the form below to request a booking, or contact us directly via WhatsApp.
                        </p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-400 mb-2">Full Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    required
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-gold focus:ring-1 focus:ring-gold outline-none transition-colors"
                                    placeholder="John Doe"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-400 mb-2">Phone Number</label>
                                <input
                                    type="tel"
                                    name="phone"
                                    required
                                    value={formData.phone}
                                    onChange={handleChange}
                                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-gold focus:ring-1 focus:ring-gold outline-none transition-colors"
                                    placeholder="+971 50 000 0000"
                                />
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-400 mb-2">Service Type</label>
                                <select
                                    name="service"
                                    value={formData.service}
                                    onChange={handleChange}
                                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-gold focus:ring-1 focus:ring-gold outline-none transition-colors [&>option]:bg-neutral-900"
                                >
                                    <option>Airport Transfer</option>
                                    <option>Corporate Travel</option>
                                    <option>City Tour</option>
                                    <option>Event Transportation</option>
                                    <option>Hourly Charter</option>
                                </select>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-400 mb-2">Date & Time</label>
                                <input
                                    type="datetime-local"
                                    name="date"
                                    required
                                    value={formData.date}
                                    onChange={handleChange}
                                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-gold focus:ring-1 focus:ring-gold outline-none transition-colors [color-scheme:dark]"
                                />
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-400 mb-2">Additional Requirements</label>
                            <textarea
                                name="message"
                                rows={4}
                                value={formData.message}
                                onChange={handleChange}
                                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-gold focus:ring-1 focus:ring-gold outline-none transition-colors resize-none"
                                placeholder="Any specific requests or details..."
                            />
                        </div>

                        <div className="flex flex-col md:flex-row gap-4 pt-4">
                            <button
                                type="submit"
                                className="flex-1 bg-gold hover:bg-gold-500 text-black font-bold py-4 rounded-xl transition-colors flex items-center justify-center gap-2"
                            >
                                <Send size={20} />
                                Request Booking
                            </button>
                            <a
                                href="tel:+971501234567"
                                className="flex-1 bg-white/10 hover:bg-white/20 border border-white/10 text-white font-bold py-4 rounded-xl transition-colors flex items-center justify-center gap-2"
                            >
                                <Phone size={20} />
                                Call Us Now
                            </a>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
}
