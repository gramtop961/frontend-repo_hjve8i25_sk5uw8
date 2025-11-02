import { ArrowRight } from 'lucide-react';

export default function CTA() {
  return (
    <section id="pricing" className="relative overflow-hidden bg-black py-20">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(700px_280px_at_80%_10%,rgba(253,186,116,0.18),transparent_60%)]" />
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.05),rgba(255,255,255,0.03))] p-8 sm:p-12">
          <div className="mx-auto max-w-3xl text-center">
            <h3 className="bg-gradient-to-b from-white to-amber-100 bg-clip-text text-3xl font-semibold text-transparent sm:text-4xl">
              Build the future of travel finance
            </h3>
            <p className="mt-3 text-white/70">
              Go live on a free sandbox. Upgrade when you scale.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <button className="group inline-flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-orange-500 to-amber-300 px-6 py-3 font-medium text-black shadow-[0_12px_30px_-8px_rgba(251,146,60,0.55)] transition-transform hover:translate-y-[-2px] active:translate-y-0">
                Create account
                <ArrowRight size={18} className="transition-transform group-hover:translate-x-0.5" />
              </button>
              <a href="#" className="text-sm text-white/60 underline-offset-4 hover:text-white hover:underline">
                Talk to sales
              </a>
            </div>
          </div>
          <div className="mt-10 border-t border-white/10 pt-6 text-center text-xs text-white/50">
            © {new Date().getFullYear()} Integify. All rights reserved.
          </div>
        </div>
      </div>
    </section>
  );
}
