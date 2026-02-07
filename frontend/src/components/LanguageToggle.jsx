const LanguageToggle = ({ activeLang, onLanguageChange, languages }) => {
  return (
    <div className="flex items-center gap-2 rounded-full bg-white/90 border-2 border-slate-300 p-1.5 shadow-lg hover:shadow-xl transition-all">
      {languages.map((lang) => (
        <button
          key={lang.code}
          type="button"
          onClick={() => onLanguageChange(lang.code)}
          className={`
            px-4 py-2 text-xs sm:text-sm font-bold
            rounded-full transition-all duration-300
            border-2
            ${
              activeLang === lang.code
                ? 'bg-gradient-to-r from-orange-500 to-amber-600 text-white border-orange-600 shadow-lg hover:shadow-xl'
                : 'text-slate-700 border-transparent hover:text-slate-900 hover:bg-slate-100'
            }
          `}
          aria-pressed={activeLang === lang.code}
          title={`Switch to ${lang.label}`}
        >
          {lang.label}
        </button>
      ))}
    </div>
  );
};

export default LanguageToggle;
