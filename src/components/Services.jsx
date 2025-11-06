import React from 'react';
import { Shield, CreditCard, BarChart3, ShoppingCart } from 'lucide-react';

const services = [
  {
    icon: Shield,
    title: 'Secure Infrastructure',
    desc: 'Enterprise-grade security and compliance baked into every workflow.'
  },
  {
    icon: CreditCard,
    title: 'Payments & Cards',
    desc: 'Seamless payment rails, virtual cards, and checkout experiences.'
  },
  {
    icon: BarChart3,
    title: 'Analytics & Insights',
    desc: 'Real-time dashboards to monitor growth, risk, and performance.'
  },
  {
    icon: ShoppingCart,
    title: 'E‑commerce Enablement',
    desc: 'From catalog to conversion, we power modern online stores.'
  }
];

export default function Services() {
  return (
    <section id="services" className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">What we do</h2>
          <p className="mt-3 text-slate-600">Fintech-forward capabilities, delivered with minimalist craftsmanship.</p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-tr from-indigo-500 via-sky-400 to-emerald-400 text-white">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-slate-900">{title}</h3>
              <p className="mt-2 text-sm text-slate-600">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
