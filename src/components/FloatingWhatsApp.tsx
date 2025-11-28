"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

export default function FloatingWhatsApp() {
    return (
        <motion.a
            href="https://wa.me/971501234567"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 1, type: "spring" }}
            className="fixed bottom-8 right-8 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:bg-[#20ba5a] transition-colors flex items-center justify-center group"
        >
            <MessageCircle size={32} className="fill-white text-white" />
            <span className="absolute right-full mr-4 bg-white text-black px-4 py-2 rounded-lg text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-xl">
                Chat with us!
            </span>
        </motion.a>
    );
}
