/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import News from "./components/News";
import Stats from "./components/Stats";
import About from "./components/About";
import Industries from "./components/Industries";
import Process from "./components/Process";
import Features from "./components/Features";
import Schedule from "./components/Schedule";
import Testimonials from "./components/Testimonials";
import FAQ from "./components/FAQ";
import Access from "./components/Access";
import CompanyProfile from "./components/CompanyProfile";
import CTA from "./components/CTA";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-[var(--color-surface)] font-sans">
      <Navbar />
      <main>
        <Hero />
        <News />
        <Stats />
        <About />
        <Industries />
        <Process />
        <Features />
        <Schedule />
        <Testimonials />
        <FAQ />
        <Access />
        <CompanyProfile />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
