import { useNavigate } from 'react-router-dom';

const DashboardRecommendations = ({ recommendations = [] }) => {
  const navigate = useNavigate();

  return (
    <section className="mb-6">
      <div className="mb-5 sm:mb-7">
        <h3 className="text-xl sm:text-2xl font-black bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent mb-1 sm:mb-1.5">
          💡 Recommended Next Steps
        </h3>
        <p className="text-xs sm:text-sm text-slate-600 font-semibold">
          Personalized learning path to improve your security skills
        </p>
      </div>

      {/* Empty State - Premium */}
      {recommendations.length === 0 && (
        <div className="text-center py-12 sm:py-16 bg-gradient-to-br from-emerald-100/60 via-teal-50/40 to-emerald-100/60 rounded-2xl sm:rounded-3xl border-2 border-dashed border-emerald-400 shadow-lg">
          <div className="text-5xl sm:text-6xl mb-3 sm:mb-4">🎉</div>
          <p className="text-lg sm:text-xl font-black text-slate-900 mb-2">
            You are all caught up!
          </p>
          <p className="text-xs sm:text-sm text-slate-700 font-bold">
            Explore more modules or revisit completed lessons to strengthen your skills
          </p>
        </div>
      )}

      {/* Recommendations List - Premium */}
      {recommendations.length > 0 && (
        <div className="space-y-4 sm:space-y-5">
          {recommendations.slice(0, 2).map((rec) => (
            <div
              key={rec.id}
              className="
                bg-gradient-to-br from-white via-orange-50/30 to-white
                border-2 border-orange-200
                rounded-2xl sm:rounded-3xl p-5 sm:p-7
                flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 sm:gap-8
                hover:border-orange-400 hover:shadow-2xl
                transition-all duration-300
                hover:-translate-y-1
                group
                relative overflow-hidden
              "
            >
              {/* Decorative accent */}
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-gradient-to-br from-orange-200/40 to-amber-200/30 rounded-full blur-2xl" />
              
              {/* Left Content */}
              <div className="flex-1 min-w-0 relative z-10">
                <p className="text-xs font-black text-orange-700 uppercase tracking-widest mb-2 sm:mb-3 flex items-center gap-2">
                  <span className="inline-block w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-gradient-to-br from-orange-500 to-amber-500 ring-2 ring-white shadow-lg flex-shrink-0" />
                  {rec.title}
                </p>
                <p className="text-lg sm:text-xl font-black text-slate-900 leading-snug">
                  {rec.subtitle}
                </p>
              </div>

              {/* Action Button - Premium */}
              <button
                onClick={() => navigate(rec.path)}
                className="
                  text-xs sm:text-base font-black
                  px-5 sm:px-8 py-2.5 sm:py-4 rounded-lg sm:rounded-2xl
                  bg-gradient-to-r from-orange-500 via-orange-600 to-amber-600
                  text-white shadow-xl
                  hover:shadow-2xl hover:from-orange-600 hover:via-orange-700 hover:to-amber-700
                  hover:-translate-y-1 hover:scale-105
                  active:scale-95
                  transition-all duration-200
                  whitespace-nowrap
                  border-2 border-orange-700/50
                  relative z-10
                  group
                  flex-shrink-0
                "
              >
                <span className="flex items-center gap-1.5 sm:gap-2\">
                  {rec.action} <span className="group-hover:translate-x-1 transition-transform\">→</span>
                </span>
              </button>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default DashboardRecommendations;
