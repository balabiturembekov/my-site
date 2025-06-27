"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { ExternalLink, Eye, TrendingUp, Zap, Star, Code, BarChart3, Calendar, Award, Target, Clock, Users } from "lucide-react";
import { cn } from "@/lib/utils";
import Image from "next/image";

interface PortfolioCardProps {
  title: string;
  description: string;
  category: string;
  image: string;
  link?: string;
  technologies: string[];
  stats: Record<string, string>;
  status: string;
  completionDate: string;
  client: string;
  details?: {
    duration?: string;
    team?: string;
  };
  className?: string;
}

export function PortfolioCard({ 
  title, 
  description, 
  category, 
  image, 
  link,
  technologies = [],
  stats,
  className,
  status = "Завершен",
  completionDate,
  client,
  details
}: PortfolioCardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Завершен": return "from-green-500 to-emerald-600";
      case "В разработке": return "from-blue-500 to-cyan-600";
      case "Планируется": return "from-orange-500 to-amber-600";
      default: return "from-gray-500 to-gray-600";
    }
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        whileHover={{ 
          y: -12,
          rotateX: 3,
          rotateY: 3,
        }}
        className="group perspective-1000"
      >
        <Card className={cn(
          "relative overflow-hidden border-0 bg-white/90 backdrop-blur-sm shadow-xl hover:shadow-2xl transition-all duration-500",
          "transform-gpu",
          "before:absolute before:inset-0 before:bg-gradient-to-br before:from-blue-500/5 before:via-cyan-500/5 before:to-purple-500/5 before:opacity-0 before:group-hover:opacity-100 before:transition-opacity before:duration-500",
          "after:absolute after:inset-0 after:bg-gradient-to-br after:from-blue-500/10 after:to-cyan-500/10 after:opacity-0 after:group-hover:opacity-100 after:transition-opacity after:duration-700",
          className
        )}>
          {/* Status Badge */}
          <div className="absolute top-4 right-4 z-20">
            <Badge className={cn(
              "bg-gradient-to-r text-white border-0 shadow-lg backdrop-blur-sm",
              getStatusColor(status)
            )}>
              {status === "Завершен" && <Award className="w-3 h-3 mr-1" />}
              {status === "В разработке" && <Target className="w-3 h-3 mr-1" />}
              {status === "Планируется" && <Calendar className="w-3 h-3 mr-1" />}
              {status}
            </Badge>
          </div>

          {/* Image Container */}
          <div className="relative overflow-hidden">
            <div className="relative w-full h-56">
              <Image 
                src={image.endsWith('.png') ? image.replace('.png', '.webp') : image} 
                alt={title} 
                fill 
                sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 400px" 
                className="object-cover transition-transform duration-700 group-hover:scale-110" 
                priority={false}
                loading="lazy"
                placeholder="blur"
                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                onError={(e) => { if (image.endsWith('.png')) e.currentTarget.src = image; }}
              />
              
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="flex items-center gap-2">
                    <Button
                      size="sm"
                      variant="secondary"
                      className="bg-white/20 backdrop-blur-sm text-white hover:bg-white/30 border-0 transition-all duration-300 hover:scale-105"
                      onClick={() => setIsModalOpen(true)}
                    >
                      <Eye className="w-4 h-4 mr-1" />
                      Детали
                    </Button>
                    <Button
                      size="sm"
                      variant="secondary"
                      asChild
                      className="bg-white/20 backdrop-blur-sm text-white hover:bg-white/30 border-0 transition-all duration-300 hover:scale-105"
                    >
                      <a href={link} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4 mr-1" />
                        Сайт
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
              
              {/* Shine effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
            </div>
            
            {/* Category Badge */}
            <div className="absolute top-4 left-4 z-10">
              <Badge className="bg-blue-600/90 backdrop-blur-sm text-white border-0 shadow-lg">
                {category}
              </Badge>
            </div>
          </div>
          
          <CardHeader className="pb-3 relative z-10">
            <div className="space-y-3">
              <div>
                <h3 className="font-bold text-xl text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                  {title}
                </h3>
                {client && (
                  <p className="text-sm text-gray-500 mt-1">Клиент: {client}</p>
                )}
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">
                {description}
              </p>
              
              {/* Technologies */}
              {technologies.length > 0 && (
                <div className="flex flex-wrap gap-1">
                  {technologies.slice(0, 3).map((tech, index) => (
                    <Badge key={index} variant="outline" className="text-xs bg-white/50 backdrop-blur-sm">
                      {tech}
                    </Badge>
                  ))}
                  {technologies.length > 3 && (
                    <Badge variant="outline" className="text-xs bg-white/50 backdrop-blur-sm">
                      +{technologies.length - 3}
                    </Badge>
                  )}
                </div>
              )}
            </div>
          </CardHeader>
          
          <CardContent className="pt-0 relative z-10">
            <div className="space-y-3">
              {/* Stats */}
              <div className="flex items-center justify-between text-sm text-gray-500">
                {stats?.conversion && (
                  <div className="flex items-center gap-1">
                    <TrendingUp className="w-4 h-4 text-green-500" />
                    <span>{stats.conversion}</span>
                  </div>
                )}
                {stats?.loadTime && (
                  <div className="flex items-center gap-1">
                    <Zap className="w-4 h-4 text-blue-500" />
                    <span>{stats.loadTime}</span>
                  </div>
                )}
                {completionDate && (
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4 text-purple-500" />
                    <span>{completionDate}</span>
                  </div>
                )}
              </div>
              
              {/* Action Button */}
              <div className="flex items-center justify-between pt-2 border-t border-gray-100">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setIsModalOpen(true)}
                  className="text-blue-600 hover:text-blue-700 hover:bg-blue-50 transition-all duration-300"
                >
                  Подробнее
                </Button>
                
                <div className="flex items-center gap-1">
                  <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  <span className="text-sm font-medium">4.9</span>
                </div>
              </div>
            </div>
          </CardContent>
          
          {/* Animated background elements */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-500/5 to-transparent rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700" />
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-cyan-500/5 to-transparent rounded-full blur-2xl group-hover:scale-125 transition-transform duration-700" />
          </div>
        </Card>
      </motion.div>

      {/* Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
            <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
              <DialogHeader>
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <DialogTitle className="text-2xl font-bold">{title}</DialogTitle>
                    {client && (
                      <p className="text-gray-600 mt-1">Клиент: {client}</p>
                    )}
                    <DialogDescription className="text-base mt-2">{description}</DialogDescription>
                  </div>
                  <div className="flex gap-2">
                    <Badge className={cn(
                      "bg-gradient-to-r text-white border-0",
                      getStatusColor(status)
                    )}>
                      {status}
                    </Badge>
                    <Badge variant="outline">{category}</Badge>
                  </div>
                </div>
              </DialogHeader>
              
              <div className="space-y-6">
                {/* Image */}
                <div className="relative h-64 rounded-lg overflow-hidden">
                  <Image 
                    src={image.endsWith('.png') ? image.replace('.png', '.webp') : image} 
                    alt={title} 
                    fill 
                    sizes="(max-width: 768px) 100vw, 800px"
                    className="object-cover" 
                    priority={false}
                    loading="lazy"
                    onError={(e) => { if (image.endsWith('.png')) e.currentTarget.src = image; }}
                  />
                </div>
                
                {/* Project Details */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-lg mb-3 text-gray-900">Описание проекта</h4>
                    <p className="text-gray-600 leading-relaxed">{description}</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-lg mb-3 text-gray-900">Детали</h4>
                    <div className="space-y-2 text-sm">
                      {completionDate && (
                        <div className="flex items-center gap-2 text-gray-600">
                          <Calendar className="w-4 h-4" />
                          <span>Завершен: {completionDate}</span>
                        </div>
                      )}
                      {stats?.conversion && (
                        <div className="flex items-center gap-2 text-gray-600">
                          <TrendingUp className="w-4 h-4" />
                          <span>Конверсия: {stats.conversion}</span>
                        </div>
                      )}
                      {stats?.loadTime && (
                        <div className="flex items-center gap-2 text-gray-600">
                          <Zap className="w-4 h-4" />
                          <span>Загрузка: {stats.loadTime}</span>
                        </div>
                      )}
                      {details?.duration && (
                        <div className="flex items-center gap-2 text-gray-600">
                          <Clock className="w-4 h-4" />
                          <span>Длительность: {String(details.duration)}</span>
                        </div>
                      )}
                      {details?.team && (
                        <div className="flex items-center gap-2 text-gray-600">
                          <Users className="w-4 h-4" />
                          <span>Команда: {String(details.team)}</span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
                
                {/* Technologies */}
                {technologies.length > 0 && (
                  <div>
                    <h4 className="font-semibold text-lg mb-3 flex items-center gap-2">
                      <Code className="w-5 h-5" />
                      Технологии
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {technologies.map((tech, index) => (
                        <Badge key={index} variant="secondary" className="bg-blue-50 text-blue-700">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                )}
                
                {/* Stats Grid */}
                {stats && Object.keys(stats).length > 0 && (
                  <div>
                    <h4 className="font-semibold text-lg mb-3 flex items-center gap-2">
                      <BarChart3 className="w-5 h-5" />
                      Результаты
                    </h4>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      {Object.entries(stats).map(([key, value]) => (
                        <div key={key} className="bg-gray-50 rounded-lg p-3 text-center">
                          <div className="text-lg font-bold text-gray-900">{value as string}</div>
                          <div className="text-xs text-gray-500 capitalize">{key}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
                
                {/* Action Buttons */}
                <div className="flex gap-3 pt-4">
                  <Button
                    className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-xl transition-colors"
                    onClick={() => setIsModalOpen(false)}
                  >
                    Закрыть
                  </Button>
                  <Button
                    asChild
                    className="flex-1 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-semibold py-3 rounded-xl transition-all duration-300 hover:scale-105"
                  >
                    <a href={link} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Открыть сайт
                    </a>
                  </Button>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        )}
      </AnimatePresence>
    </>
  );
} 