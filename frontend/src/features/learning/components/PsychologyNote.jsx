// PsychologyNote - Highlight scam psychology insights

const PsychologyNote = ({ psychology }) => {
  return (
    <div className="rounded-2xl border-2 border-purple-200 bg-gradient-to-br from-purple-50 to-pink-50 p-6 shadow-lg">
      {/* Header */}
      <div className="mb-4 flex items-center gap-3">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-purple-500 text-2xl">
          🧠
        </div>
        <h3 className="text-2xl font-black text-slate-900">
          {psychology.title}
        </h3>
      </div>

      {/* Main insight */}
      <div className="mb-4 rounded-xl bg-white/70 p-4">
        <p className="text-base font-semibold leading-relaxed text-slate-800">
          {psychology.insight}
        </p>
      </div>

      {/* Technique explanation */}
      <div className="mb-4 space-y-2">
        <h4 className="text-sm font-bold uppercase tracking-wide text-purple-700">
          How They Do It:
        </h4>
        <p className="text-sm leading-relaxed text-slate-700">
          {psychology.technique}
        </p>
      </div>

      {/* Awareness tip */}
      <div className="rounded-xl bg-purple-100 p-4 ring-1 ring-purple-200">
        <h4 className="mb-2 text-sm font-bold uppercase tracking-wide text-purple-700">
          Stay Aware:
        </h4>
        <p className="text-sm font-semibold leading-relaxed text-slate-800">
          {psychology.awareness}
        </p>
      </div>
    </div>
  );
};

export default PsychologyNote;
