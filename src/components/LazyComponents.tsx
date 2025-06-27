'use client';

import dynamic from 'next/dynamic';

// Lazy loading для тяжелых компонентов
export const AIProjectAnalyzer = dynamic(() => import("@/components/sections/AIProjectAnalyzer").then(mod => ({ default: mod.AIProjectAnalyzer })), {
  loading: () => <div className="h-96 bg-gradient-to-br from-blue-50 to-cyan-50 animate-pulse rounded-lg" />,
  ssr: false
});

export const PricingCalculator = dynamic(() => import("@/components/sections/PricingCalculator").then(mod => ({ default: mod.PricingCalculator })), {
  loading: () => <div className="h-96 bg-gradient-to-br from-green-50 to-emerald-50 animate-pulse rounded-lg" />,
  ssr: false
});

export const ProgressTracker = dynamic(() => import("@/components/features/ProgressTracker").then(mod => ({ default: mod.ProgressTracker })), {
  loading: () => <div className="h-64 bg-gradient-to-br from-purple-50 to-pink-50 animate-pulse rounded-lg" />,
  ssr: false
});

export const MorphingShapes = dynamic(() => import("@/components/features/MorphingShapes").then(mod => ({ default: mod.MorphingShapes })), {
  loading: () => <div className="h-32 bg-gradient-to-br from-orange-50 to-red-50 animate-pulse rounded-lg" />,
  ssr: false
});

export const LiveChatWidget = dynamic(() => import("@/components/features/LiveChatWidget").then(mod => ({ default: mod.LiveChatWidget })), {
  loading: () => null,
  ssr: false
});

export const SmartCTA = dynamic(() => import("@/components/features/SmartCTA").then(mod => ({ default: mod.SmartCTA })), {
  loading: () => null,
  ssr: false
});

export const NotificationSystem = dynamic(() => import("@/components/features/NotificationSystem").then(mod => ({ default: mod.NotificationSystem })), {
  loading: () => null,
  ssr: false
});

export const ThemeToggle = dynamic(() => import("@/components/features/ThemeToggle").then(mod => ({ default: mod.ThemeToggle })), {
  loading: () => null,
  ssr: false
});

export const AchievementSystem = dynamic(() => import("@/components/features/AchievementSystem").then(mod => ({ default: mod.AchievementSystem })), {
  loading: () => null,
  ssr: false
});

export const ParticleBackground = dynamic(() => import("@/components/features/ParticleBackground").then(mod => ({ default: mod.ParticleBackground })), {
  loading: () => null,
  ssr: false
}); 