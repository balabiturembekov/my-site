"use client";

import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  Upload, 
  FileText, 
  Brain, 
  Zap, 
  Target, 
  Sparkles,
  CheckCircle,
  Download,
  Share2
} from "lucide-react";

interface AnalysisResult {
  id: string;
  category: string;
  score: number;
  recommendations: string[];
  priority: 'high' | 'medium' | 'low';
}

interface ProjectMetrics {
  complexity: number;
  estimatedTime: string;
  estimatedCost: string;
  riskLevel: 'low' | 'medium' | 'high';
  technologies: string[];
}

export function AIProjectAnalyzer() {
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysisComplete, setAnalysisComplete] = useState(false);
  const [dragActive, setDragActive] = useState(false);
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [analysisResults, setAnalysisResults] = useState<AnalysisResult[]>([]);
  const [projectMetrics, setProjectMetrics] = useState<ProjectMetrics | null>(null);
  const [currentStep, setCurrentStep] = useState(0);
  const [isClient, setIsClient] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const dropZoneRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFile(e.dataTransfer.files[0]);
    }
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      handleFile(e.target.files[0]);
    }
  };

  const handleFile = (file: File) => {
    setUploadedFile(file);
    startAnalysis();
  };

  const startAnalysis = () => {
    setIsAnalyzing(true);
    setCurrentStep(0);
    
    // Симуляция процесса анализа
    const steps = [
      { name: "Загрузка файла", duration: 1000 },
      { name: "Анализ структуры", duration: 2000 },
      { name: "Оценка сложности", duration: 1500 },
      { name: "Подбор технологий", duration: 1800 },
      { name: "Расчет стоимости", duration: 1200 },
      { name: "Генерация отчета", duration: 1000 }
    ];

    let currentStepIndex = 0;
    
    const processStep = () => {
      if (currentStepIndex < steps.length) {
        setCurrentStep(currentStepIndex);
        setTimeout(() => {
          currentStepIndex++;
          processStep();
        }, steps[currentStepIndex].duration);
      } else {
        completeAnalysis();
      }
    };
    
    processStep();
  };

  const completeAnalysis = () => {
    setIsAnalyzing(false);
    setAnalysisComplete(true);
    
    // Генерируем результаты анализа
    const results: AnalysisResult[] = [
      {
        id: '1',
        category: 'Дизайн и UX',
        score: 85,
        recommendations: [
          'Добавить адаптивную верстку для мобильных устройств',
          'Улучшить контрастность текста',
          'Оптимизировать навигацию'
        ],
        priority: 'high'
      },
      {
        id: '2',
        category: 'Производительность',
        score: 72,
        recommendations: [
          'Оптимизировать изображения',
          'Внедрить кэширование',
          'Минимизировать CSS и JS'
        ],
        priority: 'medium'
      },
      {
        id: '3',
        category: 'SEO',
        score: 68,
        recommendations: [
          'Добавить мета-теги',
          'Оптимизировать заголовки',
          'Улучшить структуру URL'
        ],
        priority: 'medium'
      },
      {
        id: '4',
        category: 'Безопасность',
        score: 91,
        recommendations: [
          'Обновить SSL сертификат',
          'Добавить защиту от XSS',
          'Внедрить HTTPS'
        ],
        priority: 'low'
      },
      {
        id: '5',
        category: 'Функциональность',
        score: 78,
        recommendations: [
          'Добавить форму обратной связи',
          'Интегрировать аналитику',
          'Улучшить поиск'
        ],
        priority: 'high'
      }
    ];

    const metrics: ProjectMetrics = {
      complexity: 7.5,
      estimatedTime: '4-6 недель',
      estimatedCost: '150,000 - 250,000₽',
      riskLevel: 'medium',
      technologies: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Node.js']
    };

    setAnalysisResults(results);
    setProjectMetrics(metrics);
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'text-red-500 bg-red-100';
      case 'medium': return 'text-yellow-500 bg-yellow-100';
      case 'low': return 'text-green-500 bg-green-100';
      default: return 'text-gray-500 bg-gray-100';
    }
  };

  const getScoreColor = (score: number) => {
    if (score >= 80) return 'text-green-600';
    if (score >= 60) return 'text-yellow-600';
    return 'text-red-600';
  };

  if (!isClient) {
    return (
      <div className="w-full max-w-6xl mx-auto p-6">
        <Card className="bg-gradient-to-br from-gray-900 to-gray-800 border-0 text-white">
          <CardHeader>
            <CardTitle className="text-3xl font-bold text-center mb-4">
              AI Анализатор проектов
            </CardTitle>
            <p className="text-center text-gray-300">Загрузка...</p>
          </CardHeader>
        </Card>
      </div>
    );
  }

  return (
    <div className="w-full max-w-6xl mx-auto p-6">
      <Card className="bg-gradient-to-br from-gray-900 to-gray-800 border-0 text-white overflow-hidden">
        <CardHeader className="text-center pb-8">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
            className="mx-auto w-20 h-20 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center mb-6"
          >
            <Brain className="w-10 h-10 text-white" />
          </motion.div>
          <CardTitle className="text-4xl font-bold mb-4">
            AI Анализатор проектов
          </CardTitle>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Загрузите описание проекта или файлы, и наш ИИ проанализирует их, 
            предоставив детальную оценку и рекомендации
          </p>
        </CardHeader>

        <CardContent className="space-y-8">
          {/* Upload Section */}
          {!analysisComplete && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-6"
            >
              <div
                ref={dropZoneRef}
                onDragEnter={handleDrag}
                onDragLeave={handleDrag}
                onDragOver={handleDrag}
                onDrop={handleDrop}
                className={`border-2 border-dashed rounded-lg p-12 text-center transition-all duration-300 ${
                  dragActive 
                    ? 'border-blue-500 bg-blue-500/10' 
                    : 'border-gray-600 hover:border-gray-500'
                }`}
              >
                <Upload className="w-16 h-16 mx-auto mb-4 text-gray-400" />
                <h3 className="text-xl font-semibold mb-2">
                  Перетащите файлы сюда или нажмите для выбора
                </h3>
                <p className="text-gray-400 mb-6">
                  Поддерживаются: PDF, DOC, TXT, изображения, архивы
                </p>
                <Button
                  onClick={() => fileInputRef.current?.click()}
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white border-0"
                >
                  <FileText className="w-5 h-5 mr-2" />
                  Выбрать файлы
                </Button>
                <input
                  ref={fileInputRef}
                  type="file"
                  multiple
                  onChange={handleFileSelect}
                  className="hidden"
                  accept=".pdf,.doc,.docx,.txt,.jpg,.jpeg,.png,.zip,.rar"
                />
              </div>

              {uploadedFile && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-gray-800 rounded-lg p-4 flex items-center justify-between"
                >
                  <div className="flex items-center gap-3">
                    <FileText className="w-8 h-8 text-blue-400" />
                    <div>
                      <p className="font-medium">{uploadedFile.name}</p>
                      <p className="text-sm text-gray-400">
                        {(uploadedFile.size / 1024 / 1024).toFixed(2)} MB
                      </p>
                    </div>
                  </div>
                  <CheckCircle className="w-6 h-6 text-green-400" />
                </motion.div>
              )}
            </motion.div>
          )}

          {/* Analysis Progress */}
          {isAnalyzing && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="space-y-6"
            >
              <div className="text-center">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                  className="w-16 h-16 mx-auto mb-4 rounded-full border-4 border-blue-500 border-t-transparent"
                />
                <h3 className="text-xl font-semibold mb-2">Анализируем проект...</h3>
                <p className="text-gray-400">Это займет несколько секунд</p>
              </div>

              <div className="space-y-4">
                {[
                  "Загрузка файла",
                  "Анализ структуры", 
                  "Оценка сложности",
                  "Подбор технологий",
                  "Расчет стоимости",
                  "Генерация отчета"
                ].map((step, index) => (
                  <motion.div
                    key={step}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ 
                      opacity: currentStep >= index ? 1 : 0.5,
                      x: currentStep >= index ? 0 : -20
                    }}
                    className="flex items-center gap-3"
                  >
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                      currentStep > index 
                        ? 'bg-green-500' 
                        : currentStep === index 
                        ? 'bg-blue-500 animate-pulse' 
                        : 'bg-gray-600'
                    }`}>
                      {currentStep > index ? (
                        <CheckCircle className="w-5 h-5 text-white" />
                      ) : (
                        <span className="text-white font-medium">{index + 1}</span>
                      )}
                    </div>
                    <span className={currentStep >= index ? 'text-white' : 'text-gray-500'}>
                      {step}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {/* Analysis Results */}
          {analysisComplete && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-8"
            >
              {/* Project Metrics */}
              {projectMetrics && (
                <Card className="bg-gray-800 border-gray-700">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Target className="w-5 h-5" />
                      Метрики проекта
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                      <div className="text-center">
                        <div className="text-3xl font-bold text-blue-400 mb-2">
                          {projectMetrics.complexity}/10
                        </div>
                        <div className="text-sm text-gray-400">Сложность</div>
                      </div>
                      <div className="text-center">
                        <div className="text-3xl font-bold text-green-400 mb-2">
                          {projectMetrics.estimatedTime}
                        </div>
                        <div className="text-sm text-gray-400">Время разработки</div>
                      </div>
                      <div className="text-center">
                        <div className="text-3xl font-bold text-purple-400 mb-2">
                          {projectMetrics.estimatedCost}
                        </div>
                        <div className="text-sm text-gray-400">Стоимость</div>
                      </div>
                      <div className="text-center">
                        <Badge className={`${
                          projectMetrics.riskLevel === 'high' ? 'bg-red-500' :
                          projectMetrics.riskLevel === 'medium' ? 'bg-yellow-500' :
                          'bg-green-500'
                        } text-white border-0`}>
                          Риск: {projectMetrics.riskLevel}
                        </Badge>
                      </div>
                    </div>
                    
                    <div className="mt-6">
                      <h4 className="font-semibold mb-3">Рекомендуемые технологии:</h4>
                      <div className="flex flex-wrap gap-2">
                        {projectMetrics.technologies.map((tech) => (
                          <Badge key={tech} variant="outline" className="border-blue-500 text-blue-400">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )}

              {/* Analysis Results */}
              <div className="space-y-6">
                <h3 className="text-2xl font-bold flex items-center gap-2">
                  <Zap className="w-6 h-6" />
                  Результаты анализа
                </h3>
                
                <div className="grid gap-6 md:grid-cols-2">
                  {analysisResults.map((result, index) => (
                    <motion.div
                      key={result.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <Card className="bg-gray-800 border-gray-700">
                        <CardHeader>
                          <div className="flex items-center justify-between">
                            <CardTitle className="text-lg">{result.category}</CardTitle>
                            <Badge className={getPriorityColor(result.priority)}>
                              {result.priority}
                            </Badge>
                          </div>
                        </CardHeader>
                        <CardContent className="space-y-4">
                          <div className="flex items-center justify-between">
                            <span className="text-sm text-gray-400">Оценка:</span>
                            <span className={`text-xl font-bold ${getScoreColor(result.score)}`}>
                              {result.score}/100
                            </span>
                          </div>
                          <Progress value={result.score} className="h-2" />
                          
                          <div>
                            <h4 className="font-semibold mb-2">Рекомендации:</h4>
                            <ul className="space-y-2">
                              {result.recommendations.map((rec, recIndex) => (
                                <li key={recIndex} className="flex items-start gap-2 text-sm">
                                  <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                                  <span>{rec}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="flex flex-wrap gap-4 justify-center"
              >
                <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white border-0">
                  <Download className="w-5 h-5 mr-2" />
                  Скачать отчет
                </Button>
                <Button variant="outline" className="border-gray-600 text-white hover:bg-gray-700">
                  <Share2 className="w-5 h-5 mr-2" />
                  Поделиться
                </Button>
                <Button variant="outline" className="border-gray-600 text-white hover:bg-gray-700">
                  <Sparkles className="w-5 h-5 mr-2" />
                  Новый анализ
                </Button>
              </motion.div>
            </motion.div>
          )}
        </CardContent>
      </Card>
    </div>
  );
} 