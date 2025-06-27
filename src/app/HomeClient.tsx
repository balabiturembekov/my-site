"use client";
import dynamic from "next/dynamic";
import { Header } from "@/components/sections/Header";
import { Hero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services";
import { Benefits } from "@/components/sections/Benefits";
import { Footer } from "@/components/sections/Footer";

const Portfolio = dynamic(() => import("@/components/sections/Portfolio").then(m => m.Portfolio), { ssr: false });
const Testimonials = dynamic(() => import("@/components/sections/Testimonials").then(m => m.Testimonials), { ssr: false });
const FAQ = dynamic(() => import("@/components/sections/FAQ").then(m => m.FAQ), { ssr: false });
const Contact = dynamic(() => import("@/components/sections/Contact").then(m => m.Contact), { ssr: false });

export default function HomeClient() {
  return (
    <>
      <Header />
      <Hero />
      <Services />
      <Benefits />
      <Portfolio />
      <Testimonials />
      <FAQ />
      <Contact />
      <Footer />
    </>
  );
} 