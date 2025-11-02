import { CreditCard, Globe, Shield, Zap } from 'lucide-react';

const features = [
  {
    icon: CreditCard,
    title: 'Unified Payments',
    desc: 'Cards, wallets and bank transfers through a single, consistent API with smart retries and reconciliation.'
  },
  {
    icon: Globe,
    title: 'Global Travel Data',
    desc: 'Normalize GDS, NDC and rail providers into one schema. Real-time status, fares and ancillaries.'
  },
  {
    icon: Shield,
    title: 'Security at Core',
    desc: 'PCI-DSS aligned vaulting, tokenization for boarding passes, and granular role-based access.'
  },
  {
    icon: Zap,
    title: 'Developer Velocity',
    desc: 'SDKs, webhooks and a beautiful console. Ship integrations in days, not months.'
  },
];

export default function Features() {
  return (
    <section id="features" className="relative w-full bg-[#070707] py-20 sm:py-28">
      <div className="absolute inset-0 bg-[radial-gradient(600px_200px_at_20%_0%,rgba(253,186,116,0.12),transparent_60%)]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="bg-gradient-to-b from-white to-white/70 bg-clip-text text-3xl font-semibold tracking-tight text-transparent sm:text-4xl">
            Everything you need to connect fintech and travel
          </h2>
          <p className="mt-3 text-white/70">
            Powerful primitives that abstract the complexity, with the flexibility to customize every step.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.03] to-white/[0.02] p-[1px]"
            >
              <div className="relative h-full rounded-2xl bg-black p-5 transition-transform duration-300 group-hover:-translate-y-0.5">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-tr from-orange-500 to-amber-300 text-black shadow-inner">
                  <Icon size={18} />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-white">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/70">{desc}</p>
                {/* Boarding pass accent */}
                <div className="pointer-events-none absolute -right-12 -top-12 h-32 w-56 rotate-12 rounded-xl bg-gradient-to-r from-white/5 to-amber-300/10 opacity-0 blur-sm transition-opacity duration-300 group-hover:opacity-100" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
