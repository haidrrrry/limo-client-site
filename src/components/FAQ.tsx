"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const faqs = [
    {
        question: "How do I book a chauffeur service?",
        answer: "You can book directly through our website using the booking form, or for immediate assistance, click the WhatsApp button to chat with our team. We are available 24/7.",
    },
    {
        question: "What types of vehicles do you offer?",
        answer: "Our fleet includes luxury sedans (Mercedes S-Class, BMW 7 Series), SUVs (Cadillac Escalade, GMC Yukon), and luxury vans (Mercedes V-Class). We also offer Rolls Royce and Bentley upon request.",
    },
    {
        question: "Are your prices all-inclusive?",
        answer: "Yes, our quoted prices include fuel, Salik (toll charges), and chauffeur services. There are no hidden fees.",
    },
    {
        question: "Can I book for an hourly duration?",
        answer: "Absolutely. We offer flexible hourly charter services, perfect for business meetings, city tours, or special events where you need a driver on standby.",
    },
    {
        question: "Do you provide airport meet and greet?",
        answer: "Yes, our chauffeur will meet you at the arrivals hall with a personalized name board and assist you with your luggage to the vehicle.",
    },
];

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section className="py-20 bg-neutral-900">
            <div className="container mx-auto px-6 max-w-4xl">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-4">
                        Frequently Asked <span className="text-gold">Questions</span>
                    </h2>
                    <p className="text-gray-400">
                        Everything you need to know about our premium services.
                    </p>
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className="border border-white/10 rounded-xl overflow-hidden bg-white/5"
                        >
                            <button
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                className="w-full flex items-center justify-between p-6 text-left hover:bg-white/5 transition-colors"
                            >
                                <span className="text-lg font-medium text-white">{faq.question}</span>
                                {openIndex === index ? (
                                    <Minus className="text-gold flex-shrink-0" />
                                ) : (
                                    <Plus className="text-gold flex-shrink-0" />
                                )}
                            </button>
                            <AnimatePresence>
                                {openIndex === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <div className="p-6 pt-0 text-gray-400 leading-relaxed border-t border-white/5">
                                            {faq.answer}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
