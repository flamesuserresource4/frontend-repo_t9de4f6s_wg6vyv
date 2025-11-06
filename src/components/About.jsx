import React from 'react';

export default function About() {
  return (
    <section id="about" className="bg-gradient-to-b from-white to-slate-50 py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">About Cang Bani</h2>
            <p className="mt-4 text-slate-600">
              We are a modern studio focused on financial technology and digital commerce. Our team blends strategy, design, and engineering to build clean, resilient products that scale with your ambition.
            </p>
            <ul className="mt-6 space-y-3 text-slate-700">
              <li className="flex items-start gap-3">
                <span className="mt-1 inline-block h-2 w-2 rounded-full bg-emerald-400" />
                Secure-by-design architecture and audited workflows
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 inline-block h-2 w-2 rounded-full bg-sky-400" />
                Human-centered interfaces with minimalist aesthetics
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 inline-block h-2 w-2 rounded-full bg-indigo-500" />
                Data-driven decisions through actionable analytics
              </li>
            </ul>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 -z-0 rounded-3xl bg-gradient-to-tr from-indigo-200 via-sky-200 to-emerald-200 opacity-60 blur-2xl" />
            <div className="relative rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-3xl font-bold text-slate-900">40+</div>
                  <div className="text-xs text-slate-500">Clients</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-slate-900">99.9%</div>
                  <div className="text-xs text-slate-500">Uptime</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-slate-900">8 yrs</div>
                  <div className="text-xs text-slate-500">Experience</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
