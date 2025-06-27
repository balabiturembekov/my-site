import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  {
    q: "Сколько стоит разработка сайта?",
    a: "Стоимость зависит от задач и начинается от 30 000 руб. Точный расчет — после обсуждения проекта.",
  },
  {
    q: "Сколько времени занимает создание сайта?",
    a: "Обычно от 7 до 21 дня в зависимости от сложности и объема работ.",
  },
  {
    q: "Какие технологии используете?",
    a: "React, Next.js, TailwindCSS, AI-интеграции, современные API и инструменты.",
  },
  {
    q: "Можно ли заказать только бота или автоматизацию?",
    a: "Да, мы реализуем отдельные задачи: чат-боты, интеграции, автоматизацию.",
  },
];

export default function FAQ() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 max-w-2xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">FAQ</h2>
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((f, i) => (
            <AccordionItem value={"item-" + i} key={i}>
              <AccordionTrigger>{f.q}</AccordionTrigger>
              <AccordionContent>{f.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
} 