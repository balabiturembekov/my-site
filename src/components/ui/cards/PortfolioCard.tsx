"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Eye } from "lucide-react";
import { cn } from "@/lib/utils";
import Image from "next/image";

interface PortfolioCardProps {
  title: string;
  description: string;
  category: string;
  image: string;
  link: string;
  className?: string;
}

export function PortfolioCard({ title, description, category, image, link, className }: PortfolioCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -5 }}
    >
      <Card className={cn(
        "group relative overflow-hidden border-0 bg-white shadow-lg hover:shadow-2xl transition-all duration-300",
        "backdrop-blur-sm hover:backdrop-blur-md",
        className
      )}>
        <div className="relative overflow-hidden">
          <div className="relative w-full h-48 mb-4">
            <Image src={image} alt={title} fill className="object-cover rounded-lg" />
          </div>
          
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="absolute bottom-4 left-4 right-4">
              <div className="flex items-center gap-2">
                <button className="p-2 rounded-full bg-white/20 backdrop-blur-sm text-white hover:bg-white/30 transition-colors">
                  <Eye className="w-4 h-4" />
                </button>
                <a 
                  href={link}
                  className="p-2 rounded-full bg-white/20 backdrop-blur-sm text-white hover:bg-white/30 transition-colors"
                >
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <CardHeader className="pb-3">
          <div className="flex items-start justify-between gap-2">
            <div className="flex-1">
              <h3 className="font-bold text-lg text-gray-900 group-hover:text-blue-600 transition-colors mb-1">
                {title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {description}
              </p>
            </div>
          </div>
        </CardHeader>
        
        <CardContent className="pt-0">
          <div className="flex items-center justify-between">
            <Badge variant="secondary" className="text-xs">
              {category}
            </Badge>
            <button className="text-blue-600 hover:text-blue-700 text-sm font-medium transition-colors">
              Подробнее
            </button>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
} 