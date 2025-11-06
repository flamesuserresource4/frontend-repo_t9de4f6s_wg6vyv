import React from 'react';

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md/0">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-lg bg-gradient-to-tr from-indigo-500 via-sky-400 to-emerald-400" />
          <span className="text-lg font-semibold tracking-tight text-slate-900 dark:text-white">Cang Bani</span>
        </div>
        <div className="hidden items-center gap-8 text-sm font-medium text-slate-700 md:flex">
          <a href="#about" className="hover:text-slate-900">About</a>
          <a href="#services" className="hover:text-slate-900">Services</a>
          <a href="#contact" className="rounded-md bg-slate-900 px-4 py-2 text-white hover:bg-slate-800">Contact</a>
        </div>
      </nav>
    </header>
  );
}
