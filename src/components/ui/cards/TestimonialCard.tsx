"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Quote } from "lucide-react";
import { cn } from "@/lib/utils";
import Image from "next/image";

interface TestimonialCardProps {
  name: string;
  role: string;
  company: string;
  text: string;
  avatar?: string;
  rating: number;
  className?: string;
}

export function TestimonialCard({ name, role, company, text, avatar, rating, className }: TestimonialCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -2 }}
    >
      <Card className={cn(
        "group relative overflow-hidden border-0 bg-gradient-to-br from-white to-gray-50/50 shadow-lg hover:shadow-xl transition-all duration-300",
        "backdrop-blur-sm hover:backdrop-blur-md",
        className
      )}>
        <CardContent className="p-6">
          {/* Quote Icon */}
          <div className="absolute top-4 right-4 text-blue-500/20 group-hover:text-blue-500/30 transition-colors">
            <Quote className="w-8 h-8" />
          </div>
          
          {/* Rating */}
          <div className="flex items-center gap-1 mb-4">
            {Array.from({ length: rating }).map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
            ))}
          </div>
          
          {/* Text */}
          <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
            &ldquo;{text}&rdquo;
          </p>
          
          {/* Author */}
          <div className="flex items-center gap-3">
            <div className="relative w-12 h-12 mr-4">
              {avatar ? (
                <Image src={avatar} alt={name} fill className="rounded-full object-cover" />
              ) : (
                <span className="flex items-center justify-center w-full h-full text-lg font-bold bg-gray-200 rounded-full">{name.charAt(0).toUpperCase()}</span>
              )}
            </div>
            <div className="flex-1">
              <div className="font-semibold text-gray-900">{name}</div>
              <div className="text-sm text-gray-600">{role}</div>
              <Badge variant="outline" className="text-xs mt-1">
                {company}
              </Badge>
            </div>
          </div>
        </CardContent>
        
        {/* Градиентный фон */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
      </Card>
    </motion.div>
  );
} 