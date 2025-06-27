import { Header } from "@/components/sections/Header";
import { Hero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services";
import { Benefits } from "@/components/sections/Benefits";
import { AIProjectAnalyzer } from "@/components/sections/AIProjectAnalyzer";
import { PricingCalculator } from "@/components/sections/PricingCalculator";
import { ProgressTracker } from "@/components/features/ProgressTracker";
import { Portfolio } from "@/components/sections/Portfolio";
import { Testimonials } from "@/components/sections/Testimonials";
import { FAQ } from "@/components/sections/FAQ";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/sections/Footer";
import { LiveChatWidget } from "@/components/features/LiveChatWidget";
import { MorphingShapes } from "@/components/features/MorphingShapes";
import { SmartCTA } from "@/components/features/SmartCTA";
import { ClientOnly } from "@/components/ui/client-only";
import { ErrorBoundary } from "@/components/ui/error-boundary";
import { TestHydration } from "@/components/ui/test-hydration";
import { NotificationSystem } from "@/components/features/NotificationSystem";
import { ParticleBackground } from "@/components/features/ParticleBackground";
import { ThemeToggle } from "@/components/features/ThemeToggle";
import { AchievementSystem } from "@/components/features/AchievementSystem";

export default function Home() {
  return (
    <>
      <ErrorBoundary>
        <ClientOnly>
          <ParticleBackground />
        </ClientOnly>
      </ErrorBoundary>

      <Header />
      <main className="flex flex-col gap-0">
        <Hero />
        <Services />
        <Benefits />
        <ErrorBoundary>
          <ClientOnly>
            <AIProjectAnalyzer />
          </ClientOnly>
        </ErrorBoundary>
        <ErrorBoundary>
          <ClientOnly>
            <PricingCalculator />
          </ClientOnly>
        </ErrorBoundary>
        <ErrorBoundary>
          <ClientOnly>
            <ProgressTracker />
          </ClientOnly>
        </ErrorBoundary>
        <ErrorBoundary>
          <ClientOnly>
            <MorphingShapes />
          </ClientOnly>
        </ErrorBoundary>
        <Portfolio />
        <Testimonials />
        <FAQ />
        <Contact />
        <div className="w-full max-w-4xl mx-auto p-6">
          <ErrorBoundary>
            <ClientOnly>
              <TestHydration />
            </ClientOnly>
          </ErrorBoundary>
        </div>
      </main>
      <Footer />

      <ErrorBoundary>
        <ClientOnly>
          <LiveChatWidget />
        </ClientOnly>
      </ErrorBoundary>
      <ErrorBoundary>
        <ClientOnly>
          <SmartCTA />
        </ClientOnly>
      </ErrorBoundary>
      <ErrorBoundary>
        <ClientOnly>
          <NotificationSystem />
        </ClientOnly>
      </ErrorBoundary>
      <ErrorBoundary>
        <ClientOnly>
          <ThemeToggle />
        </ClientOnly>
      </ErrorBoundary>
      <ErrorBoundary>
        <ClientOnly>
          <AchievementSystem />
        </ClientOnly>
      </ErrorBoundary>
    </>
  );
}
