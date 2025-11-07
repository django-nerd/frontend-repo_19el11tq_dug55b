import React from 'react';
import { Shield, ChartBar, Zap, CreditCard } from 'lucide-react';

const features = [
  {
    icon: CreditCard,
    title: 'Smart payouts',
    desc: 'Automate vendor and payroll disbursements with approval flows and audit trails.',
  },
  {
    icon: ChartBar,
    title: 'Live insights',
    desc: 'See cash flow, burn, and runway in real-time with bank-grade connections.',
  },
  {
    icon: Zap,
    title: 'AI reconciliation',
    desc: 'Match transactions to invoices automatically and reduce month-end close time.',
  },
  {
    icon: Shield,
    title: 'Enterprise security',
    desc: 'SOC 2 practices, SSO, role-based permissions, and complete data encryption.',
  },
];

export default function Features() {
  return (
    <section id="features" className="relative mx-auto max-w-7xl px-6 py-20">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">Everything you need to run finance</h2>
        <p className="mt-3 text-slate-300">Powerful building blocks that stay out of the way and keep you in control.</p>
      </div>
      <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {features.map(({ icon: Icon, title, desc }) => (
          <div key={title} className="group rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur transition hover:bg-white/10">
            <div className="flex items-center gap-3">
              <div className="grid h-9 w-9 place-items-center rounded-lg bg-sky-400/10 ring-1 ring-sky-300/20">
                <Icon size={18} className="text-sky-300" />
              </div>
              <h3 className="font-medium text-white">{title}</h3>
            </div>
            <p className="mt-3 text-sm leading-relaxed text-slate-300">{desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
