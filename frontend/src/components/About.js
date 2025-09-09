import React from "react";

function About() {
  return (
    <div className="px-6 py-12 max-w-6xl mx-auto">
      {/* Hero */}
      <div className="relative overflow-hidden rounded-2xl p-8 md:p-12 text-white shadow-soft bg-gradient-to-r from-brand-primary to-brand-primary-light">
        <div className="absolute -top-10 -right-10 w-56 h-56 rounded-full bg-white/10 blur-2xl" />
        <div className="absolute -bottom-14 -left-6 w-64 h-64 rounded-full bg-white/10 blur-2xl" />
        <h1 className="relative text-3xl md:text-5xl font-bold mb-3">About Our Library</h1>
        <p className="relative text-white/90 max-w-3xl">
          Discover, borrow, and manage books with an elegant, fast experience.
          Your reading journey stays organized and delightful across all devices.
        </p>
        <div className="relative mt-6 flex flex-wrap gap-3">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/15 text-white text-sm">
            <span>✨</span> Curated Collections
          </span>
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/15 text-white text-sm">
            <span>⚡</span> One‑click Borrow
          </span>
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/15 text-white text-sm">
            <span>🎯</span> Clean UI
          </span>
        </div>
      </div>

      {/* Features */}
      <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="p-6 bg-white rounded-xl shadow-soft">
          <div className="w-10 h-10 rounded-lg bg-brand-surface-muted flex items-center justify-center mb-3">
            <span className="text-brand-primary text-xl">🔎</span>
          </div>
          <h2 className="text-xl font-semibold text-brand-primary mb-1">Discover</h2>
          <p className="text-brand-text-muted">Explore a growing catalog with clear categories and quick search.</p>
        </div>
        <div className="p-6 bg-white rounded-xl shadow-soft">
          <div className="w-10 h-10 rounded-lg bg-brand-surface-muted flex items-center justify-center mb-3">
            <span className="text-brand-primary text-xl">📚</span>
          </div>
          <h2 className="text-xl font-semibold text-brand-primary mb-1">Borrow</h2>
          <p className="text-brand-text-muted">Borrow books in one click and keep track of your activity.</p>
        </div>
        <div className="p-6 bg-white rounded-xl shadow-soft">
          <div className="w-10 h-10 rounded-lg bg-brand-surface-muted flex items-center justify-center mb-3">
            <span className="text-brand-primary text-xl">🌟</span>
          </div>
          <h2 className="text-xl font-semibold text-brand-primary mb-1">Enjoy</h2>
          <p className="text-brand-text-muted">A consistent, elegant design powered by our brand theme.</p>
        </div>
      </div>

      {/* Stats (static) */}
      <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="p-6 bg-white rounded-xl shadow-soft text-center">
          <div className="text-3xl font-bold text-brand-primary">5k+</div>
          <div className="text-brand-text-muted">Books</div>
        </div>
        <div className="p-6 bg-white rounded-xl shadow-soft text-center">
          <div className="text-3xl font-bold text-brand-primary">2k+</div>
          <div className="text-brand-text-muted">Active Readers</div>
        </div>
        <div className="p-6 bg-white rounded-xl shadow-soft text-center">
          <div className="text-3xl font-bold text-brand-primary">98%</div>
          <div className="text-brand-text-muted">Satisfaction</div>
        </div>
      </div>
    </div>
  );
}

export default About;


