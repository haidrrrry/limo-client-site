import Link from "next/link";
import { Facebook, Instagram, Twitter, Linkedin, Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-black border-t border-white/10 pt-20 pb-10">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    {/* Brand Info */}
                    <div>
                        <Link href="/" className="text-2xl font-serif font-bold text-white block mb-6">
                            LUXE<span className="text-gold">RIDE</span>
                        </Link>
                        <p className="text-gray-400 mb-6">
                            Premier luxury transportation services in the UAE. We provide safe, reliable, and comfortable rides for all occasions.
                        </p>
                        <div className="flex space-x-4">
                            <a href="#" className="text-gray-400 hover:text-gold transition-colors"><Facebook size={20} /></a>
                            <a href="#" className="text-gray-400 hover:text-gold transition-colors"><Instagram size={20} /></a>
                            <a href="#" className="text-gray-400 hover:text-gold transition-colors"><Twitter size={20} /></a>
                            <a href="#" className="text-gray-400 hover:text-gold transition-colors"><Linkedin size={20} /></a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-white font-bold mb-6">Quick Links</h4>
                        <ul className="space-y-4">
                            <li><Link href="/" className="text-gray-400 hover:text-gold transition-colors">Home</Link></li>
                            <li><Link href="#services" className="text-gray-400 hover:text-gold transition-colors">Services</Link></li>
                            <li><Link href="#fleet" className="text-gray-400 hover:text-gold transition-colors">Our Fleet</Link></li>
                            <li><Link href="#contact" className="text-gray-400 hover:text-gold transition-colors">Contact Us</Link></li>
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h4 className="text-white font-bold mb-6">Services</h4>
                        <ul className="space-y-4">
                            <li className="text-gray-400">Airport Transfers</li>
                            <li className="text-gray-400">Corporate Travel</li>
                            <li className="text-gray-400">City Tours</li>
                            <li className="text-gray-400">Wedding Limo</li>
                            <li className="text-gray-400">Hourly Charter</li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="text-white font-bold mb-6">Contact Us</h4>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3 text-gray-400">
                                <MapPin className="text-gold shrink-0" size={20} />
                                <span>Business Bay, Dubai, UAE</span>
                            </li>
                            <li className="flex items-center gap-3 text-gray-400">
                                <Phone className="text-gold shrink-0" size={20} />
                                <a href="tel:+971501234567" className="hover:text-white transition-colors">+971 50 123 4567</a>
                            </li>
                            <li className="flex items-center gap-3 text-gray-400">
                                <Mail className="text-gold shrink-0" size={20} />
                                <a href="mailto:info@luxerideuae.com" className="hover:text-white transition-colors">info@luxerideuae.com</a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-white/10 pt-8 text-center text-gray-500 text-sm">
                    <p>&copy; {new Date().getFullYear()} LuxeRide UAE. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
