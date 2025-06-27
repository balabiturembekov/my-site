import { MessageCircle } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-16">
      <div className="container mx-auto px-4 max-w-xl text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-8">Связаться с нами</h2>
        <a 
          href="https://wa.me/79999999999" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="inline-flex items-center gap-2 rounded-full px-8 py-4 text-lg font-medium shadow-lg bg-green-500 hover:bg-green-600 text-white transition-colors mb-6"
        >
          <MessageCircle size={22} /> Написать в WhatsApp
        </a>
        <form className="flex flex-col gap-4 bg-white rounded-2xl shadow p-6">
          <input type="text" placeholder="Ваше имя" className="border rounded px-4 py-2" disabled />
          <input type="email" placeholder="Email" className="border rounded px-4 py-2" disabled />
          <textarea placeholder="Сообщение" className="border rounded px-4 py-2" rows={4} disabled />
          <button 
            type="button" 
            disabled 
            className="inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium bg-gray-300 text-gray-500 cursor-not-allowed"
          >
            Отправить (заглушка)
          </button>
        </form>
      </div>
    </section>
  );
} 