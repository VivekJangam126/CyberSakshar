import { useNavigate } from 'react-router-dom';

const DashboardRecommendations = ({ recommendations = [] }) => {
  const navigate = useNavigate();

  return (
    <section className="mb-6">
      <h3 className="text-base font-semibold text-white mb-3">
        Recommended Next Steps
      </h3>

      {/* Empty State */}
      {recommendations.length === 0 && (
        <p className="text-sm text-gray-400">
          You are all caught up. Explore more to improve your safety score.
        </p>
      )}

      <div className="space-y-3">
        {recommendations.slice(0, 2).map((rec) => (
          <div
            key={rec.id}
            className="
              bg-gray-900 border border-gray-800
              rounded-xl p-4
              flex items-center justify-between gap-4
              hover:bg-gray-800 transition-colors
            "
          >
            {/* Recommendation Text */}
            <div>
              <p className="text-xs text-gray-400 mb-1">
                {rec.title}
              </p>
              <p className="text-sm font-medium text-white">
                {rec.subtitle}
              </p>
            </div>

            {/* Action */}
            <button
              onClick={() => navigate(rec.path)}
              className="
                text-sm font-medium
                text-blue-400 hover:text-blue-300
                whitespace-nowrap
              "
            >
              {rec.action} →
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default DashboardRecommendations;
