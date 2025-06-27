import { CheckCircle2 } from "lucide-react";

const benefits = [
  "Скорость и соблюдение сроков",
  "Высокое качество и современные технологии",
  "Поддержка и сопровождение",
  "Индивидуальный подход к каждому клиенту",
];

export default function Benefits() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">Почему выбирают нас?</h2>
        <ul className="grid gap-6 md:grid-cols-2 max-w-3xl mx-auto">
          {benefits.map((b, i) => (
            <li key={i} className="flex items-center gap-4 bg-white rounded-2xl shadow p-6 text-lg">
              <CheckCircle2 className="text-green-500 w-7 h-7 shrink-0" />
              {b}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
} 