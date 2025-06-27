import { Instagram, Mail, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full py-8 bg-white border-t mt-12">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="font-bold text-lg">LOGO</div>
        <nav className="flex gap-6">
          <a href="#services" className="hover:underline">Услуги</a>
          <a href="#portfolio" className="hover:underline">Портфолио</a>
          <a href="#testimonials" className="hover:underline">Отзывы</a>
          <a href="#contact" className="hover:underline">Контакты</a>
        </nav>
        <div className="flex gap-4">
          <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600"><Instagram /></a>
          <a href="mailto:info@example.com" className="hover:text-blue-600"><Mail /></a>
          <a href="tel:+79999999999" className="hover:text-blue-600"><Phone /></a>
        </div>
      </div>
      <div className="text-center text-gray-400 text-sm mt-4">© 2025 Digital Studio. Все права защищены.</div>
    </footer>
  );
} 