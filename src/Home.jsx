import React from "react";

export default function Home() {
  const features = [
    { icon: "🎮", title: "Gamified Learning", desc: "Earn XP & unlock achievements" },
    { icon: "🔬", title: "Real Labs", desc: "Hands-on cloud environments" },
    { icon: "🏆", title: "Leaderboard", desc: "Compete with global engineers" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-black text-gray-100">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-black/80 backdrop-blur-sm border-b border-orange-500/20 py-3">
        <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-orange-500 to-pink-600 flex items-center justify-center text-white font-bold text-sm">
              W
            </div>
            <h1 className="text-lg font-bold">Whizlabs</h1>
          </div>
          <nav className="hidden md:flex gap-6 text-sm">
            <a href="#" className="text-gray-400 hover:text-orange-400">Features</a>
            <a href="#" className="text-gray-400 hover:text-orange-400">Pricing</a>
            <button className="bg-gradient-to-r from-orange-500 to-pink-500 px-4 py-2 rounded-lg text-white font-medium hover:shadow-lg hover:shadow-orange-500/50">
              Login
            </button>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="py-20 md:py-28 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-pink-400">
              Level Up Your Cloud Skills
            </span>
          </h2>
          <p className="text-lg text-gray-400 mb-8 leading-relaxed">
            Master cloud & DevOps with gamified learning. Earn XP, unlock achievements, and join thousands of engineers on their learning journey.
          </p>
          <div className="flex gap-4 justify-center">
            <button className="bg-gradient-to-r from-orange-500 to-pink-500 px-8 py-3 rounded-lg font-semibold text-white shadow-lg shadow-orange-500/30 hover:scale-105 transition">
              Start Quest
            </button>
            <button className="border border-orange-500/50 px-8 py-3 rounded-lg font-semibold text-orange-400 hover:bg-orange-500/10">
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 md:py-20 px-6 bg-black/40 border-y border-orange-500/20">
        <div className="max-w-5xl mx-auto">
          <h3 className="text-3xl font-bold text-center mb-12 text-orange-400">Why Whizlabs?</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {features.map((f, i) => (
              <div key={i} className="p-6 rounded-xl bg-gray-900/50 border border-orange-500/20 hover:border-orange-500/50 transition">
                <div className="text-3xl mb-2">{f.icon}</div>
                <h4 className="font-bold text-white mb-1">{f.title}</h4>
                <p className="text-sm text-gray-400">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 md:py-20 px-6">
        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8 text-center">
          <div>
            <p className="text-4xl font-bold text-orange-400">50K+</p>
            <p className="text-gray-400 text-sm mt-1">Active Learners</p>
          </div>
          <div>
            <p className="text-4xl font-bold text-pink-400">500+</p>
            <p className="text-gray-400 text-sm mt-1">Cloud Labs</p>
          </div>
          <div>
            <p className="text-4xl font-bold text-orange-400">100%</p>
            <p className="text-gray-400 text-sm mt-1">Hands-On</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20 px-6 border-t border-orange-500/20">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Start?</h2>
          <p className="text-gray-400 mb-6">Join the gamified revolution in cloud learning.</p>
          <button className="bg-gradient-to-r from-orange-500 to-pink-500 px-8 py-3 rounded-lg font-bold text-white shadow-lg shadow-orange-500/40 hover:scale-105 transition">
            Begin Your Journey
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black/50 border-t border-orange-500/20 py-8 px-6 text-center text-sm text-gray-500">
        <p>© 2026 Whizlabs. All rights reserved.</p>
      </footer>
    </div>
  );
}
