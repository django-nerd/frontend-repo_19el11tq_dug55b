import React from 'react';
import { Check } from 'lucide-react';

const tiers = [
  {
    name: 'Starter',
    price: '$0',
    period: '/mo',
    features: ['Up to 3 accounts', 'Basic automation', 'Email support'],
    cta: 'Get started',
    highlighted: false,
  },
  {
    name: 'Growth',
    price: '$49',
    period: '/mo',
    features: ['Unlimited accounts', 'Advanced rules', 'Priority support'],
    cta: 'Start free trial',
    highlighted: true,
  },
  {
    name: 'Scale',
    price: 'Custom',
    period: '',
    features: ['SSO & SAML', 'Audit logs', 'Dedicated success'],
    cta: 'Contact sales',
    highlighted: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="mx-auto max-w-7xl px-6 py-20">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">Simple, transparent pricing</h2>
        <p className="mt-3 text-slate-300">Start free and scale with usage. No hidden fees.</p>
      </div>
      <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
        {tiers.map((tier) => (
          <div
            key={tier.name}
            className={`relative rounded-2xl border p-6 backdrop-blur ${
              tier.highlighted
                ? 'border-sky-300/30 bg-sky-400/5 shadow-[0_0_0_1px_rgba(56,189,248,0.15)]'
                : 'border-white/10 bg-white/5'
            }`}
          >
            {tier.highlighted && (
              <span className="absolute -top-2 left-6 rounded-full bg-sky-400 px-2.5 py-0.5 text-xs font-semibold text-slate-950">
                Most popular
              </span>
            )}
            <h3 className="text-lg font-semibold text-white">{tier.name}</h3>
            <div className="mt-2 flex items-end gap-1">
              <span className="text-4xl font-bold text-white">{tier.price}</span>
              <span className="mb-1 text-slate-400">{tier.period}</span>
            </div>
            <ul className="mt-4 space-y-2 text-sm">
              {tier.features.map((f) => (
                <li key={f} className="flex items-center gap-2 text-slate-200">
                  <Check className="h-4 w-4 text-emerald-400" />
                  {f}
                </li>
              ))}
            </ul>
            <a
              href="#"
              className={`mt-6 inline-flex w-full items-center justify-center rounded-xl px-4 py-2.5 text-sm font-semibold transition ${
                tier.highlighted
                  ? 'bg-sky-400 text-slate-950 shadow-lg shadow-sky-400/20 hover:brightness-110'
                  : 'border border-white/10 bg-white/5 text-white hover:bg-white/10'
              }`}
            >
              {tier.cta}
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
