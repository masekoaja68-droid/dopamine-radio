import React, { Suspense } from 'react';
import Hero from './components/Hero';

// Lazy load below-the-fold components
const Introduction = React.lazy(() => import('./components/Introduction'));
const VideoDemo = React.lazy(() => import('./components/VideoDemo'));
const BenefitsUSP = React.lazy(() => import('./components/BenefitsUSP'));
const HowItWorks = React.lazy(() => import('./components/HowItWorks'));
const SevenPillars = React.lazy(() => import('./components/SevenPillars'));
const Objections = React.lazy(() => import('./components/Objections'));
const WhoIsFor = React.lazy(() => import('./components/WhoIsFor'));
const Guarantee = React.lazy(() => import('./components/Guarantee'));
const Pricing = React.lazy(() => import('./components/Pricing'));
const Postscript = React.lazy(() => import('./components/Postscript'));

export default function App() {
  return (
    <div className="min-h-screen bg-[#050505] text-zinc-300 font-sans selection:bg-yellow-500/30 selection:text-yellow-200">
      {/* Hero loads immediately (Above the fold) */}
      <Hero />
      
      {/* Fallback UI while scrolling */}
      <Suspense fallback={
        <div className="py-24 text-center">
          <div className="inline-block w-8 h-8 border-4 border-yellow-500/30 border-t-yellow-500 rounded-full animate-spin"></div>
        </div>
      }>
        <Introduction />
        <VideoDemo />
        <BenefitsUSP />
        <HowItWorks />
        <SevenPillars />
        <Objections />
        <WhoIsFor />
        <Guarantee />
        <Pricing />
        <Postscript />
      </Suspense>

      <footer className="py-12 text-center border-t border-white/5 bg-[#020202]">
        <p className="text-zinc-600 text-sm mb-2">
          Copyright &copy; {new Date().getFullYear()} AI MUSIK STUDIO &ndash; All rights reserved.
        </p>
        <p className="text-zinc-800 text-xs font-mono">
          v2.0.0 (Release)
        </p>
      </footer>
    </div>
  );
}
