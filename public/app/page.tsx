import Link from "next/link";
import { ArrowRight, ShieldCheck, AlertTriangle, Landmark, TrendingDown } from "lucide-react";

const eur = (value: number) => new Intl.NumberFormat("en-IE", { style: "currency", currency: "EUR", maximumFractionDigits: 0 }).format(value);

const cards = [
  ["Corrected net profit", 65000, "vs €312k management claim", "text-emerald-300"],
  ["Closing cash", 60000, "bank-confirmed at 31 Aug 2026", "text-cyan-300"],
  ["Total assets", 540000, "reconciled balance sheet", "text-sky-300"],
  ["Total liabilities", 406000, "including €90k deposits", "text-amber-300"],
] as const;

export default function HomePage() {
  return (
    <main className="shell">
      <div className="mx-auto max-w-7xl px-6 py-8 lg:px-10">
        <header className="mb-10 flex flex-col gap-6 border-b border-slate-700/70 pb-8 md:flex-row md:items-end md:justify-between">
          <div>
            <div className="mb-3 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.24em] text-cyan-300"><ShieldCheck size={16} /> Certified Agent 1 baseline</div>
            <h1 className="text-4xl font-bold tracking-tight text-white md:text-6xl">DPI HT 01</h1>
            <p className="mt-3 max-w-2xl text-lg muted">Financial crime scene assignment · reconstructed accounts as at 31 August 2026.</p>
          </div>
          <Link href="/review" className="inline-flex items-center justify-center gap-2 rounded-xl bg-cyan-400 px-5 py-3 font-bold text-slate-950 transition hover:bg-cyan-300">Open review trail <ArrowRight size={18} /></Link>
        </header>

        <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {cards.map(([label, value, note, color]) => <div className="panel p-5" key={label}><p className="text-sm muted">{label}</p><p className={`mt-3 text-3xl font-bold ${color}`}>{eur(value)}</p><p className="mt-2 text-xs muted">{note}</p></div>)}
        </section>

        <section className="mt-8 grid gap-6 lg:grid-cols-3">
          <Statement title="Profit & loss" icon={<TrendingDown size={18} />} rows={[["Revenue", 960000], ["COGS", -485000], ["Gross profit", 475000], ["Operating expenses", -398000], ["Operating profit", 77000], ["Interest", -12000], ["Corrected net profit", 65000]]} />
          <Statement title="Balance sheet" icon={<Landmark size={18} />} rows={[["Cash", 60000], ["Net receivables", 168000], ["Inventory", 121000], ["Net PPE", 191000], ["Total assets", 540000], ["Total liabilities", -406000], ["Balancing equity", 134000]] />
          <Statement title="Cash flow" icon={<ArrowRight size={18} />} rows={[["CFO", 139000], ["CFI", -80000], ["CFF", -79000], ["Net decrease", -20000], ["Closing cash", 60000]]} />
        </section>

        <section className="mt-8 grid gap-6 lg:grid-cols-[1.4fr_1fr]">
          <div className="panel p-6"><div className="mb-5 flex items-center gap-2 text-amber-300"><AlertTriangle size={19} /><h2 className="text-lg font-bold text-white">Material uncertainties</h2></div><div className="space-y-4 text-sm"><div className="rounded-xl border border-amber-500/30 bg-amber-400/10 p-4"><p className="font-semibold text-amber-200">€9,000 inventory roll-forward gap</p><p className="mt-1 muted">Physical count, purchases and stated consumption do not fully reconcile. The gap is disclosed, not silently forced into profit.</p></div><div className="rounded-xl border border-slate-700 bg-slate-900/40 p-4"><p className="font-semibold text-slate-200">Insurance remains unconfirmed</p><p className="mt-1 muted">No supported insurance transaction or amount appears in the available bank and asset evidence.</p></div></div></div>
          <div className="panel p-6"><h2 className="text-lg font-bold text-white">Board actions</h2><p className="mt-2 text-sm muted">Certified recommendations D091–D100.</p><ul className="mt-5 space-y-3 text-sm text-slate-200"><li>Do not use €312k management profit for valuation.</li><li>Freeze owner-card access and investigate overrides.</li><li>Move €90k September deposits to contract liabilities.</li><li>Start a weekly 13-week cash forecast.</li><li>Reconcile suppliers and stop high-risk credit sales.</li></ul><Link href="/review#board-actions" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-cyan-300">View decision register <ArrowRight size={16} /></Link></div>
        </section>
      </div>
    </main>
  );
}

function Statement({ title, icon, rows }: { title: string; icon: React.ReactNode; rows: readonly [string, number][] }) {
  return <div className="panel p-6"><div className="mb-5 flex items-center gap-2 text-cyan-300">{icon}<h2 className="text-lg font-bold text-white">{title}</h2></div><div className="space-y-3">{rows.map(([label, value]) => <div className={`flex justify-between gap-4 border-b border-slate-800 pb-2 text-sm last:border-0 ${label.includes("profit") || label.includes("Total") || label.includes("equity") || label.includes("Closing") ? "font-bold text-white" : "text-slate-300"}`} key={label}><span>{label}</span><span className={value < 0 ? "text-rose-300" : "text-slate-100"}>{value < 0 ? `(${eur(Math.abs(value)).replace("€", "€")})` : eur(value)}</span></div>)}</div></div>;
}
