import React from 'react';
import Hero from './components/Hero.jsx';
import Features from './components/Features.jsx';
import HowItWorks from './components/HowItWorks.jsx';
import Pricing from './components/Pricing.jsx';

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Hero />
      <Features />
      <HowItWorks />
      <Pricing />
      <footer className="mx-auto max-w-7xl px-6 py-12 text-sm text-slate-400">
        <div className="flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 md:flex-row">
          <p>© {new Date().getFullYear()} FluxPay. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#features" className="hover:text-white">Features</a>
            <a href="#how" className="hover:text-white">How it works</a>
            <a href="#pricing" className="hover:text-white">Pricing</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
