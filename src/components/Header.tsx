"use client";

import { MessageCircle } from "lucide-react";

const navLinks = [
  { href: "#services", label: "Услуги" },
  { href: "#portfolio", label: "Портфолио" },
  { href: "#testimonials", label: "Отзывы" },
  { href: "#contact", label: "Контакты" },
];

export default function Header() {
  return (
    <header className="w-full flex items-center justify-between py-4 px-4 md:px-8 bg-white/80 backdrop-blur-lg fixed top-0 left-0 z-50 shadow-sm">
      <div className="font-bold text-xl tracking-tight">LOGO</div>
      <nav className="hidden md:flex gap-6">
        {navLinks.map((link) => (
          <a key={link.href} href={link.href} className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
            {link.label}
          </a>
        ))}
      </nav>
      <a 
        href="https://wa.me/79999999999" 
        target="_blank" 
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 rounded-full px-4 py-2 shadow-md bg-green-500 hover:bg-green-600 text-white transition-colors font-medium"
      >
        <MessageCircle size={20} /> Написать в WhatsApp
      </a>
    </header>
  );
} 