import Spline from '@splinetool/react-spline';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-[92vh] w-full overflow-hidden bg-black" aria-label="Hero">
      {/* 3D Background */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/O-AdlP9lTPNz-i8a/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Subtle gradient veils that don't block Spline interaction */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(1200px_500px_at_50%_10%,rgba(255,255,255,0.12),transparent_60%)]" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-orange-500/30 via-orange-400/10 to-transparent" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex min-h-[92vh] max-w-7xl flex-col items-center justify-center px-4 text-center sm:px-6 lg:px-8">
        <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-white/80 backdrop-blur">
          <Sparkles size={14} className="text-amber-300" />
          New: Real‑time boarding pass tokenization
        </span>
        <h1 className="mt-6 bg-gradient-to-br from-white via-white to-amber-200 bg-clip-text text-4xl font-semibold leading-tight text-transparent sm:text-6xl">
          Integrate fintech and travel systems in minutes
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-base text-white/80 sm:text-lg">
          Unified APIs for payments, loyalty, bookings and identity. Secure, modern, and designed for global scale.
        </p>
        <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row">
          <button className="group inline-flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-orange-500 to-amber-300 px-6 py-3 font-medium text-black shadow-[0_12px_30px_-8px_rgba(251,146,60,0.55)] transition-transform hover:translate-y-[-2px] active:translate-y-0">
            Start free
            <ArrowRight size={18} className="transition-transform group-hover:translate-x-0.5" />
          </button>
          <a href="#features" className="rounded-2xl border border-white/15 bg-white/5 px-6 py-3 font-medium text-white/90 backdrop-blur transition hover:border-white/30 hover:text-white">
            Explore features
          </a>
        </div>
      </div>
    </section>
  );
}
