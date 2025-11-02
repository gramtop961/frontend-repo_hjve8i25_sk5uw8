import { ArrowRight, Rocket, Shield } from "lucide-react";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-4 rounded-2xl border border-white/10 bg-black/30 backdrop-blur supports-[backdrop-filter]:bg-black/30">
          <nav className="flex items-center justify-between px-4 py-3 sm:px-6">
            <div className="flex items-center gap-3">
              <div className="grid h-9 w-9 place-items-center rounded-lg bg-gradient-to-tr from-orange-500 to-amber-300 text-black">
                <Rocket size={18} />
              </div>
              <span className="text-lg font-semibold tracking-tight text-white">Integify</span>
            </div>
            <div className="hidden items-center gap-8 text-sm text-white/70 sm:flex">
              <a href="#features" className="hover:text-white">Features</a>
              <a href="#integrations" className="hover:text-white">Integrations</a>
              <a href="#pricing" className="hover:text-white">Pricing</a>
              <a href="#security" className="hover:text-white flex items-center gap-2"><Shield size={16}/>Security</a>
            </div>
            <div className="flex items-center gap-3">
              <button className="hidden rounded-lg px-4 py-2 text-sm text-white/80 ring-1 ring-white/15 transition hover:text-white hover:ring-white/30 sm:block">Sign in</button>
              <button className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-orange-500 to-amber-300 px-4 py-2 text-sm font-medium text-black shadow-[0_8px_20px_-6px_rgba(251,146,60,0.6)] transition-transform hover:translate-y-[-1px] active:translate-y-0">
                Get started
                <ArrowRight className="transition-transform group-hover:translate-x-0.5" size={16} />
              </button>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
