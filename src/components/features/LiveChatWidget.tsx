"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { MessageCircle, Send, X, Bot, User, Sparkles, Clock } from "lucide-react";
import { siteConfig } from "@/lib/site-config";

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
  type?: 'text' | 'quick-reply' | 'typing';
}

const quickReplies = [
  "Стоимость разработки",
  "Сроки проекта",
  "Портфолио работ",
  "AI интеграция",
  "Заказать проект"
];

const botResponses = {
  "Стоимость разработки": "Стоимость зависит от сложности проекта. Базовый сайт от 50,000₽, сложные проекты до 500,000₽. Хотите рассчитать точную стоимость?",
  "Сроки проекта": "Сроки разработки: простой сайт - 7-14 дней, средний проект - 14-30 дней, сложный проект - 1-3 месяца. Зависит от функциональности.",
  "Портфолио работ": "У нас есть портфолио с более чем 50 проектами. Можете посмотреть в разделе 'Портфолио' или я могу показать конкретные примеры.",
  "AI интеграция": "Интегрируем AI чат-боты, аналитику, автоматизацию процессов. Стоимость от 50,000₽. Какие функции вас интересуют?",
  "Заказать проект": "Отлично! Для заказа проекта свяжитесь с нами в WhatsApp или заполните форму на сайте. Готовы обсудить детали прямо сейчас!"
};

