import { Header } from "@/components/sections/Header";
import { Hero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services";
import { Benefits } from "@/components/sections/Benefits";
import { Portfolio } from "@/components/sections/Portfolio";
import { Testimonials } from "@/components/sections/Testimonials";
import { FAQ } from "@/components/sections/FAQ";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/sections/Footer";
import { ClientOnly } from "@/components/ui/client-only";
import { ErrorBoundary } from "@/components/ui/error-boundary";
import {
  AIProjectAnalyzer,
  PricingCalculator,
  ProgressTracker,
  MorphingShapes,
  LiveChatWidget,
  SmartCTA,
  NotificationSystem,
  ThemeToggle,
  AchievementSystem,
  ParticleBackground
} from "@/components/LazyComponents";

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
