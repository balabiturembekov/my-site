"use client";

import { Card, CardContent } from "@/components/ui/card";
import { useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Анна К.",
    text: "Очень довольна работой! Всё быстро, качественно и с заботой о деталях.",
    company: "Beauty Studio",
  },
  {
    name: "Игорь П.",
    text: "Сайт и бот сделали под ключ, результат превзошёл ожидания!",
    company: "TechnoMarket",
  },
  {
    name: "Мария С.",
    text: "AI-автоматизация помогла увеличить продажи. Рекомендую!",
    company: "Online School",
  },
];

export default function Testimonials() {
  const [idx, setIdx] = useState(0);
  const prev = () => setIdx((i) => (i === 0 ? testimonials.length - 1 : i - 1));
  const next = () => setIdx((i) => (i === testimonials.length - 1 ? 0 : i + 1));
  const t = testimonials[idx];
  return (
    <section id="testimonials" className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">Отзывы клиентов</h2>
        <div className="flex items-center justify-center gap-4">
          <button onClick={prev} className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition">
            <ChevronLeft />
          </button>
          <Card className="max-w-xl w-full rounded-2xl shadow-lg p-6 flex flex-col items-center text-center">
            <Quote className="w-8 h-8 text-blue-600 mb-2" />
            <CardContent>
              <div className="text-lg mb-2">{t.text}</div>
              <div className="font-semibold">{t.name}</div>
              <div className="text-gray-500 text-sm">{t.company}</div>
            </CardContent>
          </Card>
          <button onClick={next} className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition">
            <ChevronRight />
          </button>
        </div>
      </div>
    </section>
  );
} 