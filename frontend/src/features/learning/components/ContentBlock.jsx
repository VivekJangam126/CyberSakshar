// ContentBlock - Display individual learning content piece

const ContentBlock = ({ block, index }) => {
  const isConceptType = block.type === 'concept';
  const isRealWorldType = block.type === 'real-world';

  return (
    <div className="rounded-2xl border-2 border-slate-200 bg-white p-6 shadow-md">
      {/* Block number and type indicator */}
      <div className="mb-3 flex items-center gap-3">
        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-orange-500 text-sm font-bold text-white">
          {index + 1}
        </span>
        {isConceptType && (
          <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-bold text-blue-700">
            💡 Concept
          </span>
        )}
        {isRealWorldType && (
          <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-bold text-emerald-700">
            🌍 Real Example
          </span>
        )}
      </div>

      {/* Title */}
      <h3 className="mb-3 text-xl font-black text-slate-900">
        {block.title}
      </h3>

      {/* Main text */}
      <p className="mb-4 text-base leading-relaxed text-slate-700">
        {block.text}
      </p>

      {/* Example */}
      {block.example && (
        <div className="rounded-xl bg-amber-50 p-4 ring-1 ring-amber-200">
          <p className="text-sm font-semibold text-slate-700">
            <span className="font-black text-amber-700">Example: </span>
            {block.example}
          </p>
        </div>
      )}
    </div>
  );
};

export default ContentBlock;
