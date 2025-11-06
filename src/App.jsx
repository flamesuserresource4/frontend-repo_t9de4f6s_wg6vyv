import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <section id="contact" className="bg-slate-900 py-20 text-white">
          <div className="mx-auto max-w-7xl px-6">
            <div className="grid gap-8 md:grid-cols-2">
              <div>
                <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Let’s build something remarkable</h2>
                <p className="mt-3 text-slate-300">Tell us about your product or idea and we’ll get back within 24 hours.</p>
              </div>
              <form
                onSubmit={(e) => e.preventDefault()}
                className="grid grid-cols-1 gap-4"
              >
                <input className="w-full rounded-md border border-slate-700 bg-transparent px-4 py-3 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-400" placeholder="Your name" />
                <input type="email" className="w-full rounded-md border border-slate-700 bg-transparent px-4 py-3 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-400" placeholder="Email" />
                <textarea rows="4" className="w-full rounded-md border border-slate-700 bg-transparent px-4 py-3 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-400" placeholder="Message" />
                <button className="mt-2 inline-flex w-fit items-center justify-center rounded-md bg-white px-5 py-3 font-medium text-slate-900 hover:bg-slate-100">Send message</button>
              </form>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
