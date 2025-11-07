import React from 'react';
import Spline from '@splinetool/react-spline';
import { Rocket, ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-950/60 to-slate-950/0 pointer-events-none" />

      <nav className="relative z-10 mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-6">
        <div className="flex items-center gap-2 text-white">
          <div className="grid h-9 w-9 place-items-center rounded-xl bg-sky-400/10 ring-1 ring-sky-300/30">
            <Rocket size={18} className="text-sky-300" />
          </div>
          <span className="font-semibold tracking-tight">FluxPay</span>
        </div>
        <div className="hidden items-center gap-8 text-sm text-slate-300 md:flex">
          <a href="#features" className="hover:text-white transition-colors">Features</a>
          <a href="#how" className="hover:text-white transition-colors">How it works</a>
          <a href="#pricing" className="hover:text-white transition-colors">Pricing</a>
        </div>
        <div className="hidden md:block">
          <a
            href="#pricing"
            className="rounded-lg bg-white/10 px-4 py-2 text-sm font-medium text-white backdrop-blur transition hover:bg-white/20"
          >
            Sign in
          </a>
        </div>
      </nav>

      <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-6 pb-24 pt-10 md:grid-cols-2 md:pb-28 md:pt-16 lg:gap-16">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-300 backdrop-blur">
            <span className="h-2 w-2 rounded-full bg-emerald-400" />
            Now with AI-driven reconciliation
          </div>
          <h1 className="mt-5 text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Automate your finance ops with glass‑clean clarity
          </h1>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-slate-300 sm:text-lg">
            FluxPay connects your banks, cards, and ledgers to streamline payouts, invoicing, and reporting. Real‑time insights, zero busywork.
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <a
              href="#pricing"
              className="group inline-flex items-center gap-2 rounded-xl bg-sky-400 px-5 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-sky-400/20 transition hover:brightness-110"
            >
              Get started free
              <ArrowRight size={16} className="transition group-hover:translate-x-0.5" />
            </a>
            <a
              href="#how"
              className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/10"
            >
              See how it works
            </a>
          </div>
          <div className="mt-6 flex items-center gap-4 text-xs text-slate-400">
            <span>Encrypted • PCI ready</span>
            <span>•</span>
            <span>Works with Stripe, QuickBooks, Xero</span>
          </div>
        </div>

        <div className="relative h-[420px] w-full sm:h-[520px] md:h-[540px] lg:h-[580px]">
          <div className="absolute inset-0 rounded-3xl border border-white/10 bg-white/5 backdrop-blur">
            <Spline
              scene="https://prod.spline.design/41MGRk-UDPKO-l6W/scene.splinecode"
              style={{ width: '100%', height: '100%' }}
            />
            <div className="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-inset ring-white/10" />
            <div className="pointer-events-none absolute -left-20 -top-20 h-64 w-64 rounded-full bg-sky-400/20 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-16 -right-16 h-64 w-64 rounded-full bg-indigo-400/10 blur-3xl" />
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 top-0 -z-[1] h-[60vh] bg-gradient-radial from-sky-500/20 via-transparent to-transparent blur-2xl" />
    </section>
  );
}
