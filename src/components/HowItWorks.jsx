import React from 'react';
import { CheckCircle2 } from 'lucide-react';

const steps = [
  {
    title: 'Connect accounts',
    desc: 'Securely link banks, cards, and ledgers. We sync transactions in seconds.',
  },
  {
    title: 'Set rules',
    desc: 'Create approval workflows, routing logic, and automated categorization.',
  },
  {
    title: 'Go hands-free',
    desc: 'Let FluxPay orchestrate payouts, invoicing, and reconciliation end‑to‑end.',
  },
];

export default function HowItWorks() {
  return (
    <section id="how" className="mx-auto max-w-7xl px-6 py-20">
      <div className="grid items-start gap-10 md:grid-cols-2">
        <div>
          <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">How it works</h2>
          <p className="mt-3 max-w-xl text-slate-300">Set it up once. FluxPay keeps your finance operations flowing with minimal input.</p>
          <ul className="mt-8 space-y-5">
            {steps.map((s) => (
              <li key={s.title} className="flex items-start gap-3">
                <CheckCircle2 className="mt-0.5 h-5 w-5 text-emerald-400" />
                <div>
                  <p className="font-medium text-white">{s.title}</p>
                  <p className="text-sm text-slate-300">{s.desc}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur">
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div className="rounded-xl border border-white/10 bg-slate-900/60 p-4">
              <p className="text-slate-400">Current balance</p>
              <p className="mt-2 text-2xl font-semibold text-white">$248,392</p>
              <p className="mt-1 text-emerald-400">+2.4% this week</p>
            </div>
            <div className="rounded-xl border border-white/10 bg-slate-900/60 p-4">
              <p className="text-slate-400">Outstanding invoices</p>
              <p className="mt-2 text-2xl font-semibold text-white">$32,580</p>
              <p className="mt-1 text-sky-300">18 due</p>
            </div>
            <div className="col-span-2 rounded-xl border border-white/10 bg-slate-900/60 p-4">
              <p className="text-slate-400">Automation</p>
              <div className="mt-2 flex items-center justify-between rounded-lg bg-black/30 p-3 text-slate-200">
                <span>Auto‑reconcile invoices</span>
                <span className="rounded-full bg-emerald-500 px-2.5 py-0.5 text-xs font-medium text-emerald-950">Active</span>
              </div>
              <div className="mt-2 flex items-center justify-between rounded-lg bg-black/30 p-3 text-slate-200">
                <span>Approval flow over $5k</span>
                <span className="rounded-full bg-sky-400 px-2.5 py-0.5 text-xs font-medium text-slate-950">Active</span>
              </div>
            </div>
          </div>
          <div className="pointer-events-none absolute -right-10 -top-10 h-56 w-56 rounded-full bg-sky-400/10 blur-3xl" />
        </div>
      </div>
    </section>
  );
}
