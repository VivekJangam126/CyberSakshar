const SimulationProgress = ({ currentStep, totalSteps, title }) => {
  const progress = (currentStep / totalSteps) * 100;

  return (
    <div className="rounded-2xl border-2 border-slate-200 bg-white/80 p-4 shadow-lg">
      <div className="mb-3 flex items-center justify-between">
        <h3 className="font-bold text-slate-900">{title}</h3>
        <span className="text-sm font-bold text-slate-600">
          Step {currentStep} of {totalSteps}
        </span>
      </div>
      <div className="h-3 w-full overflow-hidden rounded-full bg-slate-200">
        <div
          className="h-full rounded-full bg-gradient-to-r from-orange-500 to-amber-500 transition-all duration-500 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
};

export default SimulationProgress;
