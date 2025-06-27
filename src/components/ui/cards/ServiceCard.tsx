"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface ServiceCardProps {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
  features: readonly string[];
  className?: string;
}

export function ServiceCard({ icon: Icon, title, description, features, className }: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -5 }}
    >
      <Card className={cn(
        "group relative overflow-hidden border-0 bg-gradient-to-br from-white to-gray-50/50 shadow-lg hover:shadow-2xl transition-all duration-300",
        "backdrop-blur-sm hover:backdrop-blur-md",
        className
      )}>
        <CardHeader className="pb-4">
          <div className="flex items-center gap-3 mb-2">
            <div className="p-3 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 text-white shadow-lg group-hover:scale-110 transition-transform duration-300">
              <Icon className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
              {title}
            </h3>
          </div>
          <p className="text-gray-600 leading-relaxed">
            {description}
          </p>
        </CardHeader>
        
        <CardContent className="space-y-4">
          <div className="space-y-2">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center gap-2 text-sm text-gray-600">
                <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0" />
                <span>{feature}</span>
              </div>
            ))}
          </div>
          
          <div className="pt-4 border-t border-gray-100">
            <button className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium text-sm group/btn transition-colors">
              Узнать больше
              <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
            </button>
          </div>
        </CardContent>
        
        {/* Градиентный фон */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
      </Card>
    </motion.div>
  );
} 