"use client";

import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export function TestHydration() {
  const [isClient, setIsClient] = useState(false);
  const [clientTime, setClientTime] = useState("");

  useEffect(() => {
    setIsClient(true);
    setClientTime(new Date().toLocaleTimeString());
  }, []);

  return (
    <Card className="bg-gray-800 border-gray-700 text-white">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          🧪 Тест гидратации
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-center gap-2">
          <Badge variant={isClient ? "default" : "secondary"}>
            {isClient ? "Клиент" : "Сервер"}
          </Badge>
          <span className="text-sm text-gray-400">
            {isClient ? "Компонент загружен на клиенте" : "Компонент рендерится на сервере"}
          </span>
        </div>
        
        {isClient && (
          <div className="text-sm text-green-400">
            ✅ Время загрузки: {clientTime}
          </div>
        )}
        
        <div className="text-xs text-gray-500">
          Этот компонент помогает проверить правильность работы гидратации
        </div>
      </CardContent>
    </Card>
  );
} 