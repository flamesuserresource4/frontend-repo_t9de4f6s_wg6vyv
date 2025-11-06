import React from 'react';

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-7xl px-6 py-10">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
          <div className="flex items-center gap-2">
            <div className="h-7 w-7 rounded-md bg-gradient-to-tr from-indigo-500 via-sky-400 to-emerald-400" />
            <span className="text-sm font-semibold text-slate-900">Cang Bani</span>
          </div>
          <p className="text-xs text-slate-500">© {new Date().getFullYear()} Cang Bani. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
