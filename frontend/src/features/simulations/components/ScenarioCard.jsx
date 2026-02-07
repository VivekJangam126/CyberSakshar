import { useNavigate } from 'react-router-dom';
import Button from '../../../components/Button';

const ScenarioCard = ({ scenario }) => {
  const navigate = useNavigate();

  const handleStart = () => {
    navigate('/simulations/intro', { state: { scenario } });
  };

  return (
    <div className="group rounded-3xl border-2 border-slate-200 bg-white/90 p-6 shadow-lg transition-all hover:border-orange-300 hover:shadow-2xl">
      <div className="space-y-4">
        {/* Category Badge */}
        <div className="flex items-center gap-2">
          <div className="inline-flex items-center gap-2 rounded-full border-2 border-slate-200 bg-slate-50 px-3 py-1 text-xs font-bold uppercase tracking-wider text-slate-700">
            <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
            </svg>
            {scenario.category}
          </div>
        </div>

        {/* Title */}
        <h3 className="text-2xl font-black text-slate-900 group-hover:text-orange-700">
          {scenario.title}
        </h3>

        {/* Description */}
        <p className="leading-relaxed text-slate-600">
          {scenario.description}
        </p>

        {/* Meta Info */}
        <div className="flex flex-wrap items-center gap-3 border-t-2 border-slate-100 pt-4">
          <div className="flex items-center gap-1 text-sm font-semibold text-slate-600">
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            {scenario.estimatedTime}
          </div>
          <div className="flex items-center gap-1 text-sm font-semibold text-emerald-600">
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            +{scenario.xpReward} XP
          </div>
          <div className="flex items-center gap-1 text-sm font-semibold text-amber-600">
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
            {scenario.difficulty}
          </div>
        </div>

        {/* CTA Button */}
        <Button
          onClick={handleStart}
          className="w-full py-3 font-bold"
        >
          Start Practice
        </Button>
      </div>
    </div>
  );
};

export default ScenarioCard;