export function LiveChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: 'Привет! 👋 Я AI-помощник. Чем могу помочь?',
      sender: 'bot',
      timestamp: new Date(),
      type: 'text'
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [isClient, setIsClient] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (isOpen && isClient) {
      inputRef.current?.focus();
    }
  }, [isOpen, isClient]);

  const addMessage = (text: string, sender: 'user' | 'bot', type: 'text' | 'quick-reply' | 'typing' = 'text') => {
    const newMessage: Message = {
      id: Date.now().toString(),
      text,
      sender,
      timestamp: new Date(),
      type
    };
    setMessages(prev => [...prev, newMessage]);
  };

  const handleSendMessage = () => {
    if (!inputValue.trim()) return;

    const userMessage = inputValue.trim();
    addMessage(userMessage, 'user');
    setInputValue('');
    setIsTyping(true);

    // Симуляция ответа бота
    setTimeout(() => {
      setIsTyping(false);
      
      // Проверяем, есть ли готовый ответ
      const botResponse = botResponses[userMessage as keyof typeof botResponses];
      
      if (botResponse) {
        addMessage(botResponse, 'bot');
      } else {
        // Генерируем общий ответ
        const generalResponses = [
          "Интересный вопрос! Давайте обсудим это подробнее. Можете связаться с нами в WhatsApp для детальной консультации.",
          "Спасибо за вопрос! Для получения точной информации рекомендую связаться с нашими специалистами.",
          "Отличный вопрос! У нас есть опыт в этой области. Готовы обсудить детали проекта?"
        ];
        const randomResponse = generalResponses[Math.floor(Math.random() * generalResponses.length)];
        addMessage(randomResponse, 'bot');
      }
    }, 1500 + Math.random() * 1000);
  };

  const handleQuickReply = (reply: string) => {
    addMessage(reply, 'user', 'quick-reply');
    setInputValue('');
    setIsTyping(true);

    setTimeout(() => {
      setIsTyping(false);
      const botResponse = botResponses[reply as keyof typeof botResponses];
      if (botResponse) {
        addMessage(botResponse, 'bot');
      }
    }, 1000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  if (!isClient) {
    return null;
  }

  return (
    <>
      {/* Chat Toggle Button */}
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 2, type: "spring", stiffness: 260, damping: 20 }}
        className="fixed bottom-6 right-6 z-50"
      >
        <Button
          onClick={() => setIsOpen(!isOpen)}
          size="lg"
          className="relative w-16 h-16 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-2xl border-0 transition-all duration-300 hover:scale-110"
        >
          <AnimatePresence mode="wait">
            {isOpen ? (
              <motion.div
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <X className="w-6 h-6" />
              </motion.div>
            ) : (
              <motion.div
                key="chat"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="relative"
              >
                <MessageCircle className="w-6 h-6" />
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"
                />
              </motion.div>
            )}
          </AnimatePresence>
        </Button>
      </motion.div>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed bottom-24 right-6 z-40 w-96 max-w-[calc(100vw-3rem)]"
          >
            <Card className="border-0 bg-white/95 backdrop-blur-sm shadow-2xl">
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center">
                      <Bot className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <CardTitle className="text-lg">AI Помощник</CardTitle>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                        <span className="text-sm text-gray-600">Онлайн</span>
                      </div>
                    </div>
                  </div>
                  <Badge variant="secondary" className="text-xs">
                    <Clock className="w-3 h-3 mr-1" />
                    Ответ в ~2 сек
                  </Badge>
                </div>
              </CardHeader>
              
              <CardContent className="p-0">
                {/* Messages */}
                <div className="h-96 overflow-y-auto p-4 space-y-4">
                  {messages.map((message) => (
                    <motion.div
                      key={message.id}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                    >
                      <div className={`max-w-[80%] ${message.sender === 'user' ? 'order-2' : 'order-1'}`}>
                        <div className={`flex items-start gap-2 ${message.sender === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
                          <div className={`w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 ${
                            message.sender === 'user' 
                              ? 'bg-gradient-to-r from-blue-600 to-purple-600' 
                              : 'bg-gray-200'
                          }`}>
                            {message.sender === 'user' ? (
                              <User className="w-3 h-3 text-white" />
                            ) : (
                              <Bot className="w-3 h-3 text-gray-600" />
                            )}
                          </div>
                          <div className={`px-4 py-2 rounded-2xl ${
                            message.sender === 'user'
                              ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white'
                              : 'bg-gray-100 text-gray-900'
                          }`}>
                            <p className="text-sm">{message.text}</p>
                            <p className={`text-xs mt-1 ${
                              message.sender === 'user' ? 'text-blue-100' : 'text-gray-500'
                            }`}>
                              {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                            </p>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                  
                  {/* Typing Indicator */}
                  {isTyping && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex justify-start"
                    >
                      <div className="flex items-start gap-2">
                        <div className="w-6 h-6 rounded-full bg-gray-200 flex items-center justify-center">
                          <Bot className="w-3 h-3 text-gray-600" />
                        </div>
                        <div className="px-4 py-2 rounded-2xl bg-gray-100">
                          <div className="flex space-x-1">
                            <motion.div
                              animate={{ y: [0, -5, 0] }}
                              transition={{ duration: 0.6, repeat: Infinity, delay: 0 }}
                              className="w-2 h-2 bg-gray-400 rounded-full"
                            />
                            <motion.div
                              animate={{ y: [0, -5, 0] }}
                              transition={{ duration: 0.6, repeat: Infinity, delay: 0.2 }}
                              className="w-2 h-2 bg-gray-400 rounded-full"
                            />
                            <motion.div
                              animate={{ y: [0, -5, 0] }}
                              transition={{ duration: 0.6, repeat: Infinity, delay: 0.4 }}
                              className="w-2 h-2 bg-gray-400 rounded-full"
                            />
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                  
                  <div ref={messagesEndRef} />
                </div>

                {/* Quick Replies */}
                {messages.length === 1 && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 border-t border-gray-100"
                  >
                    <p className="text-xs text-gray-600 mb-3">Быстрые ответы:</p>
                    <div className="flex flex-wrap gap-2">
                      {quickReplies.map((reply) => (
                        <Button
                          key={reply}
                          variant="outline"
                          size="sm"
                          onClick={() => handleQuickReply(reply)}
                          className="text-xs h-8 px-3 rounded-full hover:bg-blue-50 hover:border-blue-200"
                        >
                          {reply}
                        </Button>
                      ))}
                    </div>
                  </motion.div>
                )}

                {/* Input */}
                <div className="p-4 border-t border-gray-100">
                  <div className="flex gap-2">
                    <Input
                      ref={inputRef}
                      value={inputValue}
                      onChange={(e) => setInputValue(e.target.value)}
                      onKeyPress={handleKeyPress}
                      placeholder="Введите сообщение..."
                      className="flex-1 border-gray-200 focus:border-blue-500"
                    />
                    <Button
                      onClick={handleSendMessage}
                      disabled={!inputValue.trim()}
                      size="sm"
                      className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white border-0"
                    >
                      <Send className="w-4 h-4" />
                    </Button>
                  </div>
                  
                  {/* WhatsApp CTA */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1 }}
                    className="mt-3 text-center"
                  >
                    <Button
                      asChild
                      variant="outline"
                      size="sm"
                      className="w-full text-green-600 border-green-200 hover:bg-green-50"
                    >
                      <a href={`https://wa.me/${siteConfig.contacts.whatsapp}?text=Здравствуйте! Хочу обсудить проект.`} target="_blank" rel="noopener noreferrer">
                        <Sparkles className="w-4 h-4 mr-2" />
                        Перейти в WhatsApp
                      </a>
                    </Button>
                  </motion.div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
