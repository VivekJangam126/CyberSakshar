import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '../../components/Button';
import AppFooter from '../../components/AppFooter';
import { landingContent } from './landingContent';

const languages = [
  { code: 'en', label: 'EN' },
  { code: 'hi', label: 'हिंदी' },
  { code: 'mr', label: 'मराठी' },
];

const LandingNavbar = ({ activeLang, onLanguageChange }) => {
  return (
    <header className="relative z-20 border-b border-slate-200/70 bg-white/80 backdrop-blur-sm">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-3 px-4 py-4 sm:gap-4 sm:px-6 lg:px-8">
        <Link to="/" className="text-2xl font-black tracking-tight text-slate-900">
          {landingContent[activeLang].nav.title}
        </Link>
        <div className="flex items-center gap-3">
          <div className="flex flex-wrap items-center gap-2 rounded-full border border-slate-200 bg-white/90 px-2 py-1 shadow-sm">
            {languages.map((lang) => (
            <button
              key={lang.code}
              type="button"
              onClick={() => onLanguageChange(lang.code)}
              className={`rounded-full px-3 py-1 text-xs font-bold transition-colors ${
                activeLang === lang.code
                  ? 'bg-slate-900 text-white'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              {lang.label}
            </button>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
};

const Landing = () => {
  const [activeLang, setActiveLang] = useState('en');
  const content = landingContent[activeLang];

  useEffect(() => {
    const storedLang = localStorage.getItem('cybersakshar_lang');
    if (storedLang && landingContent[storedLang]) {
      setActiveLang(storedLang);
    }
  }, []);

  const handleLanguageChange = (code) => {
    setActiveLang(code);
    localStorage.setItem('cybersakshar_lang', code);
  };

  return (
    <div
      className="min-h-screen bg-slate-50 text-slate-900"
      style={{ fontFamily: '"Fraunces", "Times New Roman", serif' }}
    >
      {/* Hero Section */}
      <div className="relative overflow-hidden border-b border-slate-200/70 bg-gradient-to-br from-amber-50/50 via-white to-blue-50/30">
        {/* Subtle background elements */}
        <div className="absolute -top-40 -right-40 h-96 w-96 rounded-full bg-amber-200/30 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-cyan-200/40 blur-3xl" />

        <LandingNavbar activeLang={activeLang} onLanguageChange={handleLanguageChange} />
        
        {/* Hero Content */}
        <section className="relative z-10 px-4 pb-20 pt-12 sm:px-6 sm:pb-24 lg:px-8 lg:pb-32 lg:pt-20">
          <div className="mx-auto grid max-w-7xl gap-8 rounded-3xl border border-slate-200/70 bg-white/80 p-5 shadow-2xl shadow-amber-500/10 ring-1 ring-white/70 sm:gap-12 sm:p-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
            <div className="space-y-7">
              <div className="inline-flex items-center gap-2 rounded-full border border-amber-200 bg-amber-50 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-amber-800">
                <span className="h-1.5 w-1.5 rounded-full bg-amber-500" />
                {content.hero.badge}
              </div>
              
              <h1 className="text-4xl font-black leading-tight sm:text-6xl lg:text-7xl">
                {content.hero.titleLine1}<br />
                <span className="relative inline-block text-orange-600" stroke="#f59e0b">
                  {content.hero.titleLine2}
                  <svg className="absolute -bottom-2 left-0 w-full" height="12" viewBox="0 0 300 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2 10C50 5 100 2 150 4C200 6 250 8 298 7" stroke="#f59e0b" strokeWidth="4" strokeLinecap="round"/>
                  </svg>
                </span>
              </h1>
              
              <p className="max-w-xl text-lg leading-relaxed text-slate-600">
                {content.hero.subtitle}
              </p>
              
              <div className="flex flex-col gap-3 pt-2 sm:flex-row sm:flex-wrap sm:gap-4">
                <Link to="/login">
                  <Button className="px-8 py-3.5 text-base font-semibold shadow-lg shadow-amber-500/25 transition-all hover:shadow-xl hover:shadow-amber-500/30">
                    {content.hero.primaryCta}
                  </Button>
                </Link>
                <Link to="/register">
                  <Button variant="secondary" className="px-8 py-3.5 text-base font-semibold">
                    {content.hero.secondaryCta}
                  </Button>
                </Link>
              </div>
              
              <div className="flex flex-wrap gap-3">
                {content.hero.chips.map((chip) => (
                  <span
                    key={chip}
                    className="rounded-full border border-emerald-200 bg-emerald-50 px-4 py-1.5 text-xs font-semibold text-emerald-700 sm:text-sm"
                  >
                    {chip}
                  </span>
                ))}
              </div>
            </div>

            {/* Interactive Demo Card */}
            <div className="rounded-3xl border-2 border-slate-200 bg-white/90 p-5 shadow-xl ring-1 ring-slate-100 sm:p-7">
              <div className="space-y-5">
                <div className="rounded-2xl bg-slate-50 p-5 ring-1 ring-slate-100">
                  <div className="mb-3 flex items-center justify-between">
                    <span className="text-xs font-bold uppercase tracking-wide text-slate-500">
                      {content.hero.demoTitle}
                    </span>
                    <span className="flex h-2 w-2">
                      <span className="absolute inline-flex h-2 w-2 animate-ping rounded-full bg-amber-400 opacity-75"></span>
                      <span className="relative inline-flex h-2 w-2 rounded-full bg-amber-500"></span>
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-slate-900">{content.hero.demoHeading}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">
                    {content.hero.demoText}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {content.hero.demoTags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-lg bg-rose-100 px-3 py-1.5 text-xs font-bold text-rose-700"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="rounded-2xl border-2 border-dashed border-slate-200 bg-slate-50/50 p-5">
                  <p className="text-sm leading-relaxed text-slate-600">
                    {content.hero.demoFooter}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* About Section */}
      <section className="px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="mx-auto -mt-10 grid max-w-7xl gap-10 sm:-mt-12 lg:-mt-16 lg:grid-cols-[1fr_0.9fr] lg:items-center lg:gap-16">
          <div className="space-y-5">
            <h2 className="text-4xl font-black leading-tight">{content.about.title}</h2>
            <div className="h-1 w-20 rounded-full bg-gradient-to-r from-amber-500 to-orange-500" />
            <p className="text-lg leading-relaxed text-slate-600">{content.about.text}</p>
            <div className="grid gap-4 pt-2 sm:grid-cols-2">
              {content.about.highlights.map((item) => (
                <div
                  key={item.title}
                  className="flex items-start gap-3 rounded-2xl border border-amber-100/70 bg-amber-50/40 p-3"
                >
                  <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-amber-100 text-amber-600">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">{item.title}</h4>
                    <p className="text-sm text-slate-600">{item.text}</p>
                  </div>
                </div>
              ))}
              
            </div>
          </div>
          
          <div className="relative overflow-hidden rounded-3xl border-2 border-slate-900 bg-slate-900 p-8 shadow-2xl">
            <div className="absolute -right-12 -top-12 h-40 w-40 rounded-full bg-amber-500/20 blur-3xl" />
            <div className="relative">
              <p className="text-xs font-black uppercase tracking-[0.2em] text-amber-400">{content.about.missionLabel}</p>
              <h3 className="mt-3 text-2xl font-bold text-white sm:text-3xl">{content.about.missionTitle}</h3>
              <p className="mt-4 leading-relaxed text-slate-300">{content.about.missionText}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="border-y border-slate-200 bg-gradient-to-br from-white via-slate-50 to-amber-50/30 px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <p className="text-sm font-bold uppercase tracking-wider text-amber-600">{content.features.eyebrow}</p>
            <h2 className="mt-2 text-4xl font-black">{content.features.title}</h2>
          </div>
          
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {content.features.cards.map((feature) => (
              <div
                key={feature.title}
                className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white/80 p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-amber-200 hover:shadow-xl"
              >
                <div className="absolute right-0 top-0 h-20 w-20 translate-x-8 -translate-y-8 rounded-full bg-gradient-to-br from-amber-200/40 to-orange-200/40 blur-2xl transition-transform duration-300 group-hover:scale-150" />
                <div className="relative">
                  <div className="mb-4 text-4xl transition-transform duration-300 group-hover:scale-110">
                    {feature.icon}
                  </div>
                  <h3 className="text-lg font-bold text-slate-900">{feature.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section className="border-y border-slate-200 bg-gradient-to-b from-slate-50 to-white px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <h2 className="text-4xl font-black">{content.steps.title}</h2>
            <p className="mt-3 text-lg text-slate-600">{content.steps.subtitle}</p>
          </div>
          
          <div className="relative grid gap-8 md:grid-cols-3">
            {/* Connection line for desktop */}
            <div className="absolute left-1/2 top-16 hidden h-0.5 w-full -translate-x-1/2 bg-gradient-to-r from-amber-200 via-amber-400 to-amber-200 md:block" style={{ width: 'calc(100% - 200px)' }} />
            
            {content.steps.items.map((item, idx) => (
              <div key={item.title} className="relative">
                <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full border-4 border-white bg-gradient-to-br from-amber-500 to-orange-500 text-2xl font-black text-white shadow-lg">
                  {idx + 1}
                </div>
                <div className="rounded-2xl border-2 border-slate-200 bg-white p-6 shadow-lg ring-1 ring-slate-100">
                  <h3 className="text-xl font-bold text-slate-900">{item.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12">
            <h2 className="text-4xl font-black">{content.reasons.title}</h2>
            <div className="mt-2 h-1 w-24 rounded-full bg-gradient-to-r from-amber-500 to-orange-500" />
          </div>
          
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {content.reasons.items.map((reason) => (
              <div
                key={reason}
                className="group flex items-center gap-4 rounded-xl border border-slate-200 bg-white/90 p-5 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-emerald-300 hover:shadow-md"
              >
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-emerald-500 to-green-600 text-white shadow-md">
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="font-semibold text-slate-700">{reason}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust & Safety */}
      <section className="border-y-2 border-slate-200 bg-gradient-to-br from-slate-50 to-blue-50/30 px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="mx-auto -mt-6 grid max-w-7xl gap-12 sm:-mt-8 lg:-mt-10 lg:grid-cols-2 lg:items-center">
          <div className="space-y-6">
            <h2 className="text-4xl font-black leading-tight">{content.trust.title}</h2>
            
            <div className="rounded-2xl border-2 border-rose-200 bg-gradient-to-br from-rose-50 to-red-50 p-6 shadow-lg ring-1 ring-rose-200/60">
              <div className="flex items-center gap-4">
                <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-full bg-rose-600 text-2xl text-white shadow-lg">
                  🚨
                </div>
                <div>
                  <p className="text-sm font-bold text-slate-700">{content.trust.helplineLabel}</p>
                  <p className="text-3xl font-black text-rose-600">{content.trust.helpline}</p>
                </div>
              </div>
            </div>
            
            <div className="space-y-3">
              <p className="text-sm font-bold uppercase tracking-wide text-slate-500">{content.trust.resourcesLabel}</p>
              <a
                href="https://cybercrime.gov.in"
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-between rounded-xl border border-slate-200 bg-white p-4 font-semibold text-slate-700 shadow-sm transition-all hover:border-slate-300 hover:shadow-md"
              >
                <span>{content.trust.resources[0]}</span>
                <span className="text-xl text-slate-400">→</span>
              </a>
              <a
                href="https://www.cert-in.org.in"
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-between rounded-xl border border-slate-200 bg-white p-4 font-semibold text-slate-700 shadow-sm transition-all hover:border-slate-300 hover:shadow-md"
              >
                <span>{content.trust.resources[1]}</span>
                <span className="text-xl text-slate-400">→</span>
              </a>
            </div>
            
            <div className="rounded-xl bg-blue-50 p-4 ring-1 ring-blue-100">
              <p className="text-sm font-semibold leading-relaxed text-slate-700">
                {content.trust.privacy}
              </p>
            </div>
          </div>
          
          <div className="relative overflow-hidden rounded-3xl border-2 border-slate-900 bg-slate-900 p-8 shadow-2xl lg:p-10">
            <div className="absolute -left-12 -top-12 h-48 w-48 rounded-full bg-cyan-500/20 blur-3xl" />
            <div className="relative space-y-4">
              <h3 className="text-3xl font-bold text-white">{content.trust.supportTitle}</h3>
              <p className="text-lg leading-relaxed text-slate-300">{content.trust.supportText}</p>
              <div className="grid grid-cols-2 gap-4 pt-4">
                <div className="rounded-lg bg-white/10 p-4 backdrop-blur">
                  <p className="text-2xl font-black text-white">24/7</p>
                  <p className="text-sm text-slate-300">{content.trust.stats[0]}</p>
                </div>
                <div className="rounded-lg bg-white/10 p-4 backdrop-blur">
                  <p className="text-2xl font-black text-white">100%</p>
                  <p className="text-sm text-slate-300">{content.trust.stats[1]}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 px-4 py-20 text-white sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl rounded-3xl border border-slate-700/60 bg-slate-900/70 p-10 text-center shadow-2xl ring-1 ring-white/10">
          <div className="space-y-6">
            <h2 className="text-4xl font-black leading-tight sm:text-5xl">{content.cta.title}</h2>
            <p className="mx-auto max-w-2xl text-lg text-slate-300">{content.cta.text}</p>
            <div className="flex flex-wrap justify-center gap-4 pt-4">
              <Link to="/login">
                <Button className="px-10 py-4 text-lg font-bold shadow-2xl shadow-amber-500/30 transition-all hover:shadow-amber-500/40">
                  {content.cta.primary}
                </Button>
              </Link>
              <Link to="/register">
                <Button variant="secondary" className="px-10 py-4 text-lg font-bold">
                  {content.cta.secondary}
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <AppFooter />
    </div>
  );
};

export default Landing;