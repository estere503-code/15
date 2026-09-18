import Link from "next/link";
import { ArrowLeft, CheckCircle2, FileSearch } from "lucide-react";
import submission from "../../public/submission.json";

type Decision = (typeof submission.decisions)[number];
const materialIds = new Set(["D041","D042","D043","D044","D045","D046","D047","D048","D049","D056","D057","D058","D059","D064","D065","D066","D067","D068","D071","D072","D073","D074","D075","D091","D100"]);

export default function ReviewPage() {
  const judgments = (submission.decisions as Decision[]).filter((d) => materialIds.has(d.id));
  return <main className="shell"><div className="mx-auto max-w-6xl px-6 py-8 lg:px-10"><Link href="/" className="mb-8 inline-flex items-center gap-2 text-sm text-cyan-300"><ArrowLeft size={16} /> Back to dashboard</Link><header className="mb-8"><div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.24em] text-cyan-300"><FileSearch size={16} /> Independent review trail</div><h1 className="mt-3 text-4xl font-bold text-white">25 material judgments</h1><p className="mt-3 max-w-3xl muted">Each card shows the certified response, the management override or risk, the evidence relied upon, and the statement effect recorded in the submission payload.</p></header><div className="space-y-4">{judgments.map((decision) => <Judgment key={decision.id} decision={decision} />)}</div></div></main>;
}

function Judgment({ decision }: { decision: Decision }) {
  const effect = decision.statementEffect ?? {};
  return <article className="panel overflow-hidden"><div className="flex flex-col gap-3 border-b border-slate-700/70 bg-slate-900/40 p-5 md:flex-row md:items-start md:justify-between"><div><div className="flex items-center gap-3"><span className="rounded-md bg-cyan-400/15 px-2 py-1 text-xs font-bold text-cyan-300">{decision.id}</span><h2 className="font-bold text-white">{decision.question}</h2></div><p className="mt-3 text-sm text-slate-200">{decision.answer}</p></div><span className="inline-flex items-center gap-1 whitespace-nowrap text-xs font-semibold uppercase text-emerald-300"><CheckCircle2 size={15} /> {decision.confidence} confidence</span></div><div className="grid gap-5 p-5 lg:grid-cols-3"><div><h3 className="text-xs font-bold uppercase tracking-wider text-slate-400">Evidence</h3><ul className="mt-3 space-y-2 text-sm muted">{decision.evidence.map((source) => <li key={source}>• {source}</li>)}</ul></div><div><h3 className="text-xs font-bold uppercase tracking-wider text-slate-400">Review trail</h3><p className="mt-3 text-sm leading-6 text-slate-300">{decision.independentChallenge}</p><p className="mt-3 text-sm leading-6 text-slate-300">{decision.studentReasoning}</p></div><div><h3 className="text-xs font-bold uppercase tracking-wider text-slate-400">Statement effect</h3><div className="mt-3 grid grid-cols-2 gap-2 text-sm">{Object.entries(effect).map(([label, value]) => <div className="rounded-lg bg-slate-900/60 p-2" key={label}><div className="text-xs capitalize muted">{label}</div><div className="mt-1 font-semibold text-slate-100">{value === null ? "—" : String(value)}</div></div>)}</div></div></div></article>;
}
