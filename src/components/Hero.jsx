import React from 'react';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative h-[80vh] w-full" aria-label="Hero">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/8nsoLg1te84JZcE9/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col justify-center px-6">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/70 via-white/40 to-white/90" />
        <div className="relative max-w-2xl">
          <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">Cang Bani</h1>
          <p className="mt-4 text-lg text-slate-700">
            Modern financial and commerce solutions for ambitious brands. We craft secure, elegant, and scalable digital experiences.
          </p>
          <div className="mt-8 flex items-center gap-3">
            <a href="#services" className="rounded-md bg-slate-900 px-5 py-3 text-white hover:bg-slate-800">Explore Services</a>
            <a href="#contact" className="rounded-md border border-slate-300 px-5 py-3 text-slate-700 hover:bg-slate-50">Get in Touch</a>
          </div>
        </div>
      </div>
    </section>
  );
}
