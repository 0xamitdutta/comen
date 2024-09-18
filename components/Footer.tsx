import React from 'react';
import Link from 'next/link';
import { Youtube, Linkedin, Twitter, Instagram, Facebook } from 'lucide-react';
import Image from 'next/image';
import { SocialIcon } from 'react-social-icons/component'

const Footer = () => {
    return (
        <footer className="bg-blue-50 py-8">
            <div className="container mx-auto px-4">
                {/* Upper section */}
                <div className="flex flex-col md:flex-row justify-between items-center mb-6">
                    <div className="flex items-center mb-4 md:mb-0">
                        <Image src="/assets/logo.png" alt="Logo" height={50} width={50} className="mr-2" />
                        <span className="text-gray-600">Your Gateway to Personalized College Guidance</span>
                    </div>
                    <nav>
                        <ul className="flex space-x-6">
                            <li><Link href="/find-mentor" className="text-gray-600 hover:text-blue-500">Find mentor</Link></li>
                            <li><Link href="/become-mentor" className="text-gray-600 hover:text-blue-500">Become a mentor</Link></li>
                            <li><Link href="/community" className="text-gray-600 hover:text-blue-500">Community</Link></li>
                            <li><Link href="/blogs" className="text-gray-600 hover:text-blue-500">Blogs</Link></li>
                        </ul>
                    </nav>
                </div>
                <div className="flex sm:justify-center md:justify-end space-x-6 mb-4 md:mb-0">
                    <Link href="#" className="text-blue-700 hover:text-blue-800"><Linkedin size={24} /></Link>
                    <Link href="#" className="text-gray-800 hover:text-gray-900"><Twitter size={24} /></Link>
                    <Link href="#" className="text-pink-600 hover:text-pink-700"><Instagram size={24} /></Link>
                    <Link href="#" className="text-blue-600 hover:text-blue-700"><Facebook size={24} /></Link>
                </div>

                {/* Divider */}
                <div className="border-t border-gray-200 my-6"></div>

                {/* Lower section */}
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="text-gray-500 mb-4 md:mb-0">
                        Copyright 2024 · Comen
                    </div>

                    <nav>
                        <ul className="flex space-x-6">
                            <li><Link href="/contact" className="text-gray-500 hover:text-blue-500">Contact us</Link></li>
                            <li><Link href="/privacy" className="text-gray-500 hover:text-blue-500">Privacy Policy</Link></li>
                            <li><Link href="/terms" className="text-gray-500 hover:text-blue-500">Terms of use</Link></li>
                            <li><Link href="/sitemap" className="text-gray-500 hover:text-blue-500">Sitemap</Link></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </footer>
    );
};

export default Footer;