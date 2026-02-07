// ModuleCard - Display learning module in list view

import { useNavigate } from 'react-router-dom';
import Button from '../../../components/Button';

const ModuleCard = ({ module, recommended = false }) => {
  const navigate = useNavigate();

  const handleStart = () => {
    navigate(`/learning/${module.id}/intro`);
  };

  return (
    <div className="group relative overflow-hidden rounded-2xl border-2 border-slate-200 bg-white/90 p-6 shadow-lg transition-all hover:border-orange-300 hover:shadow-xl">
      {recommended && (
        <div className="absolute right-4 top-4">
          <span className="inline-flex items-center gap-1 rounded-full bg-orange-500 px-3 py-1 text-xs font-bold text-white">
            <span>⭐</span> Recommended
          </span>
        </div>
      )}

      <div className="flex items-start gap-4">
        {/* Icon */}
        <div className="flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-orange-100 to-amber-100 text-4xl">
          {module.icon}
        </div>

        {/* Content */}
        <div className="flex-1">
          <div className="mb-2">
            <span className="inline-block rounded-full bg-slate-100 px-3 py-1 text-xs font-bold text-slate-600">
              {module.category}
            </span>
          </div>
          
          <h3 className="mb-2 text-xl font-black text-slate-900">
            {module.title}
          </h3>

          <div className="mb-4 flex items-center gap-4 text-sm text-slate-600">
            <span className="flex items-center gap-1">
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              {module.duration}
            </span>
            <span className="flex items-center gap-1">
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
              Quick Learning
            </span>
          </div>

          <Button
            onClick={handleStart}
            variant="secondary"
            className="w-full sm:w-auto"
          >
            Start Learning
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ModuleCard;
