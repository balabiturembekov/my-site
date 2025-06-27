"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, ArrowRight, Sparkles, Clock, Star } from "lucide-react";
import { cn } from "@/lib/utils";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";

interface ServiceCardProps {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
  features: readonly string[];
  className?: string;
  badge?: string;
  duration?: string;
  rating?: number;
}

export function ServiceCard({ 
  icon: Icon, 
  title, 
  description, 
  features, 
  className,
  badge,
  duration,
  rating
}: ServiceCardProps) {
  const [open, setOpen] = useState(false);
  
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        whileHover={{ 
          y: -8,
          rotateX: 2,
          rotateY: 2,
        }}
        className="group perspective-1000"
      >
        <Card className={cn(
          "relative overflow-hidden border-0 bg-gradient-to-br from-white via-gray-50/50 to-white shadow-xl hover:shadow-2xl transition-all duration-500",
          "backdrop-blur-sm hover:backdrop-blur-md transform-gpu",
          "before:absolute before:inset-0 before:bg-gradient-to-br before:from-blue-500/5 before:via-cyan-500/5 before:to-purple-500/5 before:opacity-0 before:group-hover:opacity-100 before:transition-opacity before:duration-500",
          "after:absolute after:inset-0 after:bg-gradient-to-br after:from-blue-500/10 after:to-cyan-500/10 after:opacity-0 after:group-hover:opacity-100 after:transition-opacity after:duration-700",
          className
        )}>
          {/* Badge */}
          {badge && (
            <div className="absolute top-4 right-4 z-10">
              <Badge className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white border-0 shadow-lg">
                <Sparkles className="w-3 h-3 mr-1" />
                {badge}
              </Badge>
            </div>
          )}
          
          <CardHeader className="pb-4 relative z-10">
            <div className="flex items-center gap-3 mb-3">
              <div className="relative">
                <div className="p-3 rounded-xl bg-gradient-to-br from-blue-500 via-blue-600 to-cyan-600 text-white shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-6 h-6" />
                </div>
                {/* Glow effect */}
                <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-blue-400 to-cyan-500 blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-300" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                  {title}
                </h3>
                {/* Meta info */}
                <div className="flex items-center gap-4 mt-1">
                  {duration && (
                    <div className="flex items-center gap-1 text-xs text-gray-500">
                      <Clock className="w-3 h-3" />
                      {duration}
                    </div>
                  )}
                  {rating && (
                    <div className="flex items-center gap-1 text-xs text-gray-500">
                      <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                      {rating}
                    </div>
                  )}
                </div>
              </div>
            </div>
            <p className="text-gray-600 leading-relaxed text-sm">
              {description}
            </p>
          </CardHeader>
          
          <CardContent className="space-y-4 relative z-10">
            <div className="space-y-2">
              {features.slice(0, 3).map((feature, index) => (
                <motion.div 
                  key={index} 
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="flex items-center gap-2 text-sm text-gray-600"
                >
                  <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0" />
                  <span>{feature}</span>
                </motion.div>
              ))}
              {features.length > 3 && (
                <div className="text-xs text-gray-500 pt-1">
                  +{features.length - 3} дополнительных возможностей
                </div>
              )}
            </div>
            
            <div className="pt-4 border-t border-gray-100">
              <button
                className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium text-sm group/btn transition-all duration-300 hover:gap-3"
                onClick={() => setOpen(true)}
              >
                Узнать больше
                <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
              </button>
            </div>
          </CardContent>
          
          {/* Animated background elements */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-500/5 to-transparent rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700" />
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-cyan-500/5 to-transparent rounded-full blur-2xl group-hover:scale-125 transition-transform duration-700" />
          </div>
        </Card>
      </motion.div>
      
      <AnimatePresence>
        {open && (
          <Dialog open={open} onOpenChange={setOpen}>
            <DialogContent className="max-w-2xl">
              <DialogHeader>
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-600 text-white">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <DialogTitle className="text-2xl font-bold">{title}</DialogTitle>
                    {badge && (
                      <Badge className="mt-1 bg-gradient-to-r from-blue-600 to-cyan-600 text-white border-0">
                        {badge}
                      </Badge>
                    )}
                  </div>
                </div>
                <DialogDescription className="text-base">{description}</DialogDescription>
              </DialogHeader>
              
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-lg mb-3 text-gray-900">Что включено:</h4>
                  <ul className="space-y-2">
                    {features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-gray-600">
                        <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                {duration && (
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <Clock className="w-4 h-4" />
                    <span>Срок выполнения: {duration}</span>
                  </div>
                )}
                
                <div className="flex gap-3 pt-4">
                  <button
                    className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-xl transition-colors"
                    onClick={() => setOpen(false)}
                  >
                    Закрыть
                  </button>
                  <button
                    className="flex-1 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-semibold py-3 rounded-xl transition-all duration-300 hover:scale-105"
                    onClick={() => {
                      setOpen(false);
                      // Здесь можно добавить переход к форме заказа
                    }}
                  >
                    Заказать услугу
                  </button>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        )}
      </AnimatePresence>
    </>
  );
} 